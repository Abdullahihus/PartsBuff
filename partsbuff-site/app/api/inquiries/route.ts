import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); }
  catch { return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const input = body as Record<string, unknown>;
  const limits: Record<string, number> = { name: 200, email: 254, phone: 50, subject: 300, message: 5000 };
  const values: Record<string, string> = {};
  for (const [field, limit] of Object.entries(limits)) {
    const value = input[field] ?? "";
    if (typeof value !== "string" || value.length > limit) {
      return NextResponse.json({ ok: false, error: "Invalid field: " + field }, { status: 400 });
    }
    values[field] = value.trim();
  }
  if (!values.name || !values.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return NextResponse.json({ ok: false, error: "Name, valid email, and message are required" }, { status: 400 });
  }
  try {
    await db.query("INSERT INTO inquiries (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5)",
      [values.name, values.email, values.phone, values.subject, values.message]);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    console.error("Could not save inquiry");
    return NextResponse.json({ ok: false, error: "Unable to save your request. Please try again." }, { status: 503 });
  }
}
