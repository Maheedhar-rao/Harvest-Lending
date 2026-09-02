"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ArrowRight,
  ArrowUpRight,
  Filter,
  RotateCcw,
  Calculator,
  CheckCircle,
  Landmark,
  Briefcase,
  CreditCard,
  FileText,
  BarChart3,
  Building2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SiteFooter } from "@/components/site-footer"
import { FundingNav } from "@/components/funding-nav"
import { CreditNav } from "@/components/credit-nav"

const APPLY_URL = "https://application.croccrm.com/"

const PRODUCTS = [
  {
    slug: "real-estate-financing",
    icon: Building2,
    title: "Real Estate Financing",
    bestFor: "Best for long-term real estate",
    description:
      "Long amortization and low rates for property purchases or refinances. Underwriting weighs the property and DSCR as much as your business profile.",
    min: 100000,
    max: 10000000,
    range: "$100K – $10M",
    term: "5–30 years",
    speed: "A few weeks",
    rateLabel: "Rate",
    rate: "6.0%–12.0%",
    uses: ["Real estate", "Refinance debt"],
  },
  {
    slug: "sba-loans",
    icon: Landmark,
    title: "SBA Loans",
    bestFor: "Best for lowest rates",
    description:
      "Government backing keeps rates low and terms long. The trade-off is heavier paperwork and a longer close — typically 4–8 weeks. Best when you have time and a clean credit profile.",
    min: 50000,
    max: 5000000,
    range: "$50K – $5M",
    term: "5–25 years",
    speed: "A few weeks",
    rateLabel: "Rate",
    rate: "6.5%–11.5%",
    uses: ["Working capital", "Expansion / growth", "Equipment", "Real estate", "Refinance debt"],
  },
  {
    slug: "term-loans",
    icon: BarChart3,
    title: "Term Loans",
    bestFor: "Best for predictable growth investments",
    description:
      "The middle ground between SBA and MCA. Faster than SBA, cheaper than MCA. Best when you have a clear use of funds and want fixed monthly payments you can model.",
    min: 25000,
    max: 2000000,
    range: "$25K – $2M",
    term: "1–7 years",
    speed: "Within a week",
    rateLabel: "Rate",
    rate: "8.0%–25.0%",
    uses: ["Working capital", "Expansion / growth", "Equipment", "Refinance debt"],
  },
  {
    slug: "equipment-financing",
    icon: Briefcase,
    title: "Equipment Financing",
    bestFor: "Best for equipment without a down payment",
    description:
      "The equipment itself is collateral, so approval is faster and FICO requirements are softer than a term loan. Up to 100% financing means no big up-front check.",
    min: 10000,
    max: 1000000,
    range: "$10K – $1M",
    term: "2–7 years",
    speed: "Within a week",
    rateLabel: "Rate",
    rate: "7.0%–20.0%",
    uses: ["Equipment"],
  },
  {
    slug: "merchant-cash-advance",
    icon: CreditCard,
    title: "Merchant Cash Advance",
    bestFor: "Best for fastest funding",
    description:
      "If you need capital this week and you have steady credit-card or ACH receipts, this is the fastest path. The cost is higher (factor rates, not APR), but credit isn't a hard gate.",
    min: 5000,
    max: 500000,
    range: "$5K – $500K",
    term: "3–18 months",
    speed: "As fast as 24 hours",
    rateLabel: "Factor",
    rate: "1.35–1.50",
    uses: ["Working capital", "Inventory", "Payroll"],
  },
  {
    slug: "business-line-of-credit",
    icon: FileText,
    title: "Business Line of Credit",
    bestFor: "Best for flexibility",
    description:
      "Best for businesses with lumpy cash flow. You're only paying for what you draw, and the line replenishes as you pay it down. The cheapest insurance against a slow month.",
    min: 10000,
    max: 500000,
    range: "$10K – $500K",
    term: "Revolving",
    speed: "Within a week",
    rateLabel: "Rate",
    rate: "8.0%–30.0%",
    uses: ["Working capital", "Inventory", "Payroll"],
  },
]

const SPEED_OPTIONS = ["As fast as 24 hours", "Within a week", "A few weeks"]
const USE_OPTIONS = [
  "Working capital",
  "Expansion / growth",
  "Equipment",
  "Real estate",
  "Inventory",
  "Payroll",
  "Refinance debt",
]
const SPEED_RANK: Record<string, number> = { "As fast as 24 hours": 0, "Within a week": 1, "A few weeks": 2 }
const DEFAULT_AMOUNT = 100000

function fmtAmount(n: number) {
  if (n >= 1000000) return `$${(n / 1000000) % 1 === 0 ? n / 1000000 : (n / 1000000).toFixed(1)}M`
  return `$${Math.round(n / 1000)}K`
}

export default function ServicesPage() {
  const [amount, setAmount] = useState(DEFAULT_AMOUNT)
  const [onlyCovering, setOnlyCovering] = useState(true)
  const [speeds, setSpeeds] = useState<string[]>([])
  const [uses, setUses] = useState<string[]>([])
  const [sort, setSort] = useState("highest")
  const [calcOpen, setCalcOpen] = useState(false)
  const [revenue, setRevenue] = useState("")
  const [result, setResult] = useState<{ min: number; max: number } | null>(null)

  const calculate = () => {
    const rev = Number.parseFloat(revenue)
    if (rev && rev > 0) setResult({ min: Math.round(rev), max: Math.round(rev * 1.5) })
  }

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const reset = () => {
    setAmount(DEFAULT_AMOUNT)
    setOnlyCovering(true)
    setSpeeds([])
    setUses([])
    setSort("highest")
  }

  const filtered = PRODUCTS.filter((p) => {
    if (onlyCovering && !(amount >= p.min && amount <= p.max)) return false
    if (speeds.length && !speeds.includes(p.speed)) return false
    if (uses.length && !uses.some((u) => p.uses.includes(u))) return false
    return true
  }).sort((a, b) => {
    if (sort === "lowest") return a.max - b.max
    if (sort === "fastest") return SPEED_RANK[a.speed] - SPEED_RANK[b.speed]
    return b.max - a.max
  })

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
            <FundingNav active />
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

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Intro */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-stone-800 mb-3">
                Funding Options
              </h2>
              <p className="text-stone-500 font-[family-name:var(--font-open-sans)] mb-1">
                Explore the right funding solution for your business needs.
              </p>
              <p className="text-stone-500 font-[family-name:var(--font-open-sans)]">
                These are the different programs we offer — if you don't qualify for them right now, our commitment is to
                get YOU in position to qualify.
              </p>
            </div>
            <Button
              onClick={() => setCalcOpen(true)}
              className="flex-shrink-0 bg-amber-600 hover:bg-amber-500 text-white font-semibold group shadow-lg"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Rates
            </Button>
          </div>

          {/* Callout */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 px-6 py-4 mb-8">
            <p className="text-sm text-stone-700 font-[family-name:var(--font-open-sans)]">
              <span className="font-bold text-stone-800">Don't qualify yet? We've got a plan.</span> Get funded today,
              then we'll help you build credit and graduate to SBA-level rates.
            </p>
            <Link
              href="/credit/credit-guidance"
              className="text-amber-700 font-semibold whitespace-nowrap inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Explore credit guidance <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">
            {/* Filters sidebar */}
            <aside className="rounded-2xl border border-stone-200 bg-white p-5 lg:sticky lg:top-24 font-[family-name:var(--font-open-sans)]">
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-2 font-bold text-stone-800">
                  <Filter className="h-4 w-4" /> Filters
                </span>
                <button onClick={reset} className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-amber-700">
                  <RotateCcw className="h-3.5 w-3.5" /> Reset
                </button>
              </div>

              {/* Amount slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wide text-stone-400">Amount needed</span>
                  <span className="font-bold text-stone-800">{fmtAmount(amount)}</span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={2000000}
                  step={5000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-stone-400 mt-1">
                  <span>$10K</span>
                  <span>$2M+</span>
                </div>
                <label className="flex items-center gap-2 mt-3 text-sm text-stone-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlyCovering}
                    onChange={(e) => setOnlyCovering(e.target.checked)}
                    className="h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  Only show products covering this amount
                </label>
              </div>

              {/* Speed */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wide text-stone-400 mb-2">Speed to funding</div>
                <div className="space-y-2">
                  {SPEED_OPTIONS.map((s) => (
                    <label key={s} className="flex items-center gap-2 text-sm text-stone-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={speeds.includes(s)}
                        onChange={() => toggle(speeds, setSpeeds, s)}
                        className="h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              {/* Use of funds */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wide text-stone-400 mb-2">Use of funds</div>
                <div className="space-y-2">
                  {USE_OPTIONS.map((u) => (
                    <label key={u} className="flex items-center gap-2 text-sm text-stone-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={uses.includes(u)}
                        onChange={() => toggle(uses, setUses, u)}
                        className="h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                      />
                      {u}
                    </label>
                  ))}
                </div>
              </div>

              {/* Calculate rates card */}
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="inline-flex items-center gap-2 font-semibold text-stone-800 text-sm mb-1">
                  <Calculator className="h-4 w-4 text-amber-600" /> Not sure how much you qualify for?
                </p>
                <p className="text-xs text-stone-500 mb-3">Estimate your funding range in seconds.</p>
                <Button
                  onClick={() => setCalcOpen(true)}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold"
                >
                  Calculate Rates
                </Button>
              </div>
            </aside>

            {/* Products */}
            <div>
              <div className="flex items-center justify-between mb-4 font-[family-name:var(--font-open-sans)]">
                <span className="text-stone-700">
                  <span className="font-bold text-stone-900">{filtered.length}</span> products
                </span>
                <label className="flex items-center gap-2 text-sm text-stone-500">
                  Sort
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="highest">Highest amount</option>
                    <option value="lowest">Lowest amount</option>
                    <option value="fastest">Fastest funding</option>
                  </select>
                </label>
              </div>

              <div className="flex justify-end mb-5">
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-amber-600 hover:bg-amber-500 text-white font-semibold group shadow-lg">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </a>
              </div>

              <div className="space-y-4">
                {filtered.length === 0 && (
                  <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-stone-500 font-[family-name:var(--font-open-sans)]">
                    No products match your filters.{" "}
                    <button onClick={reset} className="text-amber-700 font-semibold hover:underline">
                      Reset filters
                    </button>
                  </div>
                )}
                {filtered.map(({ slug, icon: Icon, title, bestFor, description, range, term, speed, rateLabel, rate }) => (
                  <div
                    key={slug}
                    className="rounded-2xl border border-stone-200 bg-white p-6 hover:shadow-md hover:border-amber-200 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 flex-shrink-0 bg-amber-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-amber-700" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                            <h3 className="font-bold text-stone-800 font-[family-name:var(--font-montserrat)]">{title}</h3>
                            <span className="text-[11px] uppercase tracking-wide text-stone-500 bg-stone-100 rounded px-2 py-0.5">
                              {bestFor}
                            </span>
                          </div>
                          <p className="text-sm text-stone-500 font-[family-name:var(--font-open-sans)] max-w-2xl leading-relaxed">
                            {description}
                          </p>
                        </div>
                      </div>
                      <Link href={`/funding/${slug}`} className="flex-shrink-0">
                        <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-50 group">
                          Details
                          <ArrowUpRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 lg:pl-[60px] font-[family-name:var(--font-open-sans)]">
                      <div>
                        <div className="text-[11px] uppercase tracking-wide text-stone-400 mb-0.5">Range</div>
                        <div className="font-bold text-stone-800 text-sm">{range}</div>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wide text-stone-400 mb-0.5">Term</div>
                        <div className="font-bold text-stone-800 text-sm">{term}</div>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wide text-stone-400 mb-0.5">Speed</div>
                        <div className="font-bold text-stone-800 text-sm">{speed}</div>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wide text-stone-400 mb-0.5">{rateLabel}</div>
                        <div className="font-bold text-stone-800 text-sm">{rate}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-6">
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-amber-600 hover:bg-amber-500 text-white font-semibold group shadow-lg">
                    Apply — Check my funding options NOW
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculate Rates dialog */}
      <Dialog open={calcOpen} onOpenChange={setCalcOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-stone-800 flex items-center gap-2">
              <Calculator className="h-6 w-6 text-amber-600" />
              Calculate Your Rate
            </DialogTitle>
            <DialogDescription className="text-stone-600">
              Get an instant estimate of your funding potential based on your monthly revenue.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-sm font-medium text-stone-700">
                Monthly Revenue ($)
              </Label>
              <Input
                id="revenue"
                type="number"
                placeholder="Enter your monthly revenue"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="border-stone-300 focus:border-amber-500"
              />
            </div>

            <Button
              onClick={calculate}
              disabled={!revenue}
              className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 hover:scale-105 transition-all duration-300"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Rates
            </Button>

            {result && (
              <div className="mt-2 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="text-lg font-semibold text-amber-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Your Estimated Funding Range
                </h4>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    ${result.min.toLocaleString()} - ${result.max.toLocaleString()}
                  </div>
                  <p className="text-sm text-stone-600 mb-4">Based on 100% to 150% of your monthly revenue</p>
                  <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-500 text-white" onClick={() => setCalcOpen(false)}>
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  )
}
