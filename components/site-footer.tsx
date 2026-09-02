import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"

export function SiteFooter({ linkBase = "" }: { linkBase?: string }) {
  return (
    <footer id="contact" className="bg-stone-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/harvest-logo.png"
                alt="Harvest Lending Logo"
                width={32}
                height={32}
                className="rounded-lg animate-pulse"
              />
              <h4 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">Harvest Lending</h4>
            </div>
            <p className="text-stone-300 font-[family-name:var(--font-open-sans)] text-sm mb-4">
              Your trusted partner for business funding solutions. Empowering entrepreneurs since 2015 with fast,
              flexible capital.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+13478317014">
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:scale-105 transition-all duration-300 bg-transparent border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white group"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="group-hover:hidden">Call Us</span>
                  <span className="hidden group-hover:inline">+1 347-831-7014</span>
                </Button>
              </a>
              <a href="mailto:team@harvestlending.com">
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:scale-105 transition-all duration-300 bg-transparent border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white group"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="group-hover:hidden">Email</span>
                  <span className="hidden group-hover:inline">team@harvestlending.com</span>
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-semibold font-[family-name:var(--font-montserrat)] mb-3 text-amber-400">Funding</h5>
            <ul className="space-y-2 text-sm font-[family-name:var(--font-open-sans)]">
              <li>
                <a href={`${linkBase}/funding/sba-loans`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  SBA Loans
                </a>
              </li>
              <li>
                <a href={`${linkBase}/funding/equipment-financing`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Equipment Financing
                </a>
              </li>
              <li>
                <a href={`${linkBase}/funding/merchant-cash-advance`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Merchant Cash Advance
                </a>
              </li>
              <li>
                <a href={`${linkBase}/funding/business-line-of-credit`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Business Line of Credit
                </a>
              </li>
              <li>
                <a href={`${linkBase}/funding/term-loans`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Term Loans
                </a>
              </li>
              <li>
                <a href={`${linkBase}/funding/real-estate-financing`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Real Estate Financing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold font-[family-name:var(--font-montserrat)] mb-3 text-amber-400">
              Credit Services
            </h5>
            <ul className="space-y-2 text-sm font-[family-name:var(--font-open-sans)]">
              <li>
                <a href={`${linkBase}/credit/credit-report`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Credit Report
                </a>
              </li>
              <li>
                <a href={`${linkBase}/credit/credit-guidance`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Credit Guidance
                </a>
              </li>
              <li>
                <a href={`${linkBase}/credit/credit-cards`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Credit Card Processing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold font-[family-name:var(--font-montserrat)] mb-3 text-amber-400">Company</h5>
            <ul className="space-y-2 text-sm font-[family-name:var(--font-open-sans)]">
              <li>
                <a href={`${linkBase}/about`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <span className="text-stone-300 cursor-default">Careers</span>
              </li>
              <li>
                <span className="text-stone-300 cursor-default">Press</span>
              </li>
              <li>
                <a href={`${linkBase}/contact`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold font-[family-name:var(--font-montserrat)] mb-3 text-amber-400">Legal</h5>
            <ul className="space-y-2 text-sm font-[family-name:var(--font-open-sans)]">
              <li>
                <a href={`${linkBase}/privacy`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={`${linkBase}/terms`} className="text-stone-300 hover:text-amber-400 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center">
          <p className="text-stone-400 text-sm font-[family-name:var(--font-open-sans)]">
            © 2024 Harvest Lending. All rights reserved. NMLS ID: 123456 | Equal Housing Lender
          </p>
        </div>
      </div>
    </footer>
  )
}
