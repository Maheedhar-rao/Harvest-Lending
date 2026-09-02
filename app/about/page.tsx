import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, ShieldCheck, Clock, ArrowRight, Handshake, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { FundingNav } from "@/components/funding-nav"
import { CreditNav } from "@/components/credit-nav"

export const metadata = {
  title: "About | Harvest Lending",
  description:
    "Learn about Harvest Lending Inc. — our mission, commitment, and what sets us apart in business financing.",
}

const differentiators = [
  {
    icon: Target,
    title: "Expert Accuracy",
    description:
      "Our team stays current with the latest regulatory standards to ensure your documents meet all necessary legal and professional requirements.",
  },
  {
    icon: CheckCircle,
    title: "Tailored Approach",
    description:
      "We know that no two financial journeys are the same. We customize our preparation process to fit your specific needs and industry standards.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential",
    description:
      "We utilize industry-leading security protocols to ensure your sensitive financial information remains protected at every step of the process.",
  },
  {
    icon: Clock,
    title: "Time-Saving Efficiency",
    description:
      "We handle the heavy lifting of document preparation so you can focus on what you do best—running your business or enjoying your life.",
  },
]

export default function AboutPage() {
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
              className="font-[family-name:var(--font-open-sans)] text-amber-300 transition-all duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/#testimonials"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110"
            >
              Reviews
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
      <section className="relative bg-gradient-to-br from-amber-50 to-yellow-100 py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black font-[family-name:var(--font-montserrat)] text-amber-900 mb-6">
            About <span className="text-amber-600">Harvest Lending Inc.</span>
          </h2>
          <p className="text-lg text-stone-600 font-[family-name:var(--font-open-sans)] max-w-3xl mx-auto">
            At Harvest Lending Inc., get fast access to tailored financial solutions designed to help you manage and grow
            your business.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mb-6 text-center">
            Our Mission
          </h3>
          <div className="space-y-4 text-stone-600 font-[family-name:var(--font-open-sans)] text-lg leading-relaxed">
            <p>
              Harvest Lending Inc. is dedicated to offering a comprehensive range of services and solutions tailored for
              small businesses. We provide merchant cash advances, small business loans, SBA loans, equipment financing,
              factoring, purchase order financing, and commercial mortgages across the nation.
            </p>
            <p>
              Our goal is to secure the most suitable financial solution for your business, even if you face challenges
              like bad credit, operating in high-risk industries, or other financial obstacles. Additionally, Harvest
              Lending Inc. offers credit card processing services, as well as personal and business credit solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mb-6 text-center">
            Our Commitment
          </h3>
          <div className="space-y-4 text-stone-600 font-[family-name:var(--font-open-sans)] text-lg leading-relaxed text-center">
            <p>
              At Harvest Lending Inc., integrity and professionalism are at the core of everything we do. We are
              committed to building long-term relationships based on trust, transparency, and consistent service quality.
            </p>
            <p>
              Let Harvest Lending Inc. be your reliable partner in navigating Business Financing Consulting, so you can
              focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mb-12 text-center">
            What Sets Us Apart
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {differentiators.map(({ icon: Icon, title, description }, index) => (
              <Card
                key={index}
                className="border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900 mb-2 font-[family-name:var(--font-montserrat)]">
                        {title}
                      </h4>
                      <p className="text-stone-600 font-[family-name:var(--font-open-sans)] leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The money itself is personal */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-black font-[family-name:var(--font-montserrat)] text-amber-900 leading-tight lg:sticky lg:top-28">
              The money itself is <span className="text-amber-600">personal.</span>
            </h3>
            <div className="space-y-4 text-stone-600 font-[family-name:var(--font-open-sans)] text-lg leading-relaxed">
              <p>It can be easy for some firms to see your life as a collection of digits.</p>
              <p>But the money itself is personal.</p>
              <p>
                We get invested in each and every one of our clients—your business is our business. We go to great
                lengths to document thoroughly enough for years-later recall.
              </p>
              <p>
                Taxes are our bread and butter—and often, just the beginning for our clients. As a firm, we're
                generalists, experts in all aspects of finance. Individually, we're a group of specialists in our
                respected areas.
              </p>
              <p>Come on in with any financial challenge, big or small. We'll get after it.</p>
              <p>
                Because we're in it for the people behind the numbers. At Harvest Lending Inc., we take finance
                personally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Long-Term Partnerships */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Handshake className="h-7 w-7 text-amber-600" />
          </div>
          <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mb-6">
            Building Long-Term Partnerships
          </h3>
          <p className="text-stone-600 font-[family-name:var(--font-open-sans)] text-lg leading-relaxed">
            We believe in building long-term relationships, not just completing one-time tasks. As our clients' needs
            evolve, we adapt our services to continue supporting them with reliable financial document preparation at
            every stage.
          </p>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="h-7 w-7 text-amber-600" />
          </div>
          <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mb-6">
            Why Clients Choose Us
          </h3>
          <p className="text-stone-600 font-[family-name:var(--font-open-sans)] text-lg leading-relaxed">
            Clients choose Harvest Lending Inc. for our attention to detail, dependable turnaround times, and clear
            communication. We prioritize quality over shortcuts and aim to deliver documents that reflect professionalism
            and readiness.
          </p>
        </div>
      </section>

      {/* CTA back to home */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] mb-4">
            Ready to grow your business?
          </h3>
          <p className="text-amber-100 font-[family-name:var(--font-open-sans)] mb-8 max-w-2xl mx-auto">
            Let Harvest Lending be your reliable partner in business financing.
          </p>
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
