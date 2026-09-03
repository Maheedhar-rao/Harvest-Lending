"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, Loader2 } from "lucide-react"
import {
  BANK_ACCOUNT_OPTIONS,
  CAPITAL_OPTIONS,
  CREDIT_SCORE_OPTIONS,
  INDUSTRY_OPTIONS,
  MONTHLY_SALES_OPTIONS,
  STATE_OPTIONS,
  TIME_IN_BUSINESS_OPTIONS,
  isDisqualified,
} from "./options"

type FormState = {
  capitalNeeded: string
  businessName: string
  timeInBusiness: string
  bankAccount: string
  industry: string
  phone: string
  state: string
  email: string
  monthlySales: string
  creditScore: string
  firstName: string
  lastName: string
  textAlerts: boolean
}

const EMPTY: FormState = {
  capitalNeeded: "",
  businessName: "",
  timeInBusiness: "",
  bankAccount: "",
  industry: "",
  phone: "",
  state: "",
  email: "",
  monthlySales: "",
  creditScore: "",
  firstName: "",
  lastName: "",
  textAlerts: true,
}

const PHONE_PATTERN = /^\+?1?[ \-]?[(]?[2-9][0-9][0-9][)]?[ \-]?[2-9][0-9][0-9][ \-]?[0-9]{4}$/

const labelClass = "block text-[15px] font-bold text-white mb-2"
const fieldClass =
  "w-full rounded-lg border-0 bg-white px-4 py-3 text-[15px] text-stone-900 shadow-sm outline-none ring-0 focus:ring-2 focus:ring-[#f4bc41] disabled:opacity-60"

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col">
      <label htmlFor={id} className={`${labelClass} grow`}>
        {label} <span aria-hidden="true">*</span>
      </label>
      {children}
    </div>
  )
}

function Select({
  id,
  value,
  onChange,
  options,
  placeholder = "Please Select",
}: {
  id: string
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder?: string
}) {
  return (
    <select
      id={id}
      name={id}
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={fieldClass}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  )
}

export default function ApplyForm() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2>(1)
  const [form, setForm] = useState<FormState>(EMPTY)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  function handleContinue(e: React.FormEvent) {
    e.preventDefault()
    if (!PHONE_PATTERN.test(form.phone.trim())) {
      setError("Please enter a valid US phone number.")
      return
    }
    setError(null)
    setStep(2)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    const disqualified = isDisqualified(form.timeInBusiness, form.bankAccount)
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, qualified: !disqualified }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try again.")
        setSubmitting(false)
        return
      }
      router.push(disqualified ? "/submitted?status=review" : "/submitted")
    } catch {
      setError("Something went wrong. Please try again.")
      setSubmitting(false)
    }
  }

  return (
    <div id="application" className="rounded-3xl bg-[#79401c] p-6 shadow-2xl sm:p-8">
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <span aria-hidden="true" />
        <span className="shrink-0 text-base font-bold text-white">Step {step} of 2</span>
      </div>

      {step === 1 ? (
        <form onSubmit={handleContinue}>
          <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
          <Field id="req" label="How much capital does your business need?">
            <Select
              id="req"
              value={form.capitalNeeded}
              onChange={(v) => set("capitalNeeded", v)}
              options={CAPITAL_OPTIONS}
            />
          </Field>

          <Field id="bn" label="What is the name of your business?">
            <input
              id="bn"
              name="bn"
              type="text"
              required
              placeholder="Business Name"
              value={form.businessName}
              onChange={(e) => set("businessName", e.target.value)}
              className={fieldClass}
            />
          </Field>

          <Field id="tib" label="How long have you been in business?">
            <Select
              id="tib"
              value={form.timeInBusiness}
              onChange={(v) => set("timeInBusiness", v)}
              options={TIME_IN_BUSINESS_OPTIONS}
            />
          </Field>

          <Field id="businessbankaccount" label="Do you have a business bank account?">
            <Select
              id="businessbankaccount"
              value={form.bankAccount}
              onChange={(v) => set("bankAccount", v)}
              options={BANK_ACCOUNT_OPTIONS}
            />
          </Field>

          <Field id="ind" label="Select your Industry">
            <Select
              id="ind"
              value={form.industry}
              onChange={(v) => set("industry", v)}
              options={INDUSTRY_OPTIONS}
            />
          </Field>

          <Field id="ph" label="What is the best number to reach you on?">
            <input
              id="ph"
              name="ph"
              type="tel"
              required
              placeholder="Best Contact Number"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={fieldClass}
            />
          </Field>

          </div>

          {error && (
            <p role="alert" className="mt-4 text-center text-sm font-semibold text-[#fae792]">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mx-auto mt-7 block w-full max-w-md rounded-lg bg-[#d3772c] px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-[#be591c]"
          >
            Continue
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
            <Field id="state" label="Where is your business located?">
              <Select
                id="state"
                value={form.state}
                onChange={(v) => set("state", v)}
                options={STATE_OPTIONS}
                placeholder="Select a State"
              />
            </Field>

            <Field id="email" label="What is your email address?">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className={fieldClass}
              />
            </Field>

            <Field id="sales" label="What are your average monthly sales?">
              <Select
                id="sales"
                value={form.monthlySales}
                onChange={(v) => set("monthlySales", v)}
                options={MONTHLY_SALES_OPTIONS}
              />
            </Field>

            <Field id="credit" label="What is your approx credit score?">
              <Select
                id="credit"
                value={form.creditScore}
                onChange={(v) => set("creditScore", v)}
                options={CREDIT_SCORE_OPTIONS}
              />
            </Field>

            <Field id="firstName" label="First Name">
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) => set("firstName", e.target.value)}
                className={fieldClass}
              />
            </Field>

            <Field id="lastName" label="Last Name">
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => set("lastName", e.target.value)}
                className={fieldClass}
              />
            </Field>
          </div>

          <label className="flex items-start gap-3 pt-1 text-[15px] font-medium text-white">
            <input
              type="checkbox"
              checked={form.textAlerts}
              onChange={(e) => set("textAlerts", e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-[#2563eb]"
            />
            I&apos;d like to receive text alerts with any updates to my application
          </label>

          {error && (
            <p role="alert" className="text-sm font-semibold text-[#fae792]">
              {error}
            </p>
          )}

          <div className="mx-auto mt-3 flex max-w-xl flex-col gap-3 sm:flex-row-reverse sm:items-center">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#d3772c] px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-[#be591c] disabled:cursor-not-allowed disabled:opacity-70 sm:w-2/3"
            >
              {submitting && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
              {submitting ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full rounded-lg border border-white/40 px-6 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 sm:w-1/3"
            >
              Back
            </button>
          </div>
        </form>
      )}

      <p className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-amber-50/90">
        <Lock className="h-4 w-4" aria-hidden="true" />
        Privacy &amp; Security Protected
      </p>
    </div>
  )
}
