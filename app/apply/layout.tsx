import type { Metadata } from "next"
import { Urbanist } from "next/font/google"

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
})

export const metadata: Metadata = {
  title: "Apply for Business Funding | Harvest Lending",
  description:
    "Get fast and easy business funding today. Apply in two minutes and receive funding in as little as 24 hours.",
}

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${urbanist.variable} font-[family-name:var(--font-urbanist)]`}>
      {children}
    </div>
  )
}
