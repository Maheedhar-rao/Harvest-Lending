import Link from "next/link"
import { ChevronDown } from "lucide-react"

const OPTIONS = [
  { slug: "sba-loans", label: "SBA Loans" },
  { slug: "equipment-financing", label: "Equipment Financing" },
  { slug: "merchant-cash-advance", label: "Merchant Cash Advance" },
  { slug: "business-line-of-credit", label: "Business Line of Credit" },
  { slug: "term-loans", label: "Term Loans" },
  { slug: "real-estate-financing", label: "Real Estate Financing" },
]

export function FundingNav({ active = false }: { active?: boolean }) {
  return (
    <div className="relative group">
      <Link
        href="/services"
        className={`font-[family-name:var(--font-open-sans)] inline-flex items-center gap-1 transition-all duration-300 hover:scale-110 ${
          active ? "text-amber-300" : "hover:text-amber-300"
        }`}
      >
        Funding Options
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
      </Link>

      {/* Dropdown (revealed on hover; pt-3 bridges the gap so hover doesn't drop) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="w-64 rounded-xl bg-white shadow-xl border border-stone-100 py-2">
          {OPTIONS.map((o) => (
            <Link
              key={o.slug}
              href={`/funding/${o.slug}`}
              className="block px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              {o.label}
            </Link>
          ))}
          <div className="border-t border-stone-100 mt-1 pt-1">
            <Link
              href="/services"
              className="block px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 transition-colors"
            >
              View all funding options →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
