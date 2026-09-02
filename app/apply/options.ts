// Field options replicated from apply.harvestlending.com (step 1) and the
// step 2 screenshot. Spelling is kept verbatim from the source form.

export const CAPITAL_OPTIONS = [
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000 - $500,000",
  "$500,000 - $1,000,000",
  "$1,000,000+",
]

export const TIME_IN_BUSINESS_OPTIONS = [
  "Less than 6 months",
  "6 - 12 months",
  "1 - 2 years",
  "2 - 5 years",
  "5 + years",
]

export const BANK_ACCOUNT_OPTIONS = ["Yes", "No"]

export const INDUSTRY_OPTIONS = [
  "Accounting / CPA",
  "Adult Entertainment / Novelty Store",
  "Auto Detail Services",
  "Auto Mechanic",
  "Auto Sales",
  "Autobody Repair And Service",
  "Bail Bonds",
  "Boat Sales",
  "Cannabis",
  "Carwash",
  "Casino",
  "Church / Places Of Worship",
  "Concert / Event Planning",
  "Construction",
  "Credit Repair Services",
  "Daycare / Schools Or Academys",
  "Electrical Services",
  "Equipment / Auto / Tool Rental Services",
  "Farming",
  "Finance Company",
  "Firearms / Ammunition",
  "Forestry / Logging",
  "Funeral Home / Services",
  "Gas Station",
  "General Contractor",
  "Grocery / Hardware Store",
  "Gym / Fitness Services",
  "Hotels",
  "HVAC Services",
  "Insurance Agency / Services",
  "Janitorial / Cleaning Services",
  "Jewerly Retail Or Wholesale",
  "Landscaping / Lawncare / Grading Services",
  "Lawyers",
  "Manufacturing / Industrial Plants / Recycling",
  "Marketing / Consulting / It / Communication / Data Services",
  "Medical / Veterinarian / Specialty Services",
  "Moving / Furniture Delivery Services",
  "Nail Salons / Hair Salons / Tanning Salons / Beauty Supply / Spa",
  "Non-Profit",
  "Nursing / Senior Care / Rehab Facility / Hospice",
  "Pawn Shop",
  "Payday Loans / Check Cashing / Debt Collection Agencies",
  "Payroll Services",
  "Pharmacy / Drug Store",
  "Plumbing",
  "Real Estate / Real Estate Agency",
  "Restaurant / Bar / Catering Services",
  "Retail Goods / Online Ecommerce",
  "Roofing",
  "RV Sales",
  "Security Firms / Services",
  "Shipping / Distribution Services",
  "Solar",
  "Staffing And Recruiting Agencies",
  "Tabacco / Vape Shop",
  "Tax Services",
  "Towing Service",
  "Trucking / Transportation",
  "Wholesale / Distribution",
  "Other",
]

// The step 2 dropdown values are not exposed by the source page (it renders
// them client side behind the Unbounce POST), so these use standard ranges.
export const MONTHLY_SALES_OPTIONS = [
  "Less than $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
]

export const CREDIT_SCORE_OPTIONS = [
  "Below 500",
  "500 - 549",
  "550 - 599",
  "600 - 649",
  "650 - 699",
  "700 - 749",
  "750+",
]

export const STATE_OPTIONS = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
]

// Mirrors the source page's disqualification rules, which redirect these
// answers to /nq/ on submit.
export function isDisqualified(timeInBusiness: string, bankAccount: string) {
  return (
    timeInBusiness === "Less than 6 months" ||
    timeInBusiness === "6 - 12 months" ||
    bankAccount === "No"
  )
}
