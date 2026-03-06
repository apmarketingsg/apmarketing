/**
 * GeoDirectory WordPress REST API client for petsgowhere.sg
 *
 * Provides typed CRUD operations for the `gd_place` custom post type.
 * Works in both server-side Next.js code (API routes / Server Actions)
 * and from standalone Node scripts.
 *
 * Environment variables expected (add to .env.local):
 *   WP_BASE_URL        https://petsgowhere.sg/wp-json/wp/v2
 *   WP_USER            apmarketingsg@gmail.com
 *   WP_APP_PASSWORD    rEWB mRaj u5UP PjBF rhdf B0Pc
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GdMeta {
  /** Street address */
  street?: string;
  /** City */
  city?: string;
  /** State / region */
  region?: string;
  /** ISO 2-letter country code, e.g. "SG" */
  country?: string;
  /** Postal code */
  zip?: string;
  phone?: string;
  email?: string;
  website?: string;
  latitude?: string;
  longitude?: string;
  /** Business hours – GeoDirectory JSON string */
  business_hours?: string;
  /** Any additional GeoDirectory meta fields */
  [key: string]: string | undefined;
}

export interface GdPlaceInput {
  /** Listing title / business name */
  title: string;
  /** Post status: 'publish' | 'draft' | 'pending' | 'private' */
  status?: "publish" | "draft" | "pending" | "private";
  /** HTML description */
  content?: string;
  /** Short excerpt */
  excerpt?: string;
  /** GeoDirectory meta fields */
  meta?: GdMeta;
  /** Category term IDs */
  gd_placecategory?: number[];
  /** Tag term IDs */
  gd_placetags?: number[];
  /** Featured image media ID */
  featured_media?: number;
}

export interface GdPlaceResponse {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  meta: Record<string, unknown>;
  gd_placecategory: number[];
  gd_placetags: number[];
}

export interface ListOptions {
  perPage?: number;
  page?: number;
  /** 'any' returns all statuses (requires auth) */
  status?: "publish" | "draft" | "pending" | "any";
  /** Full-text search */
  search?: string;
  orderby?: "date" | "title" | "modified" | "id";
  order?: "asc" | "desc";
}

// ---------------------------------------------------------------------------
// Config helpers
// ---------------------------------------------------------------------------

function getConfig() {
  return {
    baseUrl:
      process.env.WP_BASE_URL ?? "https://petsgowhere.sg/wp-json/wp/v2",
    user: process.env.WP_USER ?? "apmarketingsg@gmail.com",
    password: process.env.WP_APP_PASSWORD ?? "rEWB mRaj u5UP PjBF rhdf B0Pc",
  };
}

function authHeader(user: string, password: string): string {
  const token = Buffer.from(`${user}:${password}`).toString("base64");
  return `Basic ${token}`;
}

// ---------------------------------------------------------------------------
// Low-level fetch wrapper
// ---------------------------------------------------------------------------

async function wpFetch<T>(
  method: string,
  path: string,
  params?: Record<string, string | number>,
  body?: unknown
): Promise<T> {
  const { baseUrl, user, password } = getConfig();

  let url = `${baseUrl}/${path.replace(/^\//, "")}`;
  if (params && Object.keys(params).length > 0) {
    const qs = new URLSearchParams(
      Object.fromEntries(
        Object.entries(params).map(([k, v]) => [k, String(v)])
      )
    ).toString();
    url += `?${qs}`;
  }

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: authHeader(user, password),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    // Don't cache API responses
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    let msg = `WordPress API error ${res.status}`;
    try {
      const err = JSON.parse(text) as { code?: string; message?: string };
      msg = `[${err.code}] ${err.message}`;
    } catch {
      msg = text.slice(0, 300);
    }
    throw new Error(msg);
  }

  const text = await res.text();
  return text ? (JSON.parse(text) as T) : ({} as T);
}

// ---------------------------------------------------------------------------
// Public CRUD API
// ---------------------------------------------------------------------------

/**
 * List gd_place listings with optional filters.
 */
export async function listListings(
  opts: ListOptions = {}
): Promise<GdPlaceResponse[]> {
  const params: Record<string, string | number> = {
    per_page: opts.perPage ?? 20,
    page: opts.page ?? 1,
    status: opts.status ?? "publish",
    _embed: 1,
  };
  if (opts.search) params.search = opts.search;
  if (opts.orderby) params.orderby = opts.orderby;
  if (opts.order) params.order = opts.order;

  return wpFetch<GdPlaceResponse[]>("GET", "gd_place", params);
}

/**
 * Fetch a single listing by its WordPress post ID.
 */
export async function getListing(id: number): Promise<GdPlaceResponse> {
  return wpFetch<GdPlaceResponse>("GET", `gd_place/${id}`, { _embed: 1 });
}

/**
 * Create a new listing. Returns the created post object.
 */
export async function createListing(
  data: GdPlaceInput
): Promise<GdPlaceResponse> {
  return wpFetch<GdPlaceResponse>("POST", "gd_place", undefined, data);
}

/**
 * Update an existing listing. Only supply the fields you want to change.
 * Returns the updated post object.
 */
export async function updateListing(
  id: number,
  data: Partial<GdPlaceInput>
): Promise<GdPlaceResponse> {
  return wpFetch<GdPlaceResponse>("PUT", `gd_place/${id}`, undefined, data);
}

/**
 * Delete a listing.
 * @param force - true = permanent delete; false (default) = move to trash
 */
export async function deleteListing(
  id: number,
  force = false
): Promise<{ deleted: boolean; previous: GdPlaceResponse }> {
  return wpFetch<{ deleted: boolean; previous: GdPlaceResponse }>(
    "DELETE",
    `gd_place/${id}`,
    { force: force ? 1 : 0 }
  );
}

/**
 * Test the authenticated connection. Returns the current WP user.
 */
export async function testConnection(): Promise<{
  id: number;
  name: string;
  email: string;
  roles: string[];
}> {
  return wpFetch("GET", "users/me");
}
