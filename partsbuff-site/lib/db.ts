import "server-only";
import { Pool } from "pg";

const globalDb = globalThis as unknown as { partsbuffPool?: Pool };
export const db = globalDb.partsbuffPool ?? new Pool({
  connectionString: process.env.DATABASE_URL || undefined,
  max: 10,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
});
if (process.env.NODE_ENV !== "production") globalDb.partsbuffPool = db;
db.on("error", (error) => console.error("Idle database connection failed:", error.message));
