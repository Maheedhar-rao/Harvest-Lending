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

    const text = await res.text()

    if (!res.ok) {
      console.error("[apply] webhook HTTP", res.status, text.slice(0, 500))
      return NextResponse.json(
        {
          ok: false,
          error: "Could not save your application. Please try again.",
          detail: `Google returned HTTP ${res.status}`,
        },
        { status: 502 },
      )
    }

    let result: { ok?: boolean; error?: string } | null = null
    try {
      result = JSON.parse(text)
    } catch {
      // A login page instead of JSON means the web app is not deployed with
      // "Who has access: Anyone", so the POST never reached doPost.
      console.error("[apply] webhook returned non-JSON:", text.slice(0, 1000))
      // Surface a snippet so the cause is visible without reading server logs.
      // Google's HTML carries no secrets - the request body is never echoed.
      const snippet = text
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 300)
      return NextResponse.json(
        {
          ok: false,
          error: "Could not save your application. Please try again.",
          detail: `Google returned a page instead of JSON. Body: ${snippet}`,
        },
        { status: 502 },
      )
    }

    if (!result || result.ok !== true) {
      console.error("[apply] webhook rejected:", text.slice(0, 500))
      return NextResponse.json(
        {
          ok: false,
          error: "Could not save your application. Please try again.",
          detail: result?.error || "Apps Script did not confirm the write.",
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Unexpected error." }, { status: 500 })
  }
}
