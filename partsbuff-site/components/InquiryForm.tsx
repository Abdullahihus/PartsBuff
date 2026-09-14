"use client";

import { FormEvent, useState } from "react";

export default function InquiryForm({ subject = "Parts inquiry" }: { subject?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      formElement.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <input type="hidden" name="subject" value={subject} />
      <div className="form-grid">
        <label>Full name<input required name="name" placeholder="Your name" /></label>
        <label>Phone<input required name="phone" placeholder="(303) 555-0123" /></label>
      </div>
      <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
      <label>What do you need?<textarea required name="message" rows={5} placeholder="Tell us the year, make, model, and part you are looking for." /></label>
      <button className="button" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send request"}</button>
      {status === "sent" && <p className="form-success">Thanks — your request was received.</p>}
      {status === "error" && <p className="form-error">Something went wrong. Please try again.</p>}
    </form>
  );
}
