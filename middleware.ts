import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Apply-only deploys (Railway) set APPLY_ONLY=true so the service exposes just
// the funding application page. Everything else 404s. Unset elsewhere, so the
// full site is unaffected.
const ALLOWED_PREFIXES = ["/apply", "/submitted", "/api/apply", "/images/"]

export function middleware(request: NextRequest) {
  if (process.env.APPLY_ONLY !== "true") return NextResponse.next()

  const { pathname } = request.nextUrl

  // Bare domain is the landing page for this deploy.
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/apply", request.url))
  }

  const allowed = ALLOWED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p.endsWith("/") ? p : `${p}/`),
  )
  if (allowed) return NextResponse.next()

  return new NextResponse("Not found", { status: 404 })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
