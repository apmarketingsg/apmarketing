/**
 * Crypto Research Scheduler
 *
 * Runs the crypto agent every morning at 8:00 AM (server local time).
 * Keep this process alive with: npm run crypto:start
 *
 * To run in the background on a Linux/Mac server:
 *   nohup npm run crypto:start > logs/crypto-scheduler.log 2>&1 &
 *
 * Or use PM2:
 *   pm2 start npm --name crypto-agent -- run crypto:start
 */

import cron from "node-cron";
import { runCryptoAgent } from "./crypto-agent";
import * as fs from "fs";
import * as path from "path";

// Ensure logs directory exists
const logsDir = path.resolve(__dirname, "../logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

function log(message: string): void {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${message}`;
  console.log(line);
  fs.appendFileSync(path.join(logsDir, "crypto-scheduler.log"), line + "\n");
}

// ─── Schedule: every day at 08:00 ────────────────────────────────────────────

log("🕐 Crypto Research Scheduler started.");
log(`   Next run: every morning at 08:00 (local time: ${Intl.DateTimeFormat().resolvedOptions().timeZone})`);
log("   Press Ctrl+C to stop.\n");

cron.schedule(
  "0 8 * * *",
  async () => {
    log("⏰ Scheduled trigger fired — starting crypto research...");
    try {
      await runCryptoAgent();
      log("✅ Crypto research completed successfully.");
    } catch (err) {
      const error = err instanceof Error ? err.message : String(err);
      log(`❌ Crypto research failed: ${error}`);
    }
  },
  {
    scheduled: true,
    timezone: process.env.CRON_TIMEZONE ?? "Asia/Singapore", // default to SGT
  }
);

// ─── Optional: run immediately on startup (useful for testing) ───────────────

if (process.env.RUN_NOW === "true") {
  log("🚀 RUN_NOW=true — running immediately...");
  runCryptoAgent()
    .then(() => log("✅ Immediate run completed."))
    .catch((err) => {
      const error = err instanceof Error ? err.message : String(err);
      log(`❌ Immediate run failed: ${error}`);
    });
}
