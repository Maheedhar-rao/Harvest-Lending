import Image from "next/image"
import {
  ArrowRight,
  Banknote,
  Building2,
  Clock,
  CreditCard,
  Landmark,
  Phone,
  Repeat,
  ShieldCheck,
  Star,
  TrendingUp,
  Truck,
  Wrench,
  Zap,
} from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import ApplyForm from "./apply-form"

// On the apply-only deploy the rest of the site lives on another domain, so the
// shared footer's links need to be absolute.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || ""

const PHONE_DISPLAY = "+1 347-831-7014"
const PHONE_HREF = "tel:+13478317014"

const STATS = [
  { value: "95%", label: "Client Success Rate" },
  { value: "24hr", label: "Average Time to Funding" },
  { value: "40M+", label: "Total Capital Secured" },
]

const CHALLENGES = [
  {
    icon: CreditCard,
    title: "Low Credit Score",
    body: "Getting told 'no' by banks like it's your fault you kept the business alive during a pandemic",
  },
  {
    icon: Banknote,
    title: "Cash Flow Crunch",
    body: "Sales are booming, but your account balance still feels like a bad joke",
  },
  {
    icon: Landmark,
    title: "Denied by the Bank",
    body: "Explaining your business model to a banker who's never owned one",
  },
  {
    icon: Zap,
    title: "Too Fast For The System",
    body: "You're scaling fast but banks move at the speed of paperwork",
  },
]

const SOLUTIONS = [
  { icon: Building2, title: "SBA Funding", tags: ["Long terms", "Low rates"] },
  { icon: Wrench, title: "Equipment Financing", tags: ["New machinery", "Flexible"] },
  { icon: Truck, title: "Merchant Cash Advance", tags: ["Working capital", "Immediate"] },
  { icon: TrendingUp, title: "Business Growth", tags: ["Up to $500K", "Revenue"] },
]

const SYSTEM = [
  {
    icon: Clock,
    title: "Fast Turnaround Times",
    body: "Receive funding in as little as 24 hours. Because opportunity doesn't wait.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Based Funding",
    body: "Get approved based on your daily sales not your credit score or paperwork pile.",
  },
  {
    icon: Repeat,
    title: "Flexible Repayment Options",
    body: "Reasonable payback through the system, no pressure.",
  },
]

const TESTIMONIALS = [
  {
    name: "Sarah Martinez",
    role: "CEO - Engineering / Manufacturing, Wyoming",
    quote:
      "I was struggling to cover payroll and take on new contracts. Within 48 hours of working with Harvest Lending, we secured $175K in funding. It saved my business and let us scale faster than ever.",
  },
  {
    name: "David Chen",
    role: "COO - Logistics, Utah",
    quote:
      "Traditional banks kept turning us down because of our industry. Harvest Lending came through with $60K in less than 2 days. We used it to launch a new product line and double our monthly revenue.",
  },
  {
    name: "Lisa Thompson",
    role: "CIO - Blend Coffee, New York",
    quote:
      "Cash flow was tight after a slow quarter, and we needed funds fast to keep operations running. Harvest Lending approved us within 24 hours and funded $40K by the next morning.",
  },
]

const THOMAS_STATS = [
  { value: "1,000+", label: "Clients Served" },
  { value: "$50M+", label: "Funded" },
  { value: "95%", label: "Success Rate" },
]

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string
  title: string
  body?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#be591c]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold leading-tight text-[#3b2412] sm:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-4 text-lg leading-relaxed text-stone-600">{body}</p>}
    </div>
  )
}

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      {/* Header */}
      <header className="bg-[#79401c]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/apply/harvest-lending-montserrat.png"
              alt="Harvest Lending"
              width={220}
              height={28}
              priority
              className="h-6 w-auto"
            />
            <span className="hidden text-sm font-semibold text-amber-100/80 sm:inline">
              Harvest the Power of Lending
            </span>
          </div>
          <a href={PHONE_HREF} className="flex items-center gap-3 text-right text-white">
            <Phone className="h-5 w-5 text-[#f4bc41]" aria-hidden="true" />
            <span className="leading-tight">
              <span className="block text-xs font-semibold text-amber-100/80">
                Need Assistance?
              </span>
              <span className="block text-lg font-extrabold">{PHONE_DISPLAY}</span>
            </span>
          </a>
        </div>
      </header>

      {/* Hero + application form */}
      <section className="relative overflow-hidden bg-[#fefadc]">
        <Image
          src="/apply/header.png"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-14 lg:py-16">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#79401c] ring-1 ring-[#e5c98a]">
              ✨ Transforming small business funding Since 2015
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-black leading-[1.1] text-[#231a12] sm:text-5xl xl:text-6xl">
              Harvest the Power of <span className="text-[#d3772c]">Lending</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-stone-700 sm:text-xl">
              At Harvest Lending, Our mission is to empower business owners to achieve their
              unique financial goals by providing comprehensive, tailored financial
              solutions. We strive to be the trusted partner that navigates the complexities
              of financial services.
            </p>
          </div>

          <Image
            src="/apply/layer-15424.png"
            alt="Start here"
            width={240}
            height={84}
            className="ml-2 mt-6 h-16 w-auto sm:ml-10 lg:h-20"
          />

          <ApplyForm />

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-stone-700">
              Get fast and easy business funding today.
            </p>
            <dl className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-[#be591c] sm:text-4xl">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-stone-600">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-[#f9f6ee] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Are You Struggling With These Business Challenges?"
            body="Real problems that business owners face every day - and how we solve them"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHALLENGES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-stone-200/70"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#fcf3cb]">
                  <Icon className="h-6 w-6 text-[#be591c]" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-montserrat)] text-lg font-bold text-[#3b2412]">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Comprehensive Business Funding Solutions"
            body="Whether you're expanding, overcoming cash flow gaps, or recovering from a bank denial, We have the expertise and capital to move your business forward."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map(({ icon: Icon, title, tags }) => (
              <div
                key={title}
                className="rounded-2xl border border-stone-200 p-7 transition-shadow hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#79401c]">
                  <Icon className="h-6 w-6 text-[#f4bc41]" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-montserrat)] text-lg font-bold text-[#3b2412]">
                  {title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-[#fcf3cb] px-3 py-1 text-xs font-bold text-[#79401c]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#fefbed] px-8 py-8 text-center sm:flex-row sm:text-left">
            <ShieldCheck className="h-10 w-10 shrink-0 text-[#be591c]" aria-hidden="true" />
            <div>
              <p className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[#3b2412]">
                Low Credit? No Problem
              </p>
              <p className="mt-1 text-[15px] text-stone-600">
                We fund businesses banks won&apos;t touch. If you&apos;re earning,
                you&apos;re eligible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven system */}
      <section className="bg-[#fefbed] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Transform Your Business With Our Proven System"
            body="We fund businesses banks won't touch. If you're earning, you're eligible."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SYSTEM.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#fcf3cb]">
                  <Icon className="h-7 w-7 text-[#be591c]" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-montserrat)] text-lg font-bold text-[#3b2412]">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#fefbed] px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Real People, Real Results, Real Transformations"
            body="See how our clients have achieved remarkable business breakthroughs and life-changing results."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#f4bc41] text-[#f4bc41]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 grow text-[15px] leading-relaxed text-stone-700">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-stone-200 pt-5">
                  <span className="block font-[family-name:var(--font-montserrat)] font-bold text-[#3b2412]">
                    {t.name}
                  </span>
                  <span className="mt-1 block text-sm text-stone-500">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Thomas */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[320px_1fr]">
          <div className="mx-auto">
            <Image
              src="/apply/thomas.png"
              alt="Thomas Chillemi, Business Development Executive"
              width={320}
              height={320}
              className="h-64 w-64 rounded-full object-cover shadow-xl lg:h-80 lg:w-80"
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#be591c]">
              Meet Your Business Catalyst
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold leading-tight text-[#3b2412] sm:text-4xl">
              Hi, I&apos;m Thomas Chillemi - Your Business Transformation Expert
            </h2>
            <p className="mt-3 text-lg font-semibold text-[#79401c]">
              Thomas Chillemi &middot; Business Development Executive
            </p>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              With over 15 years of experience in small business funding and financial
              strategy, I&apos;ve helped over 1,000 entrepreneurs secure fast, flexible
              capital to grow, recover, and scale. Our mission is simple: To help you access
              the funding you deserve without the delays, denials, or red tape.
            </p>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              {THOMAS_STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-[#be591c]">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-stone-600">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href="#application"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#d3772c] px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#be591c]"
            >
              Contact Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-[#8a3f0c] px-6 py-20">
        <Image
          src="/apply/ready.png"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Ready to Break Through Your Business Expansion Barriers?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-amber-50/90">
            Don&apos;t let another year pass feeling stuck for capital. Book your free
            30-minute strategy call today and discover exactly what&apos;s holding you back
            and how to overcome it.
          </p>
          <a
            href="#application"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#f4bc41] px-8 py-4 text-lg font-bold text-[#3b2412] transition-colors hover:bg-[#f09f39]"
          >
            Start Your Application <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <SiteFooter linkBase={SITE_URL} />
    </main>
  )
}
