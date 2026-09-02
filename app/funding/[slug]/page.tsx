import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle, Landmark, Briefcase, CreditCard, FileText, BarChart3, Building2 } from "lucide-react"
import type { ElementType } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { FundingNav } from "@/components/funding-nav"
import { CreditNav } from "@/components/credit-nav"

type Option = {
  icon: ElementType
  title: string
  subtitle: string
  description: string
  stats: { label: string; value: string }[]
  benefits: string[]
  requirements: string[]
}

const OPTIONS: Record<string, Option> = {
  "sba-loans": {
    icon: Landmark,
    title: "SBA Loans",
    subtitle: "Government-backed financing with the lowest rates available.",
    description:
      "SBA-guaranteed loans for working capital, expansion, equipment, or real estate. Long terms and competitive rates make these the most affordable option for qualifying businesses.",
    stats: [
      { label: "Funding range", value: "$50,000 – $5,000,000" },
      { label: "Typical term", value: "5–25 years" },
      { label: "Speed to funding", value: "A few weeks" },
      { label: "Common uses", value: "Working capital, Expansion / growth, Equipment, Real estate, Refinance debt" },
    ],
    benefits: ["Lowest interest rates in the market", "Up to $5M in funding", "Flexible use of funds"],
    requirements: ["Monthly revenue ≥ $25,000", "Time in business ≥ 24 months", "FICO score ≥ 680"],
  },
  "equipment-financing": {
    icon: Briefcase,
    title: "Equipment Financing",
    subtitle: "Up to 100% financing for the equipment you need.",
    description:
      "Purchase machinery, technology, vehicles, or other equipment with financing secured by the equipment itself. Predictable monthly payments and competitive rates.",
    stats: [
      { label: "Funding range", value: "$10,000 – $1,000,000" },
      { label: "Typical term", value: "2–7 years" },
      { label: "Speed to funding", value: "Within a week" },
      { label: "Common uses", value: "Equipment" },
    ],
    benefits: [
      "Up to 100% financing — no large down payment",
      "Approval based largely on the equipment",
      "Section 179 tax benefits may apply",
    ],
    requirements: ["Monthly revenue ≥ $15,000", "Time in business ≥ 12 months", "FICO score ≥ 600"],
  },
  "merchant-cash-advance": {
    icon: CreditCard,
    title: "Merchant Cash Advance",
    subtitle: "Same-day funding tied to your daily sales.",
    description:
      "Receive an upfront lump sum in exchange for a percentage of future receipts. Repayment scales with your sales — quiet days mean smaller payments. Ideal for fast access to capital.",
    stats: [
      { label: "Funding range", value: "$5,000 – $500,000" },
      { label: "Typical term", value: "3–18 months" },
      { label: "Speed to funding", value: "As fast as 24 hours" },
      { label: "Common uses", value: "Working capital, Inventory, Payroll" },
    ],
    benefits: [
      "Funding in as little as 24 hours",
      "Approval based on revenue, not credit",
      "Repayment flexes with daily sales",
    ],
    requirements: ["Monthly revenue ≥ $10,000", "Time in business ≥ 6 months"],
  },
  "business-line-of-credit": {
    icon: FileText,
    title: "Business Line of Credit",
    subtitle: "Revolving capital you can draw on whenever you need it.",
    description:
      "An approved credit line you can draw against on demand. Pay interest only on what you use. Perfect for covering payroll, inventory, or unexpected expenses.",
    stats: [
      { label: "Funding range", value: "$10,000 – $500,000" },
      { label: "Typical term", value: "Revolving" },
      { label: "Speed to funding", value: "Within a week" },
      { label: "Common uses", value: "Working capital, Inventory, Payroll" },
    ],
    benefits: [
      "Draw funds only when you need them",
      "Pay interest only on what you use",
      "Replenishes as you pay it down",
    ],
    requirements: ["Monthly revenue ≥ $15,000", "Time in business ≥ 12 months", "FICO score ≥ 620"],
  },
  "term-loans": {
    icon: BarChart3,
    title: "Term Loans",
    subtitle: "Lump-sum funding with predictable monthly payments.",
    description:
      "A traditional installment loan with fixed terms. Good for growth investments, refinancing, or major one-time expenses where you want a clear payoff schedule.",
    stats: [
      { label: "Funding range", value: "$25,000 – $2,000,000" },
      { label: "Typical term", value: "1–7 years" },
      { label: "Speed to funding", value: "Within a week" },
      { label: "Common uses", value: "Working capital, Expansion / growth, Equipment, Refinance debt" },
    ],
    benefits: ["Fixed monthly payments", "Terms up to 7 years", "Competitive rates for strong credit profiles"],
    requirements: ["Monthly revenue ≥ $20,000", "Time in business ≥ 18 months", "FICO score ≥ 640"],
  },
  "real-estate-financing": {
    icon: Building2,
    title: "Real Estate Financing",
    subtitle: "Commercial and residential mortgage solutions.",
    description:
      "Purchase, refinance, or take cash out on commercial or investment property. Competitive rates and flexible terms tailored to the property and your business profile.",
    stats: [
      { label: "Funding range", value: "$100,000 – $10,000,000" },
      { label: "Typical term", value: "5–30 years" },
      { label: "Speed to funding", value: "A few weeks" },
      { label: "Common uses", value: "Real estate, Refinance debt" },
    ],
    benefits: ["Purchase, refi, or cash-out", "Competitive long-term rates", "Commercial and investment property"],
    requirements: ["Monthly revenue ≥ $30,000", "Time in business ≥ 24 months", "FICO score ≥ 660"],
  },
}

export function generateStaticParams() {
  return Object.keys(OPTIONS).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const opt = OPTIONS[params.slug]
  if (!opt) return { title: "Funding | Harvest Lending" }
  return { title: `${opt.title} | Harvest Lending`, description: opt.subtitle }
}

export default function FundingDetailPage({ params }: { params: { slug: string } }) {
  const opt = OPTIONS[params.slug]
  if (!opt) notFound()
  const Icon = opt.icon

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-amber-900/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/images/harvest-logo.png"
              alt="Harvest Lending Logo"
              width={56}
              height={56}
              className="rounded-lg hover:animate-bounce transition-all duration-300"
            />
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
            <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="bg-amber-600 hover:bg-amber-500 text-white hover:scale-110 transition-all duration-300 group shadow-lg">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-700 font-[family-name:var(--font-open-sans)] mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all options
          </Link>

          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 flex-shrink-0 bg-amber-600 rounded-xl flex items-center justify-center shadow">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-black font-[family-name:var(--font-montserrat)] text-stone-800">
                {opt.title}
              </h2>
              <p className="text-stone-500 font-[family-name:var(--font-open-sans)] mt-1">{opt.subtitle}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Main details card */}
            <div className="lg:col-span-2 rounded-2xl border border-stone-200 bg-white p-8 font-[family-name:var(--font-open-sans)]">
              <p className="text-stone-600 leading-relaxed mb-8">{opt.description}</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {opt.stats.map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xs uppercase tracking-wide text-stone-400 mb-1">{label}</div>
                    <div className="font-bold text-stone-800">{value}</div>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-stone-800 mb-3 font-[family-name:var(--font-montserrat)]">What you get</h3>
              <ul className="space-y-2 mb-8">
                {opt.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-stone-700">
                    <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <h3 className="font-bold text-stone-800 mb-3 font-[family-name:var(--font-montserrat)]">
                Typical requirements
              </h3>
              <ul className="space-y-1 text-stone-600">
                {opt.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Apply card */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 lg:sticky lg:top-24">
              <h3 className="font-bold text-stone-800 mb-4 font-[family-name:var(--font-montserrat)]">Apply</h3>
              <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-6 text-base group">
                  Apply Now
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </a>
              <p className="text-xs text-stone-400 mt-3 text-center font-[family-name:var(--font-open-sans)]">
                Quick application — no impact to your credit to check options.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
