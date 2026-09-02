import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ShieldCheck, CreditCard, TrendingUp } from "lucide-react"
import type { ElementType } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { FundingNav } from "@/components/funding-nav"
import { CreditNav } from "@/components/credit-nav"

const APPLY_URL = "https://application.croccrm.com/"

type CreditPage = {
  badgeIcon: ElementType
  badge: string
  headingNormal: string
  headingAccent: string
  description: string
  bulletIcon: ElementType
  bullets: string[]
}

const PAGES: Record<string, CreditPage> = {
  "credit-report": {
    badgeIcon: ShieldCheck,
    badge: "3-bureau report",
    headingNormal: "Get your full credit report",
    headingAccent: "directly here.",
    description:
      "See exactly where your business and personal credit stand — pulled straight from all three bureaus. Know your numbers before you ever apply for funding.",
    bulletIcon: ShieldCheck,
    bullets: [
      "Full Experian, Equifax & TransUnion view",
      "Understand the scores lenders actually see",
      "Know what to fix before you apply for funding",
    ],
  },
  "credit-guidance": {
    badgeIcon: Sparkles,
    badge: "Expert credit guidance",
    headingNormal: "Low credit score?",
    headingAccent: "Get elevated by our experts.",
    description:
      "Been turned down for funding because of a low credit score? You're not stuck. Our specialists build a personalized plan to strengthen your credit — and get you funded down the road.",
    bulletIcon: TrendingUp,
    bullets: [
      "A clear, personalized credit-improvement plan",
      "Specialists who dispute errors and guide your next steps",
      "A pathway to funding once your score is ready",
    ],
  },
  "credit-cards": {
    badgeIcon: CreditCard,
    badge: "Payment processing",
    headingNormal: "Reduced Credit Card",
    headingAccent: "Processing Costs.",
    description:
      "Why pay more to process payments? Our credit card processing solutions are designed to help businesses lower transaction fees.",
    bulletIcon: ShieldCheck,
    bullets: [
      "Opportunities to Lower Fees",
      "Streamline Operations and Improve Service",
      "Maximize Revenue in your Business",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = PAGES[params.slug]
  if (!p) return { title: "Credit | Harvest Lending" }
  return { title: `${p.headingNormal} ${p.headingAccent} | Harvest Lending`, description: p.description }
}

export default function CreditPage({ params }: { params: { slug: string } }) {
  const page = PAGES[params.slug]
  if (!page) notFound()
  const BadgeIcon = page.badgeIcon
  const BulletIcon = page.bulletIcon

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-amber-900/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <Image src="/images/harvest-logo.png" alt="Harvest Lending Logo" width={56} height={56} className="rounded-lg" />
            <h1 className="text-2xl font-black font-[family-name:var(--font-montserrat)] hover:text-amber-300 transition-colors duration-300">
              Harvest Lending
            </h1>
          </Link>
          <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer" className="md:hidden">
            <Button size="sm" className="bg-amber-600 hover:bg-amber-500 text-white font-semibold">
              Apply
            </Button>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110">
              Home
            </Link>
            <FundingNav />
            <CreditNav />
            <Link href="/about" className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110">
              About
            </Link>
            <Link href="/contact" className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110">
              Contact
            </Link>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="bg-amber-600 hover:bg-amber-500 text-white hover:scale-110 transition-all duration-300 group shadow-lg">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div className="font-[family-name:var(--font-open-sans)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 text-amber-800 text-sm font-semibold px-4 py-1.5 mb-6">
                <BadgeIcon className="h-4 w-4 text-amber-600" />
                {page.badge}
              </span>
              <h2 className="text-4xl lg:text-5xl font-black font-[family-name:var(--font-montserrat)] text-stone-800 leading-tight mb-5">
                {page.headingNormal} <span className="text-amber-600">{page.headingAccent}</span>
              </h2>
              <p className="text-lg text-stone-600 max-w-xl mb-8 leading-relaxed">{page.description}</p>
              <ul className="space-y-3">
                {page.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-stone-700">
                    <BulletIcon className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Contact card (no form) */}
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold text-stone-800 mb-2 font-[family-name:var(--font-montserrat)]">
                Want to learn more?
              </h3>
              <p className="text-stone-500 mb-6 font-[family-name:var(--font-open-sans)]">
                Our team is here to help. Reach out and we'll walk you through your options and next steps.
              </p>
              <Link href="/contact" className="block">
                <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-6 text-base group">
                  Contact Us for more details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <p className="text-xs text-stone-400 mt-4 text-center font-[family-name:var(--font-open-sans)]">
                For queries, reach out to{" "}
                <a href="mailto:team@harvestlending.com" className="text-amber-700 font-medium hover:underline">
                  team@harvestlending.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Funded Now banner */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-2xl bg-amber-900 px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-white mb-1">
                Get Funded Now!
              </h3>
              <p className="text-amber-100 font-[family-name:var(--font-open-sans)]">
                Strong credit or not, see the funding options your business qualifies for.
              </p>
            </div>
            <Link href="/services" className="flex-shrink-0">
              <Button className="bg-amber-600 hover:bg-amber-500 text-white font-semibold group shadow-lg">
                Check your funding options
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
