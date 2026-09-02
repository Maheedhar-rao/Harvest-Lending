import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { FundingNav } from "@/components/funding-nav"
import { CreditNav } from "@/components/credit-nav"

export const metadata = {
  title: "Terms of Service | Harvest Lending",
  description: "Terms of Service governing your use of the Harvest Lending Inc. website and services.",
}

export default function TermsPage() {
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
            <Link
              href="/"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110"
            >
              Home
            </Link>
            <FundingNav />
            <CreditNav />
            <Link
              href="/about"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110"
            >
              Contact
            </Link>
            <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="bg-amber-600 hover:bg-amber-500 text-white hover:scale-110 transition-all duration-300 group shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black font-[family-name:var(--font-montserrat)] text-amber-900 mb-3">
            Terms of Service
          </h2>
          <p className="text-stone-600 font-[family-name:var(--font-open-sans)]">
            HARVEST LENDING INC. &mdash; Effective Date: November 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto font-[family-name:var(--font-open-sans)] text-stone-600 leading-relaxed">
            <p className="mb-4">
              Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and
              be bound by the following terms and conditions of use, which together with our privacy policy govern HARVEST
              LENDING INC. relationship with you in relation to this website. If you disagree with any part of these terms
              and conditions, please do not use our website. The term &lsquo;us&rsquo; or &lsquo;we&rsquo; refers to the
              owner of the website. The term &lsquo;you&rsquo; refers to the user or viewer of our website. The use of
              this website is subject to the following terms of use:
            </p>
            <p className="mb-8">
              You should check this page. This policy is effective from 1/11/2025. We may collect the following
              information.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              1. Acceptance of Terms
            </h3>
            <p className="mb-4">
              By accessing or using this website (https://harvestlending.com) or engaging our services, you agree to
              these Terms of Service (&ldquo;Terms&rdquo;), our Privacy Policy, and any additional policies or guidelines
              posted on our website.
            </p>
            <p className="mb-4">If you do not agree with these Terms, please discontinue use of the website and our services.</p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              2. About Our Services
            </h3>
            <p className="mb-4">
              HARVEST LENDING INC. provides Business Financing Consulting services, consultations, and related
              professional offerings. The information on this website is provided for general informational purposes
              only.
            </p>
            <p className="mb-2">
              Use of this website does not create a professional services agreement. A formal engagement occurs only
              after:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>A written proposal or contract is presented</li>
              <li>Terms are agreed upon by both parties</li>
              <li>Services officially begin</li>
            </ul>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              3. Eligibility
            </h3>
            <p className="mb-4">
              You must be at least 18 years old to use this website or request services from HARVEST LENDING INC..
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              4. User Responsibilities
            </h3>
            <p className="mb-2">By using this site, you agree that you will not:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Engage in unlawful, harmful, or fraudulent activity</li>
              <li>Attempt to gain unauthorized access to systems, information, or accounts</li>
              <li>Upload or transmit malware, viruses, or malicious code</li>
              <li>Copy, scrape, or reproduce content from the website without permission</li>
            </ul>
            <p className="mb-4">Unauthorized use may result in termination of access or legal action.</p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              5. Intellectual Property
            </h3>
            <p className="mb-4">
              All content on https://harvestlending.com, including text, graphics, logos, designs, documents, and other
              materials, is the property of HARVEST LENDING INC. or its licensors.
            </p>
            <p className="mb-2">You may not:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Copy, reproduce, modify, distribute, or publicly display any materials</li>
              <li>Use content for commercial purposes without written authorization</li>
            </ul>
            <p className="mb-4">Limited, personal, non-commercial use is permitted.</p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              6. Communications &amp; Messaging (SMS, Email, Phone)
            </h3>
            <p className="mb-4">
              By contacting HARVEST LENDING INC. through our website, email, phone, or SMS, you consent to receive
              communications related to our services. These may include service updates, appointment confirmations,
              document-related inquiries, transactional messages, and customer support communications.
            </p>
            <p className="mb-2 font-semibold text-amber-900">Business Identity Clause</p>
            <p className="mb-4">
              HARVEST LENDING INC. may send SMS or other electronic messages related to our services, including document
              status updates, appointment reminders, transactional notifications, and customer support communications.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              7. Opt-Out &amp; Support Mechanisms (SMS Terms)
            </h3>
            <p className="mb-4">
              You can cancel the SMS service at any time. Just text &ldquo;STOP&rdquo; to 347-831-7014. After you send
              the SMS message &ldquo;STOP&rdquo; to us, we will send you an SMS message to confirm that you have been
              unsubscribed. After this, you will no longer receive SMS messages from us.
            </p>
            <p className="mb-4">
              If you want to join again, simply sign up as you did the first time, and we will resume sending SMS
              messages.
            </p>
            <p className="mb-4">
              If you are experiencing issues with the messaging program, you can reply with the keyword HELP to
              347-831-7014 for more assistance, or you can get help directly by contacting:
            </p>
            <ul className="list-none pl-0 space-y-1 mb-4">
              <li>Email: team@harvestlending.com</li>
              <li>Phone: 347-831-7014</li>
            </ul>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              8. Message Frequency &amp; Rates
            </h3>
            <p className="mb-4">Message frequency may vary depending on your interaction with our services.</p>
            <p className="mb-4">You may receive up to 4 messages per month.</p>
            <p className="mb-4">
              As always, message and data rates may apply for any messages sent to you from us and to us from you. If you
              have any questions about your text plan or data plan, it is best to contact your wireless provider.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              9. Carrier Liability Clause
            </h3>
            <p className="mb-4">Carriers are not liable for delayed or undelivered messages.</p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              10. Quotes, Billing, and Payments
            </h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Quotes or proposals provided by HARVEST LENDING INC. are valid only for the timeframe stated in the document.</li>
              <li>Payment terms, schedules, and accepted payment methods will be clearly defined in service agreements or invoices.</li>
              <li>Failure to pay invoices on time may result in service delays, suspension, or termination.</li>
            </ul>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              11. Service Modifications and Availability
            </h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>We reserve the right to modify, suspend, or discontinue any part of the website or services at any time without prior notice.</li>
              <li>We do not guarantee that the website will always be available, uninterrupted, or error-free.</li>
            </ul>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              12. Third-Party Links
            </h3>
            <p className="mb-4">
              Our website may include links to third-party websites or tools. These resources are provided for user
              convenience and do not constitute endorsements.
            </p>
            <p className="mb-4">
              We are not responsible for the content, security, or privacy practices of external websites.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              13. Disclaimer of Warranties
            </h3>
            <p className="mb-4">The website and all content are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;</p>
            <p className="mb-2">We make no warranties, express or implied, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Accuracy or completeness of information</li>
              <li>Fitness for a particular purpose</li>
              <li>Reliability or availability of the website</li>
            </ul>
            <p className="mb-4">Use the site and services at your own risk.</p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              14. Limitation of Liability
            </h3>
            <p className="mb-2">
              To the fullest extent permitted by law, HARVEST LENDING INC., its owners, employees, and partners are not
              liable for any damages arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Use or inability to use the website</li>
              <li>Errors or omissions in website content</li>
              <li>Service interruptions, system failures, or data loss</li>
              <li>Decisions made based on website information</li>
            </ul>
            <p className="mb-4">In all cases, our liability is limited to the amount you paid for services, if applicable.</p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              15. Indemnification
            </h3>
            <p className="mb-2">
              You agree to indemnify and hold harmless HARVEST LENDING INC., its employees, contractors, and affiliates
              from any claims, damages, losses, or expenses resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Your violation of these Terms</li>
              <li>Misuse of the website or services</li>
              <li>Unauthorized access or actions taken using your information</li>
            </ul>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              16. Governing Law &amp; Dispute Resolution
            </h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>These Terms are governed by the laws of the State of North Carolina.</li>
              <li>Any disputes will be resolved through binding arbitration in North Carolina unless otherwise required by law.</li>
            </ul>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              17. Termination
            </h3>
            <p className="mb-4">
              We may suspend or terminate your access to the website or services at any time, with or without notice, for
              any reason&mdash;including misuse, violations of these Terms, or unlawful behavior.
            </p>
            <p className="mb-4">
              Upon termination, you must immediately cease use of the website and destroy any downloaded materials.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              18. Privacy Policy
            </h3>
            <p className="mb-4">
              If you have any questions regarding privacy, please read our{" "}
              <Link href="/privacy" className="text-amber-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              19. Changes to These Terms
            </h3>
            <p className="mb-4">
              We may update these Terms periodically. Changes will be posted on this page with an updated effective date.
            </p>
            <p className="mb-4">
              Your continued use of the website after revisions indicates acceptance of the updated Terms.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mt-10 mb-2">
              20. Contact Information
            </h3>
            <p className="mb-2">For questions or concerns regarding these Terms of Service, please contact:</p>
            <ul className="list-none pl-0 space-y-1 mb-8">
              <li className="font-semibold text-amber-900">HARVEST LENDING INC.</li>
              <li>📧 team@harvestlending.com</li>
              <li>📞 +1 347-831-7014</li>
              <li>🌐 https://harvestlending.com</li>
            </ul>

            <div className="border-t border-stone-200 pt-6">
              <p className="mb-4">
                <span className="font-semibold text-amber-900">Privacy Policy:</span> Your privacy is very important to
                us. Your information will be used to contact you and provide assistance with your financial document
                preparation. We will not sell, rent, spam, or otherwise use this information for any other purpose.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Back to home */}
      <section className="py-12 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Link href="/">
            <Button
              variant="secondary"
              className="bg-amber-600 hover:bg-amber-500 text-white hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
