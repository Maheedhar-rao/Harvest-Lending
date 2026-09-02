"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  CheckCircle,
  DollarSign,
  Clock,
  Shield,
  Star,
  TrendingUp,
  ArrowRight,
  Phone,
  Mail,
  Calculator,
  Zap,
  Landmark,
  Briefcase,
  CreditCard,
  FileText,
  BarChart3,
  Building2,
  Award,
  Target,
  FileSearch,
  Wrench,
  ClipboardCheck,
  Users,
} from "lucide-react"
import { useState, useEffect, Fragment } from "react"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import { FundingNav } from "@/components/funding-nav"
import { CreditNav } from "@/components/credit-nav"

export default function HarvestLendingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [counters, setCounters] = useState({ customers: 0, funded: 0, satisfaction: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    monthlyRevenue: "",
    state: "",
    email: "",
    mobile: "",
  })
  const [calculatedRate, setCalculatedRate] = useState<{ min: number; max: number } | null>(null)

  useEffect(() => {
    setIsVisible(true)

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounters((prev) => ({
          customers: prev.customers < 1000 ? prev.customers + 10 : 1000,
          funded: prev.funded < 50 ? prev.funded + 1 : 50,
          satisfaction: prev.satisfaction < 95 ? prev.satisfaction + 1 : 95,
        }))
      }, 50)

      setTimeout(() => clearInterval(interval), 2000)
    }, 1000)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateMyRate = () => {
    const revenue = Number.parseFloat(formData.monthlyRevenue)
    if (revenue && revenue > 0) {
      const minRate = Math.round(revenue * 1.0) // 100% of monthly revenue
      const maxRate = Math.round(revenue * 1.5) // 150% of monthly revenue
      setCalculatedRate({ min: minRate, max: maxRate })
    }
  }

  const resetDialog = () => {
    setFormData({ monthlyRevenue: "", state: "", email: "", mobile: "" })
    setCalculatedRate(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-amber-900/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="#home"
            className={`flex items-center space-x-3 transition-all duration-700 cursor-pointer ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
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
          </a>
          <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer" className="md:hidden">
            <Button size="sm" className="bg-amber-600 hover:bg-amber-500 text-white font-semibold">
              Apply
            </Button>
          </a>
          <nav
            className={`hidden md:flex items-center space-x-6 transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <FundingNav />
            <CreditNav />
            <a
              href="/about"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#testimonials"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110 relative group"
            >
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="bg-amber-600 hover:bg-amber-500 text-white hover:scale-110 hover:rotate-2 transition-all duration-300 group shadow-lg hover:shadow-2xl animate-pulse-slow"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-300" />
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-amber-50 to-yellow-100 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full animate-bounce-slow"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-amber-300/10 rounded-full animate-spin-slow"
            style={{ animationDelay: "1s", animationDuration: "8s", transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-amber-500/20 rounded-full animate-pulse-slow"
            style={{ animationDelay: "2s", transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div className="absolute top-1/3 left-1/3 animate-float-complex">
            <DollarSign className="h-8 w-8 text-amber-400/30 animate-wiggle" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-float-complex" style={{ animationDelay: "1.5s" }}>
            <TrendingUp className="h-6 w-6 text-stone-500/30 animate-wiggle" />
          </div>
          <div className="absolute top-1/2 right-10 animate-float-complex" style={{ animationDelay: "3s" }}>
            <CheckCircle className="h-10 w-10 text-amber-300/20 animate-spin-slow" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge
            className={`mb-6 bg-amber-600 text-white border-amber-400/20 transition-all duration-1000 delay-500 animate-bounce-gentle hover:scale-110 hover:rotate-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            ✨ Transforming small business funding Since 2015
          </Badge>
          <h2
            className={`text-4xl lg:text-6xl font-black font-[family-name:var(--font-montserrat)] text-stone-800 mb-6 text-balance transition-all duration-1000 delay-700 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Harvest the Power of{" "}
            <span className="text-amber-600 animate-gradient-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent animate-pulse-slow">
              Lending
            </span>
          </h2>
          <p
            className={`text-xl text-stone-600 font-[family-name:var(--font-open-sans)] mb-8 max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-900 hover:text-stone-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            At Harvest Lending, Our mission is to empower business owners to achieve their unique financial goals by
            providing comprehensive, tailored financial solutions. We strive to be the trusted partner that navigates
            the complexities of financial services.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-white font-semibold hover:scale-110 hover:rotate-1 transition-all duration-300 group shadow-lg hover:shadow-2xl animate-pulse-gentle"
              >
                Get Pre-Approved
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-300" />
              </Button>
            </a>
            <Dialog
              open={isDialogOpen}
              onOpenChange={(open) => {
                setIsDialogOpen(open)
                if (!open) resetDialog()
              }}
            >
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-xl"
                >
                  <Calculator className="mr-2 h-4 w-4 animate-wiggle" />
                  Calculate Rates
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
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
                    <Label htmlFor="monthlyRevenue" className="text-sm font-medium text-stone-700">
                      Monthly Revenue ($)
                    </Label>
                    <Input
                      id="monthlyRevenue"
                      type="number"
                      placeholder="Enter your monthly revenue"
                      value={formData.monthlyRevenue}
                      onChange={(e) => handleInputChange("monthlyRevenue", e.target.value)}
                      className="border-stone-300 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-medium text-stone-700">
                      State
                    </Label>
                    <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                      <SelectTrigger className="border-stone-300 focus:border-amber-500">
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AL">Alabama</SelectItem>
                        <SelectItem value="AK">Alaska</SelectItem>
                        <SelectItem value="AZ">Arizona</SelectItem>
                        <SelectItem value="AR">Arkansas</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="CO">Colorado</SelectItem>
                        <SelectItem value="CT">Connecticut</SelectItem>
                        <SelectItem value="DE">Delaware</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                        <SelectItem value="GA">Georgia</SelectItem>
                        <SelectItem value="HI">Hawaii</SelectItem>
                        <SelectItem value="ID">Idaho</SelectItem>
                        <SelectItem value="IL">Illinois</SelectItem>
                        <SelectItem value="IN">Indiana</SelectItem>
                        <SelectItem value="IA">Iowa</SelectItem>
                        <SelectItem value="KS">Kansas</SelectItem>
                        <SelectItem value="KY">Kentucky</SelectItem>
                        <SelectItem value="LA">Louisiana</SelectItem>
                        <SelectItem value="ME">Maine</SelectItem>
                        <SelectItem value="MD">Maryland</SelectItem>
                        <SelectItem value="MA">Massachusetts</SelectItem>
                        <SelectItem value="MI">Michigan</SelectItem>
                        <SelectItem value="MN">Minnesota</SelectItem>
                        <SelectItem value="MS">Mississippi</SelectItem>
                        <SelectItem value="MO">Missouri</SelectItem>
                        <SelectItem value="MT">Montana</SelectItem>
                        <SelectItem value="NE">Nebraska</SelectItem>
                        <SelectItem value="NV">Nevada</SelectItem>
                        <SelectItem value="NH">New Hampshire</SelectItem>
                        <SelectItem value="NJ">New Jersey</SelectItem>
                        <SelectItem value="NM">New Mexico</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="NC">North Carolina</SelectItem>
                        <SelectItem value="ND">North Dakota</SelectItem>
                        <SelectItem value="OH">Ohio</SelectItem>
                        <SelectItem value="OK">Oklahoma</SelectItem>
                        <SelectItem value="OR">Oregon</SelectItem>
                        <SelectItem value="PA">Pennsylvania</SelectItem>
                        <SelectItem value="RI">Rhode Island</SelectItem>
                        <SelectItem value="SC">South Carolina</SelectItem>
                        <SelectItem value="SD">South Dakota</SelectItem>
                        <SelectItem value="TN">Tennessee</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="UT">Utah</SelectItem>
                        <SelectItem value="VT">Vermont</SelectItem>
                        <SelectItem value="VA">Virginia</SelectItem>
                        <SelectItem value="WA">Washington</SelectItem>
                        <SelectItem value="WV">West Virginia</SelectItem>
                        <SelectItem value="WI">Wisconsin</SelectItem>
                        <SelectItem value="WY">Wyoming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-stone-700">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-stone-300 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-sm font-medium text-stone-700">
                      Mobile Number
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                      className="border-stone-300 focus:border-amber-500"
                    />
                  </div>

                  <Button
                    onClick={calculateMyRate}
                    className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 hover:scale-105 transition-all duration-300"
                    disabled={!formData.monthlyRevenue || !formData.state || !formData.email || !formData.mobile}
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate My Rate
                  </Button>

                  {calculatedRate && (
                    <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <h4 className="text-lg font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Your Estimated Funding Range
                      </h4>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-600 mb-2">
                          ${calculatedRate.min.toLocaleString()} - ${calculatedRate.max.toLocaleString()}
                        </div>
                        <p className="text-sm text-stone-600 mb-4">Based on 100% to 150% of your monthly revenue</p>
                        <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer">
                          <Button
                            size="sm"
                            className="bg-amber-600 hover:bg-amber-500 text-white"
                            onClick={() => setIsDialogOpen(false)}
                          >
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
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 animate-gradient-shift"></div>
          <div className="absolute top-10 right-10 w-24 h-24 bg-amber-400/10 rounded-full animate-float-slow"></div>
          <div
            className="absolute bottom-10 left-10 w-32 h-32 bg-amber-500/10 rounded-full animate-float-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="text-4xl font-bold mb-2 animate-number-count text-amber-400">95%</div>
              <div className="text-amber-100 hover:text-white transition-colors duration-300">Client Success Rate</div>
            </div>
            <div
              className="animate-fade-in-up hover:scale-110 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-4xl font-bold mb-2 text-amber-400 animate-pulse-gentle">24hr</div>
              <div className="text-amber-100 hover:text-white transition-colors duration-300">
                Average Time to Funding
              </div>
            </div>
            <div
              className="animate-fade-in-up hover:scale-110 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl font-bold mb-2 animate-number-count text-amber-400">{counters.funded}M+</div>
              <div className="text-amber-100 hover:text-white transition-colors duration-300">
                Total Capital Secured
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-black mb-4 animate-fade-in-up hover:scale-105 transition-all duration-300">
              Are You Struggling With These Business Challenges?
            </h3>
            <p
              className="text-black font-[family-name:var(--font-open-sans)] max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Real problems that business owners face every day - and how we solve them
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Low Credit Score",
                description:
                  "Getting told 'no' by banks like it's your fault you kept the business alive during a pandemic",
                index: 0,
                color: "red-500",
              },
              {
                icon: DollarSign,
                title: "Cash Flow Crunch",
                description: "Sales are booming, but your account balance still feels like a bad joke",
                index: 1,
                color: "orange-500",
              },
              {
                icon: Clock,
                title: "Denied by the Bank",
                description: "Explaining your business model to a banker who's never owned one",
                index: 2,
                color: "yellow-500",
              },
              {
                icon: TrendingUp,
                title: "Too Fast for the System",
                description: "You're scaling fast but banks move at the speed of paperwork",
                index: 3,
                color: "amber-500",
              },
            ].map(({ icon: Icon, title, description, index, color }) => (
              <Card
                key={index}
                className={`bg-white border-stone-200 hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-4 hover:rotate-2 hover:scale-105 animate-fade-in-up ${hoveredCard === index ? `border-${color} shadow-xl` : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="bg-white">
                  <div
                    className={`w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${hoveredCard === index ? "bg-amber-200 scale-125 rotate-45 animate-wiggle" : ""}`}
                  >
                    <Icon
                      className={`h-6 w-6 text-${color} transition-all duration-500 ${hoveredCard === index ? "scale-125 animate-spin-slow" : ""}`}
                    />
                  </div>
                  <CardTitle className="font-[family-name:var(--font-montserrat)] text-black hover:text-amber-600 transition-colors duration-300 bg-white">
                    {title}
                  </CardTitle>
                  <CardDescription className="font-[family-name:var(--font-open-sans)] text-black hover:text-stone-800 transition-colors duration-300 bg-white">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="pt-16 pb-6 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-stone-800 mb-4">
                Comprehensive Business Funding Solutions
              </h3>
              <div className="space-y-2 text-stone-600 font-[family-name:var(--font-open-sans)] max-w-2xl">
                <p>Explore the right funding solution for your business needs.</p>
                <p>
                  These are the different programs we offer — if you don't qualify now, our commitment is to get YOU in
                  position to qualify.
                </p>
                <p>
                  We will assist you in getting Capital today, aid in Credit and Cost Reducing Strategies, and how to
                  build from where You are Today to Where you Want to Be.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-xs shrink-0">
              {[
                { icon: Shield, label: "Trusted lender network" },
                { icon: Zap, label: "Fast approvals" },
                { icon: Award, label: "Competitive funding options" },
              ].map(({ icon: Icon, label }, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-stone-700 text-xs font-medium px-3 py-1.5"
                >
                  <Icon className="h-4 w-4 text-amber-600" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 px-6 py-4 mb-8">
            <p className="text-sm text-stone-700 font-[family-name:var(--font-open-sans)]">
              <span className="font-bold text-stone-800">Don't qualify yet? We've got a plan.</span> Get funded today,
              then we'll help you build credit and graduate to SBA-level rates.
            </p>
            <a
              href="/credit/credit-guidance"
              className="text-amber-700 font-semibold whitespace-nowrap inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Explore credit guidance <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Landmark,
                title: "SBA Loans",
                description: "Government-backed financing with the lowest rates available.",
                bestFor: "Working capital, Expansion / growth",
                funding: "$5M",
                terms: "5–25 years",
                href: "/funding/sba-loans",
              },
              {
                icon: Briefcase,
                title: "Equipment Financing",
                description: "Up to 100% financing for the equipment you need.",
                bestFor: "Equipment",
                funding: "$1M",
                terms: "2–7 years",
                href: "/funding/equipment-financing",
              },
              {
                icon: CreditCard,
                title: "Merchant Cash Advance",
                description: "Same-day funding tied to your daily sales.",
                bestFor: "Working capital, Inventory",
                funding: "$500K",
                terms: "3–18 months",
                href: "/funding/merchant-cash-advance",
              },
              {
                icon: FileText,
                title: "Business Line of Credit",
                description: "Revolving capital you can draw on whenever you need it.",
                bestFor: "Working capital, Inventory",
                funding: "$500K",
                terms: "Revolving",
                href: "/funding/business-line-of-credit",
              },
              {
                icon: BarChart3,
                title: "Term Loans",
                description: "Lump-sum funding with predictable monthly payments.",
                bestFor: "Working capital, Expansion / growth",
                funding: "$2M",
                terms: "1–7 years",
                href: "/funding/term-loans",
              },
              {
                icon: Building2,
                title: "Real Estate Financing",
                description: "Commercial and residential mortgage solutions.",
                bestFor: "Real estate, Refinance debt",
                funding: "$10M",
                terms: "5–30 years",
                href: "/funding/real-estate-financing",
              },
            ].map(({ icon: Icon, title, description, bestFor, funding, terms, href }, index) => (
              <div
                key={index}
                className="rounded-xl border border-stone-200 bg-white p-4 hover:shadow-md hover:border-amber-200 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
              >
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div className="w-11 h-11 flex-shrink-0 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-stone-800 font-[family-name:var(--font-montserrat)]">{title}</h4>
                    <p className="text-xs text-stone-500 font-[family-name:var(--font-open-sans)]">{description}</p>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-0.5">
                    <Target className="h-3.5 w-3.5" /> Best for
                  </div>
                  <div className="text-sm font-semibold text-stone-800">{bestFor}</div>
                </div>
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-0.5">
                    <DollarSign className="h-3.5 w-3.5" /> Funding up to
                  </div>
                  <div className="text-sm font-semibold text-stone-800">{funding}</div>
                </div>
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-0.5">
                    <Clock className="h-3.5 w-3.5" /> Terms
                  </div>
                  <div className="text-sm font-semibold text-stone-800">{terms}</div>
                </div>
                <div className="lg:col-span-1 lg:text-right">
                  <a
                    href={href || "/contact"}
                    className="text-amber-700 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
                  >
                    Details <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-amber-900 px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-montserrat)] text-white mb-2">
                Ready to get funded?
              </h3>
              <p className="text-amber-100 font-[family-name:var(--font-open-sans)]">
                Start a single application and our team will match you with the right offers.
              </p>
            </div>
            <a
              href="https://application.croccrm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-white font-semibold hover:scale-105 transition-all duration-300 group shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-stone-800 mb-4">
              Secure the Funding. Harvest the Growth.
            </h3>
            <p className="text-stone-500 font-[family-name:var(--font-open-sans)] mb-4">
              Get the money you need today — and we'll help you build toward the best rates tomorrow.{" "}
              <span className="font-semibold text-stone-800">Don't qualify for SBA yet? We'll get you there.</span>
            </p>
            <p className="text-stone-500 font-[family-name:var(--font-open-sans)]">
              We work with business owners and excel at our core mission -{" "}
              <span className="font-semibold text-stone-800">
                "How do we get you the funding you need today while aiding in getting your business the type of capital it
                wants to access long term"
              </span>
              . A true partnership in business success.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 max-w-6xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Get funded now",
                description:
                  "Access working capital fast — even with less-than-perfect credit — through MCAs, lines of credit, and term loans.",
                color: "bg-amber-500",
              },
              {
                icon: TrendingUp,
                title: "Credit Strategies & Cutting cost",
                description: "Our credit guidance is here to help roadmap a way to great scores.",
                color: "bg-amber-600",
              },
              {
                icon: CreditCard,
                title: "Strengthen your business",
                description: "Add credit card processing to grow revenue history and build business credit.",
                color: "bg-amber-700",
              },
              {
                icon: Landmark,
                title: "Graduate to SBA",
                description: "Qualify for the lowest-cost, longest-term SBA financing once you're ready.",
                color: "bg-amber-800",
              },
            ].map(({ icon: Icon, title, description, color }, i, arr) => (
              <Fragment key={i}>
                <div className="lg:flex-1 flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full ${color} text-white font-bold flex items-center justify-center mb-4 shadow`}
                  >
                    {i + 1}
                  </div>
                  <div className="w-full flex-1 rounded-2xl border border-stone-200 bg-white p-6 text-center hover:shadow-md hover:border-amber-200 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-amber-700" />
                    </div>
                    <h4 className="font-bold text-stone-800 mb-2 font-[family-name:var(--font-montserrat)]">{title}</h4>
                    <p className="text-sm text-stone-500 font-[family-name:var(--font-open-sans)] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden lg:flex items-center pt-12">
                    <ArrowRight className="h-5 w-5 text-stone-300" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Analysis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-stone-800 mb-3">
              Credit Analysis
            </h3>
            <p className="text-stone-500 font-[family-name:var(--font-open-sans)]">
              Strengthen your credit profile to unlock better rates and more funding options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FileSearch,
                title: "Credit Report",
                description: "Pull and understand your full credit report so you know exactly where your business stands.",
                href: "/credit/credit-report",
              },
              {
                icon: Wrench,
                title: "Credit Guidance",
                description: "Work with specialists to dispute inaccuracies and rebuild your business and personal credit.",
                href: "/credit/credit-guidance",
              },
              {
                icon: CreditCard,
                title: "Credit Cards",
                description: "Explore business credit card options to manage cash flow, earn rewards, and build credit.",
                href: "/credit/credit-cards",
              },
            ].map(({ icon: Icon, title, description, href }, i) => (
              <div
                key={i}
                className="rounded-2xl border border-stone-200 bg-white p-6 hover:shadow-md hover:border-amber-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-amber-700" />
                </div>
                <h4 className="font-bold text-stone-800 mb-2 font-[family-name:var(--font-montserrat)]">{title}</h4>
                <p className="text-sm text-stone-500 font-[family-name:var(--font-open-sans)] leading-relaxed mb-5">
                  {description}
                </p>
                <a
                  href={href}
                  className="text-amber-700 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Funding Works */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-stone-800 mb-3">
              How Funding Works
            </h3>
            <p className="text-stone-500 font-[family-name:var(--font-open-sans)]">
              A simple, transparent process to help you get funded faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 max-w-6xl mx-auto">
            {[
              {
                icon: ClipboardCheck,
                title: "Pre-Qualify",
                description: "Answer a few questions about your business.",
                color: "bg-amber-500",
              },
              {
                icon: Users,
                title: "Expert Review",
                description: "Our experts review your profile and help you secure the maximum funding.",
                color: "bg-amber-600",
              },
              {
                icon: BarChart3,
                title: "Discuss Roadmap",
                description: "Review rates, terms, and funding timelines.",
                color: "bg-amber-700",
              },
              {
                icon: Landmark,
                title: "Apply & Get Funded",
                description: "Choose the best option and complete your application.",
                color: "bg-amber-800",
              },
            ].map(({ icon: Icon, title, description, color }, i, arr) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {i < arr.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-amber-200" />
                )}
                <div className="relative z-10 mb-5">
                  <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white text-stone-800 text-xs font-bold flex items-center justify-center shadow border border-stone-100">
                    {i + 1}
                  </span>
                </div>
                <h4 className="font-bold text-stone-800 mb-2 font-[family-name:var(--font-montserrat)]">{title}</h4>
                <p className="text-sm text-stone-500 font-[family-name:var(--font-open-sans)] max-w-[14rem] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-stone-800 mb-4">
              Real People, Real Results, Real Transformations
            </h3>
            <p className="text-stone-600 font-[family-name:var(--font-open-sans)]">
              See how our clients have achieved remarkable business breakthroughs and life-changing results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "I was struggling to cover payroll and take on new contracts. Within 48 hours of working with Harvest Lending, we secured $175K in funding. It saved my business and let us scale faster than ever.",
                name: "Sarah Martinez",
                role: "CEO - Engineering / Manufacturing, Wyoming",
                delay: "0s",
              },
              {
                text: "Traditional banks kept turning us down because of our industry. Harvest Lending came through with $60K in less than 2 days. We used it to launch a new product line and double our monthly revenue.",
                name: "David Chen",
                role: "COO - Logistics, Utah",
                delay: "0.2s",
              },
              {
                text: "Cash flow was tight after a slow quarter, and we needed funds fast to keep operations running. Harvest Lending approved us within 24 hours and funded $40K by the next morning.",
                name: "Lisa Thompson",
                role: "CIO - Blend Coffee, New York",
                delay: "0.4s",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1 hover:rotate-1 animate-fade-in-up border-amber-200"
                style={{ animationDelay: testimonial.delay }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-500 text-amber-500 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-stone-600 font-[family-name:var(--font-open-sans)] mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold font-[family-name:var(--font-montserrat)] text-stone-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-amber-600">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gradient-to-br from-amber-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-black mb-4 animate-fade-in-up hover:scale-105 transition-all duration-300">
              Meet Your Business Catalyst
            </h3>
            <p
              className="text-stone-900 font-[family-name:var(--font-open-sans)] max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Hi, I'm Thomas Chillemi - Your Business Transformation Expert
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:rotate-1 border-amber-200 overflow-hidden animate-fade-in-up group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-500 animate-pulse-gentle group-hover:animate-wiggle">
                      <Image
                        src="/images/thomas-chillemi.jpg"
                        alt="Thomas Chillemi - Business Development Executive"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-stone-800 mb-2 hover:text-amber-600 transition-colors duration-300">
                      Thomas Chillemi
                    </h4>
                    <div className="text-amber-600 font-semibold mb-4 flex items-center justify-center lg:justify-start gap-2 hover:scale-105 transition-all duration-300">
                      <TrendingUp className="h-5 w-5 animate-wiggle" />
                      Business Development Executive
                    </div>

                    <p className="text-stone-600 font-[family-name:var(--font-open-sans)] mb-6 leading-relaxed hover:text-stone-700 transition-colors duration-300">
                      With over 15 years of experience in small business funding and financial strategy, I've helped
                      over 1,000 entrepreneurs secure fast, flexible capital to grow, recover, and scale. Our mission is
                      simple: To help you access the funding you deserve without the delays, denials, or red tape.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-amber-50 p-4 rounded-lg text-center hover:bg-amber-100 hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer animate-fade-in-up">
                        <div className="text-2xl font-bold text-amber-600 mb-1 animate-number-count">1,000+</div>
                        <div className="text-sm text-stone-600">Clients Served</div>
                      </div>
                      <div
                        className="bg-amber-50 p-4 rounded-lg text-center hover:bg-amber-100 hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <div className="text-2xl font-bold text-amber-600 mb-1 animate-number-count">$50M+</div>
                        <div className="text-sm text-stone-600">Funded</div>
                      </div>
                      <div
                        className="bg-amber-50 p-4 rounded-lg text-center hover:bg-amber-100 hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <div className="text-2xl font-bold text-amber-600 mb-1 animate-number-count">95%</div>
                        <div className="text-sm text-stone-600">Success Rate</div>
                      </div>
                    </div>

                    <div className="flex justify-center lg:justify-start">
                      <a href="/contact">
                        <Button className="bg-amber-600 hover:bg-amber-500 text-white hover:scale-110 hover:rotate-1 transition-all duration-300 group shadow-lg hover:shadow-xl">
                          <Mail className="mr-2 h-4 w-4 animate-wiggle" />
                          Contact Us
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-300" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900"></div>
          <div
            className="absolute top-10 right-10 w-24 h-24 bg-amber-400/20 rounded-full animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-amber-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 animate-float">
            <CheckCircle className="h-6 w-6 text-amber-300/30" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-float" style={{ animationDelay: "2s" }}>
            <Star className="h-8 w-8 text-amber-400/20" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-bold font-[family-name:var(--font-montserrat)] mb-4 animate-fade-in-up">
            Ready to Break Through Your Business Expansion Barriers?
          </h3>
          <p
            className="text-xl font-[family-name:var(--font-open-sans)] mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Don't let another year pass feeling stuck for capital. Book your free 30-minute strategy call today and
            discover exactly what's holding you back and how to overcome it.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-white font-semibold hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                Start Your Application
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
            <a href="tel:+13478317014">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-900 bg-transparent hover:scale-105 transition-all duration-300 group"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="group-hover:hidden">Speak with an Expert</span>
                <span className="hidden group-hover:inline">+1 347-831-7014</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-complex {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(-30px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-40px) scale(1.1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes number-count {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-complex {
          animation: float-complex 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease infinite;
          background-size: 200% 200%;
        }
        .animate-number-count {
          animation: number-count 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
