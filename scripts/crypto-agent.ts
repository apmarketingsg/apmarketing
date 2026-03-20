/**
 * Crypto Research Agent
 *
 * Uses Claude claude-opus-4-6 with web_search to research the top 10 cryptocurrencies
 * and sends a formatted HTML report via email every morning.
 *
 * Run manually:  npx ts-node --project scripts/tsconfig.scripts.json scripts/crypto-agent.ts
 * Run scheduled: npm run crypto:start
 */

import Anthropic from "@anthropic-ai/sdk";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

// Load .env.local from the project root
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// ─── Config ──────────────────────────────────────────────────────────────────

const REQUIRED_ENV = [
  "ANTHROPIC_API_KEY",
  "EMAIL_FROM",
  "EMAIL_TO",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
];

function validateEnv(): void {
  const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}\n` +
        `Copy .env.local.example to .env.local and fill in the values.`
    );
  }
}

// ─── Claude research ─────────────────────────────────────────────────────────

const RESEARCH_PROMPT = `You are a professional crypto market analyst. Today is ${new Date().toDateString()}.

Your task: Research the current top 10 cryptocurrencies by market cap and produce a comprehensive daily briefing.

For EACH of the top 10 coins, gather and report:
1. **Current price** (USD) and **24-hour price change** (%)
2. **Market capitalisation** and **24-hour trading volume**
3. **Key news or events** from the last 24 hours (max 3 bullet points)
4. **Trend assessment**: Bullish / Bearish / Neutral — with a one-line reason
5. **Summary**: 2–3 plain-English sentences explaining what is happening with this coin and why it matters today

After all 10 coins, include a short **Overall Market Sentiment** paragraph (3–5 sentences) covering:
- General market direction (bull/bear/sideways)
- Biggest movers and why
- Any macro factors (regulation news, ETF flows, Fed rates, etc.) affecting the market

Format your entire response as clean, valid HTML — no markdown, no code fences.
Use the exact HTML structure below as a template. Fill in real data from your searches.

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daily Crypto Report</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f172a; color: #e2e8f0; margin: 0; padding: 20px; }
  .container { max-width: 700px; margin: 0 auto; }
  .header { text-align: center; padding: 32px 0 24px; border-bottom: 1px solid #1e293b; margin-bottom: 28px; }
  .header h1 { font-size: 26px; font-weight: 700; color: #f8fafc; margin: 0 0 6px; }
  .header p { color: #94a3b8; font-size: 14px; margin: 0; }
  .coin-card { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 20px; margin-bottom: 16px; }
  .coin-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
  .coin-name { font-size: 18px; font-weight: 700; color: #f1f5f9; }
  .coin-rank { background: #334155; color: #94a3b8; font-size: 12px; padding: 2px 8px; border-radius: 20px; }
  .coin-price { font-size: 22px; font-weight: 700; color: #f8fafc; }
  .change-positive { color: #4ade80; font-weight: 600; }
  .change-negative { color: #f87171; font-weight: 600; }
  .stats { display: flex; gap: 24px; margin: 12px 0; flex-wrap: wrap; }
  .stat { font-size: 13px; color: #94a3b8; }
  .stat span { color: #cbd5e1; font-weight: 600; display: block; }
  .trend-bullish { background: #064e3b; color: #4ade80; padding: 3px 10px; border-radius: 6px; font-size: 12px; font-weight: 700; display: inline-block; }
  .trend-bearish { background: #450a0a; color: #f87171; padding: 3px 10px; border-radius: 6px; font-size: 12px; font-weight: 700; display: inline-block; }
  .trend-neutral { background: #1c1917; color: #fbbf24; padding: 3px 10px; border-radius: 6px; font-size: 12px; font-weight: 700; display: inline-block; }
  .news { margin: 12px 0; }
  .news h4 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin: 0 0 6px; }
  .news ul { margin: 0; padding-left: 18px; }
  .news li { font-size: 13px; color: #94a3b8; margin-bottom: 4px; line-height: 1.5; }
  .summary { font-size: 14px; color: #cbd5e1; line-height: 1.65; margin-top: 12px; border-top: 1px solid #334155; padding-top: 12px; }
  .market-sentiment { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 20px; margin-top: 8px; }
  .market-sentiment h2 { font-size: 16px; font-weight: 700; color: #f1f5f9; margin: 0 0 10px; }
  .market-sentiment p { font-size: 14px; color: #94a3b8; line-height: 1.65; margin: 0; }
  .footer { text-align: center; padding: 24px 0; color: #475569; font-size: 12px; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>🪙 Daily Crypto Report</h1>
    <p>TOP 10 BY MARKET CAP &nbsp;·&nbsp; ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
  </div>

  <!-- REPEAT THIS BLOCK FOR EACH OF THE 10 COINS -->
  <div class="coin-card">
    <div class="coin-header">
      <div>
        <span class="coin-rank">#1</span>
        <span class="coin-name">Bitcoin (BTC)</span>
      </div>
      <span class="trend-bullish">Bullish</span>
    </div>
    <div class="coin-price">$XX,XXX <span class="change-positive">+X.XX%</span></div>
    <div class="stats">
      <div class="stat">Market Cap<span>$X.XXX T</span></div>
      <div class="stat">24h Volume<span>$XX.XX B</span></div>
    </div>
    <div class="news">
      <h4>Latest News</h4>
      <ul>
        <li>News item 1</li>
        <li>News item 2</li>
      </ul>
    </div>
    <div class="summary">Summary text here.</div>
  </div>
  <!-- END REPEAT -->

  <div class="market-sentiment">
    <h2>📊 Overall Market Sentiment</h2>
    <p>Sentiment paragraph here.</p>
  </div>

  <div class="footer">Generated by Claude claude-opus-4-6 · AP Marketing · ${new Date().toISOString().split("T")[0]}</div>
</div>
</body>
</html>

IMPORTANT: Replace ALL placeholder text with real data from your web searches. Search for current prices and news before writing the report.`;

// ─── Email sending ────────────────────────────────────────────────────────────

async function sendEmail(html: string, date: string): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT!, 10),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to: process.env.EMAIL_TO!,
    subject: `🪙 Daily Crypto Report — ${date}`,
    html,
  });

  console.log(`[crypto-agent] ✅ Email sent to ${process.env.EMAIL_TO}`);
}

// ─── Save report to disk (optional backup) ───────────────────────────────────

function saveReport(html: string, date: string): void {
  const reportsDir = path.resolve(__dirname, "../reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  const filePath = path.join(reportsDir, `crypto-report-${date}.html`);
  fs.writeFileSync(filePath, html, "utf-8");
  console.log(`[crypto-agent] 📄 Report saved to ${filePath}`);
}

// ─── Main agent ──────────────────────────────────────────────────────────────

export async function runCryptoAgent(): Promise<void> {
  const date = new Date().toISOString().split("T")[0];
  console.log(`[crypto-agent] 🚀 Starting crypto research — ${date}`);

  validateEnv();

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // Stream the response — report can be large
  const stream = client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 8192,
    thinking: { type: "adaptive" },
    tools: [
      { type: "web_search_20260209" as const, name: "web_search" },
    ],
    messages: [
      {
        role: "user",
        content: RESEARCH_PROMPT,
      },
    ],
  });

  // Show progress while Claude researches
  stream.on("text", (delta) => process.stdout.write(delta));

  const message = await stream.finalMessage();

  // Extract the HTML from text blocks
  const htmlBlocks = message.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");

  if (!htmlBlocks.trim()) {
    throw new Error("Claude returned no text content — check API response");
  }

  console.log("\n[crypto-agent] 🔍 Research complete, preparing report...");

  // Save a local copy
  saveReport(htmlBlocks, date);

  // Send the email
  await sendEmail(
    htmlBlocks,
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  console.log(`[crypto-agent] ✅ Done — ${new Date().toISOString()}`);
}

// Run directly when invoked as a script
if (require.main === module) {
  runCryptoAgent().catch((err) => {
    console.error("[crypto-agent] ❌ Error:", err.message);
    process.exit(1);
  });
}
