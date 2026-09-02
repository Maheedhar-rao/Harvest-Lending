"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { FundingNav } from "@/components/funding-nav"
import { CreditNav } from "@/components/credit-nav"
import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "" })
  const [consents, setConsents] = useState({ marketing: false, nonMarketing: false })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.email.trim()) {
      setError("Please fill in your first name, last name, phone, and email.")
      return
    }
    if (!consents.marketing || !consents.nonMarketing) {
      setError("Please agree to both consent checkboxes to continue.")
      return
    }
    setError("")
    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...consents }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.")
      }
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? `${err.message} Please try again or email us at team@harvestlending.com.`
          : "Failed to send. Please try again.",
      )
    } finally {
      setSubmitting(false)
    }
  }

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
              className="font-[family-name:var(--font-open-sans)] text-amber-300 transition-all duration-300 hover:scale-110"
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
          <h2 className="text-4xl lg:text-5xl font-black font-[family-name:var(--font-montserrat)] text-amber-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-stone-600 font-[family-name:var(--font-open-sans)] max-w-3xl mx-auto">
            We&rsquo;re here to help. If you have any questions, need more information about our services, or would like
            to schedule an appointment, feel free to reach out. Simply fill out the form below and our team will get back
            to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto rounded-2xl border border-stone-200 shadow-lg p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mb-3">
                  Thank you, {form.firstName}!
                </h3>
                <p className="text-stone-600 font-[family-name:var(--font-open-sans)] mb-8">
                  Our team will reach you shortly.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ firstName: "", lastName: "", phone: "", email: "" })
                    setConsents({ marketing: false, nonMarketing: false })
                  }}
                  className="bg-amber-600 hover:bg-amber-500 text-white"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-[family-name:var(--font-open-sans)]">
                <div>
                  <Label htmlFor="firstName" className="text-amber-900 font-medium">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    value={form.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    placeholder="First Name"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-amber-900 font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={form.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    placeholder="Last Name"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-amber-900 font-medium">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Phone"
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-amber-900 font-medium">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Email"
                    className="mt-1.5"
                  />
                </div>

                <label className="flex items-start space-x-3 cursor-pointer text-sm text-stone-600">
                  <input
                    type="checkbox"
                    checked={consents.marketing}
                    onChange={(e) => setConsents((p) => ({ ...p, marketing: e.target.checked }))}
                    className="mt-1 h-4 w-4 flex-shrink-0 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span>
                    I consent to receive marketing text messages, about special offers, discounts, and service updates,
                    from <strong className="text-amber-900">HARVEST LENDING INC.</strong> at the phone number provided.
                    Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP
                    to opt out.
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer text-sm text-stone-600">
                  <input
                    type="checkbox"
                    checked={consents.nonMarketing}
                    onChange={(e) => setConsents((p) => ({ ...p, nonMarketing: e.target.checked }))}
                    className="mt-1 h-4 w-4 flex-shrink-0 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span>
                    I consent to receive non-marketing text messages from{" "}
                    <strong className="text-amber-900">HARVEST LENDING INC.</strong> about order updates and appointment
                    reminders. Message frequency may vary, message &amp; data rates may apply. Text HELP for assistance,
                    reply STOP to opt out.
                  </span>
                </label>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-amber-950 hover:bg-amber-900 text-white py-6 text-base font-semibold disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="max-w-2xl mx-auto mt-10 grid sm:grid-cols-3 gap-6 text-center font-[family-name:var(--font-open-sans)]">
            <div className="flex flex-col items-center">
              <Mail className="h-6 w-6 text-amber-600 mb-2" />
              <a href="mailto:team@harvestlending.com" className="text-stone-600 hover:text-amber-600 text-sm break-all">
                team@harvestlending.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 text-amber-600 mb-2" />
              <a href="tel:+13478317014" className="text-stone-600 hover:text-amber-600 text-sm">
                +1 347-831-7014
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 text-amber-600 mb-2" />
              <span className="text-stone-600 text-sm">438 S Pine Ave, South Amboy, NJ 08879</span>
            </div>
          </div>
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
