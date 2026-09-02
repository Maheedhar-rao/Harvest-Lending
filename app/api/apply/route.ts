import { NextResponse } from "next/server"

export const runtime = "nodejs"

// Column order written to the Google Sheet. Keep in sync with the header row
// created by scripts/google-apps-script-apply.gs.
const FIELDS = [
  "capitalNeeded",
  "businessName",
  "timeInBusiness",
  "bankAccount",
  "industry",
  "phone",
  "state",
  "email",
  "monthlySales",
  "creditScore",
  "firstName",
  "lastName",
] as const

const REQUIRED = FIELDS

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const missing = REQUIRED.filter((f) => !String(body[f] ?? "").trim())
    if (missing.length) {
      return NextResponse.json(
        { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 },
      )
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET
    if (!webhookUrl || !secret) {
      return NextResponse.json(
        { ok: false, error: "Applications are not configured yet." },
        { status: 500 },
      )
    }

    const row: Record<string, string> = { submittedAt: new Date().toISOString() }
    for (const f of FIELDS) row[f] = String(body[f] ?? "").trim()
    row.textAlerts = body.textAlerts ? "Yes" : "No"
    row.qualified = body.qualified ? "Yes" : "No"

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, row }),
      // Apps Script answers the POST with a 302 to its script.googleusercontent.com
      // result URL, which fetch follows by default.
      cache: "no-store",
    })

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Could not save your application. Please try again." },
        { status: 502 },
      )
    }

    const result = await res.json().catch(() => null)
    if (result && result.ok === false) {
      return NextResponse.json(
        { ok: false, error: "Could not save your application. Please try again." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Unexpected error." }, { status: 500 })
  }
}
