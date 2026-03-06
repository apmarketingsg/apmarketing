#!/usr/bin/env python3
"""
WordPress GeoDirectory API Client for petsgowhere.sg
Supports full CRUD operations on gd_place listings.

Usage:
    python wp_geodirectory_client.py explore        # test connection & show data structure
    python wp_geodirectory_client.py list           # list all listings
    python wp_geodirectory_client.py get <id>       # get a single listing
    python wp_geodirectory_client.py create         # create listing from template
    python wp_geodirectory_client.py update <id>    # update a listing
    python wp_geodirectory_client.py delete <id>    # delete a listing
"""

import sys
import json
import base64
import urllib.request
import urllib.parse
import urllib.error
from typing import Optional, Any

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

WP_JSON_ROOT = "https://petsgowhere.sg/wp-json"
BASE_URL = f"{WP_JSON_ROOT}/geodir/v2"
WP_USER = "apmarketingsg@gmail.com"
WP_APP_PASSWORD = "rEWB mRaj u5UP PjBF rhdf B0Pc"

# Basic-auth header value
_auth_token = base64.b64encode(f"{WP_USER}:{WP_APP_PASSWORD}".encode()).decode()
HEADERS = {
    "Authorization": f"Basic {_auth_token}",
    "Content-Type": "application/json",
    "Accept": "application/json",
    "User-Agent": "PetsGoWhere-API-Client/1.0",
}


# ---------------------------------------------------------------------------
# Low-level HTTP helpers
# ---------------------------------------------------------------------------

def _request_url(method: str, url: str, params: Optional[dict] = None, body: Optional[dict] = None) -> Any:
    """Make an authenticated request to an absolute URL."""
    if params:
        url += "?" + urllib.parse.urlencode(params)

    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(url, data=data, headers=HEADERS, method=method)

    try:
        with urllib.request.urlopen(req) as resp:
            raw = resp.read().decode()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        body_text = e.read().decode()
        print(f"[ERROR] HTTP {e.code} on {method} {url}")
        try:
            err = json.loads(body_text)
            print(f"        code: {err.get('code')}")
            print(f"        message: {err.get('message')}")
        except Exception:
            print(f"        {body_text[:500]}")
        return None
    except urllib.error.URLError as e:
        print(f"[ERROR] Connection failed: {e.reason}")
        return None


def _request(method: str, endpoint: str, params: Optional[dict] = None, body: Optional[dict] = None) -> Any:
    """Make an authenticated request to the WordPress REST API."""
    url = f"{BASE_URL}/{endpoint.lstrip('/')}"
    if params:
        url += "?" + urllib.parse.urlencode(params)

    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(url, data=data, headers=HEADERS, method=method)

    try:
        with urllib.request.urlopen(req) as resp:
            raw = resp.read().decode()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        body_text = e.read().decode()
        print(f"[ERROR] HTTP {e.code} on {method} {url}")
        try:
            err = json.loads(body_text)
            print(f"        code: {err.get('code')}")
            print(f"        message: {err.get('message')}")
        except Exception:
            print(f"        {body_text[:500]}")
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"[ERROR] Connection failed: {e.reason}")
        sys.exit(1)


def get(endpoint: str, params: Optional[dict] = None) -> Any:
    return _request("GET", endpoint, params=params)

def post(endpoint: str, body: dict) -> Any:
    return _request("POST", endpoint, body=body)

def put(endpoint: str, body: dict) -> Any:
    return _request("PUT", endpoint, body=body)

def delete(endpoint: str, params: Optional[dict] = None) -> Any:
    return _request("DELETE", endpoint, params=params)


# ---------------------------------------------------------------------------
# GeoDirectory listing CRUD
# ---------------------------------------------------------------------------

class GeoDirectoryClient:
    ENDPOINT = "listings"

    # ---- READ ---------------------------------------------------------------

    def list_listings(self, per_page: int = 10, page: int = 1, status: str = "any") -> list:
        """Return a page of listings."""
        return get(self.ENDPOINT, params={
            "per_page": per_page,
            "page": page,
            "status": status,
            "_embed": 1,
        })

    def get_listing(self, post_id: int) -> dict:
        """Return a single listing by post ID."""
        return get(f"{self.ENDPOINT}/{post_id}", params={"_embed": 1})

    # ---- CREATE -------------------------------------------------------------

    def create_listing(self, data: dict) -> dict:
        """
        Create a new gd_place listing.

        Minimum required fields:
            title     (str)  – listing name
            status    (str)  – 'publish' | 'draft' | 'pending'

        Common GeoDirectory meta fields (add as top-level keys):
            street          phone           email
            website         zip             city
            region          country         latitude
            longitude       business_hours  default_category  (term ID)
        """
        return post(self.ENDPOINT, data)

    # ---- UPDATE -------------------------------------------------------------

    def update_listing(self, post_id: int, data: dict) -> dict:
        """Update an existing listing. Only supply the fields you want to change."""
        return put(f"{self.ENDPOINT}/{post_id}", data)

    # ---- DELETE -------------------------------------------------------------

    def delete_listing(self, post_id: int, force: bool = False) -> dict:
        """
        Delete a listing.
        force=False  → move to trash
        force=True   → permanently delete
        """
        return delete(f"{self.ENDPOINT}/{post_id}", params={"force": int(force)})


# ---------------------------------------------------------------------------
# Exploration / diagnostics
# ---------------------------------------------------------------------------

def discover_routes():
    """Fetch the WP REST API root and list all registered namespaces and routes."""
    print("=" * 60)
    print("Discovering WP REST API routes …")
    result = _request_url("GET", WP_JSON_ROOT)
    if not result:
        print("  Could not reach WP JSON root.")
        return

    namespaces = result.get("namespaces", [])
    print(f"\nRegistered namespaces ({len(namespaces)}):")
    for ns in namespaces:
        print(f"  {ns}")

    routes = result.get("routes", {})
    print(f"\nRoutes containing 'geo' or 'place' or 'listing':")
    for path in sorted(routes.keys()):
        lower = path.lower()
        if any(kw in lower for kw in ("geo", "place", "listing", "directory")):
            methods = list(routes[path].get("methods", []))
            print(f"  {path}  [{', '.join(methods)}]")

    print(f"\nAll namespaces containing 'geo' or 'dir':")
    for ns in namespaces:
        if any(kw in ns.lower() for kw in ("geo", "dir")):
            print(f"  → {ns}")

    return namespaces, routes


def probe_gd_endpoint():
    """Try common GeoDirectory REST endpoint variants and report which work."""
    print("=" * 60)
    print("Probing known GeoDirectory endpoint variants …")
    candidates = [
        f"{WP_JSON_ROOT}/geodir/v2/listings",
        f"{WP_JSON_ROOT}/geodir/v2/listings/categories",
        f"{WP_JSON_ROOT}/geodir/v2/listings/tags",
        f"{WP_JSON_ROOT}/geodir/v2/listings/fields",
    ]
    for url in candidates:
        result = _request_url("GET", url, params={"per_page": 1})
        if result is not None:
            count = len(result) if isinstance(result, list) else "?"
            print(f"  ✓ WORKS → {url}  (returned {count} item(s))")
        else:
            print(f"  ✗ failed → {url}")


def test_connection():
    """Test the authenticated connection and print user info."""
    print("=" * 60)
    print("Testing authenticated connection …")
    me = get("users/me")
    print(f"  Connected as: {me.get('name')} (ID {me.get('id')})")
    print(f"  Email: {me.get('email', 'n/a')}")
    print(f"  Roles: {me.get('roles', [])}")
    print("  ✓ Authentication successful")
    return me


def fetch_sample_and_show_structure(n: int = 3):
    """Fetch N listings and print their full structure."""
    print("\n" + "=" * 60)
    print(f"Fetching {n} sample gd_place listings …")
    client = GeoDirectoryClient()
    listings = client.list_listings(per_page=n, status="any")

    if not listings:
        print("  No listings found.")
        return

    print(f"  Found {len(listings)} listing(s) in this page.\n")

    # Show first listing in full
    first = listings[0]
    print("─" * 60)
    print("FULL STRUCTURE OF FIRST LISTING (JSON):")
    print("─" * 60)
    print(json.dumps(first, indent=2, default=str))

    # Summarise meta keys across all fetched listings
    all_meta_keys: set = set()
    for listing in listings:
        meta = listing.get("meta", {})
        all_meta_keys.update(meta.keys())

    print("\n" + "─" * 60)
    print("META KEYS found across all fetched listings:")
    print("─" * 60)
    for key in sorted(all_meta_keys):
        sample_values = [
            str(l.get("meta", {}).get(key, ""))[:60]
            for l in listings
            if l.get("meta", {}).get(key) not in (None, "", [], {})
        ]
        sample = sample_values[0] if sample_values else "(empty)"
        print(f"  {key:<40} e.g. {sample}")

    # Show top-level keys
    print("\n" + "─" * 60)
    print("TOP-LEVEL KEYS in gd_place post object:")
    print("─" * 60)
    for key in sorted(first.keys()):
        print(f"  {key}")

    return listings


def show_listing_summary(listing: dict):
    """Print a compact one-line summary of a listing."""
    title  = listing.get("title", {}).get("rendered", "(no title)")
    post_id = listing.get("id")
    status = listing.get("status")
    link   = listing.get("link", "")
    print(f"  [{post_id}] {title!r:50s} ({status}) → {link}")


# ---------------------------------------------------------------------------
# CLI entry point
# ---------------------------------------------------------------------------

def main():
    args = sys.argv[1:]
    cmd  = args[0] if args else "explore"
    client = GeoDirectoryClient()

    if cmd == "routes":
        discover_routes()

    elif cmd == "probe":
        probe_gd_endpoint()

    elif cmd == "explore":
        test_connection()
        discover_routes()
        probe_gd_endpoint()
        listings = fetch_sample_and_show_structure(n=3)
        if listings:
            print("\n" + "─" * 60)
            print("LISTING SUMMARIES:")
            for l in listings:
                show_listing_summary(l)

    elif cmd == "list":
        per_page = int(args[1]) if len(args) > 1 else 20
        print(f"Fetching up to {per_page} listings …\n")
        listings = client.list_listings(per_page=per_page, status="any")
        for l in listings:
            show_listing_summary(l)
        print(f"\nTotal returned: {len(listings)}")

    elif cmd == "get":
        if len(args) < 2:
            print("Usage: wp_geodirectory_client.py get <id>")
            sys.exit(1)
        post_id = int(args[1])
        listing = client.get_listing(post_id)
        print(json.dumps(listing, indent=2, default=str))

    elif cmd == "create":
        # Example payload – edit before running
        sample = {
            "title": "Sample Pet-Friendly Cafe",
            "status": "draft",
            "content": "A lovely cafe that welcomes pets and their owners.",
            "meta": {
                "street":    "123 Orchard Road",
                "city":      "Singapore",
                "region":    "Central Region",
                "country":   "SG",
                "zip":       "238858",
                "phone":     "+65 6000 0000",
                "email":     "hello@samplecafe.sg",
                "website":   "https://samplecafe.sg",
                "latitude":  "1.3048",
                "longitude": "103.8318",
            },
        }
        print("Creating listing with payload:")
        print(json.dumps(sample, indent=2))
        result = client.create_listing(sample)
        print("\nCreated listing:")
        print(f"  ID: {result.get('id')}")
        print(f"  Status: {result.get('status')}")
        print(f"  Link: {result.get('link')}")

    elif cmd == "update":
        if len(args) < 2:
            print("Usage: wp_geodirectory_client.py update <id>")
            sys.exit(1)
        post_id = int(args[1])
        # Edit the dict below to match what you want to change
        updates = {
            "meta": {
                "phone": "+65 6000 9999",
            },
        }
        print(f"Updating listing {post_id} with: {updates}")
        result = client.update_listing(post_id, updates)
        print("Updated OK →", result.get("id"), result.get("status"))

    elif cmd == "delete":
        if len(args) < 2:
            print("Usage: wp_geodirectory_client.py delete <id>")
            sys.exit(1)
        post_id = int(args[1])
        force   = "--force" in args
        result  = client.delete_listing(post_id, force=force)
        print(f"Deleted listing {post_id}: status={result.get('status', 'ok')}")

    else:
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main()
