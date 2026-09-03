import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2, PhoneCall } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

const PHONE_DISPLAY = "+1 347-831-7014"
const PHONE_HREF = "tel:+13478317014"

export const metadata: Metadata = {
  title: "Application Received | Harvest Lending",
  description: "Thanks - your funding application has been received.",
  // A conversion page has no business in search results.
  robots: { index: false, follow: false },
}

export default function SubmittedPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fefadc] text-stone-900">
      <header className="bg-[#79401c]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/apply/harvest-mark.png"
              alt="Harvest Lending"
              width={246}
              height={246}
              priority
              className="h-12 w-12 object-contain"
            />
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-montserrat)] text-xl font-black text-white">
                Harvest Lending
              </span>
              <span className="hidden text-sm font-semibold text-amber-100/80 sm:block">
                Harvest the Power of Lending
              </span>
            </span>
          </div>
          <a href={PHONE_HREF} className="flex items-center gap-3 text-right text-white">
            <PhoneCall className="h-5 w-5 text-[#f4bc41]" aria-hidden="true" />
            <span className="leading-tight">
              <span className="block text-xs font-semibold text-amber-100/80">
                Need Assistance?
              </span>
              <span className="block text-lg font-extrabold">{PHONE_DISPLAY}</span>
            </span>
          </a>
        </div>
      </header>

      <section className="relative flex grow items-center overflow-hidden px-6 py-20">
        <Image src="/apply/header.png" alt="" fill aria-hidden="true" className="object-cover" />
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="rounded-3xl bg-[#79401c] p-8 text-center shadow-2xl sm:p-12">
            <CheckCircle2 className="mx-auto h-16 w-16 text-[#f4bc41]" aria-hidden="true" />
            <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-white sm:text-4xl">
              Your application is in.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-amber-50/90">
              A funding specialist will review your details and reach out shortly to
              walk you through your options. Most clients hear back the same business
              day.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#d3772c] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#be591c]"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Speak with an expert now
            </a>
          </div>
        </div>
      </section>

      <SiteFooter staticHref="/apply" />
    </main>
  )
}
