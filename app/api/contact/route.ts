import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, marketing, nonMarketing } = await req.json()

    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 })
    }

    const url = process.env.SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url || !serviceKey) {
      return NextResponse.json(
        { ok: false, error: "Database is not configured yet." },
        { status: 500 },
      )
    }

    const supabase = createClient(url, serviceKey, {
      auth: { persistSession: false },
    })

    const { error } = await supabase.from("contact_submissions").insert({
      first_name: firstName,
      last_name: lastName,
      phone,
      email,
      marketing_consent: !!marketing,
      non_marketing_consent: !!nonMarketing,
    })

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Unexpected error." }, { status: 500 })
  }
}
