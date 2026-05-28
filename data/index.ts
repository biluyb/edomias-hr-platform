// Shared mock data — simulates ERP job feed

export const JOBS = [
  {
    id: "j01",
    title: "Cleaning Supervisor",
    company: "East Africa Bottling S.C.",
    department: "Cleaning",
    location: "Addis Ababa",
    type: "Full-time",
    salary: "ETB 12,000–15,000",
    posted: "2 hours ago",
    deadline: "2026-06-30",
    icon: "🧹",
    featured: true,
    description:
      "Oversee a team of cleaning staff, manage daily schedules, maintain quality standards and supply inventory at EABC facilities across Addis Ababa.",
    responsibilities: [
      "Manage and supervise a team of 8–12 cleaning staff",
      "Develop and maintain cleaning schedules",
      "Ensure quality standards are consistently met",
      "Report to facility management daily",
      "Handle supply requisitions and inventory",
    ],
    requirements: [
      "Minimum 2 years supervisory experience",
      "Strong organisational skills",
      "Ability to manage diverse teams",
      "Basic computer literacy",
    ],
    benefits: ["Health insurance", "Transport allowance", "Overtime pay", "Annual leave"],
  },
  {
    id: "j02",
    title: "Security Officer",
    company: "Huawei Technologies Ethiopia",
    department: "Security",
    location: "Addis Ababa",
    type: "Full-time",
    salary: "ETB 10,000–13,000",
    posted: "5 hours ago",
    deadline: "2026-06-25",
    icon: "🛡️",
    featured: true,
    description:
      "Provide professional security coverage at Huawei offices. Control access points, maintain incident logs, and ensure the safety of staff and assets.",
    responsibilities: [
      "Monitor and control access to premises",
      "Conduct regular security patrols",
      "Maintain detailed incident reports",
      "Respond to emergencies and alarms",
    ],
    requirements: [
      "Prior security experience preferred",
      "Physical fitness required",
      "Good communication skills",
      "Willingness to work shifts",
    ],
    benefits: ["Uniform provided", "Shift allowance", "Annual leave", "Health coverage"],
  },
  {
    id: "j03",
    title: "Skilled Maintenance Technician",
    company: "Lufthansa Airlines Ethiopia",
    department: "Skilled Labor",
    location: "Addis Ababa",
    type: "Contract",
    salary: "ETB 18,000–22,000",
    posted: "2 days ago",
    deadline: "2026-07-10",
    icon: "✈️",
    featured: true,
    description:
      "Perform maintenance duties at the Lufthansa Africa facility. Requires technical training or TVET certification in electrical or mechanical fields.",
    responsibilities: [
      "Perform routine and preventive maintenance",
      "Diagnose and repair equipment faults",
      "Maintain maintenance records and logs",
      "Coordinate with operations team",
    ],
    requirements: [
      "TVET certificate or higher in relevant field",
      "3+ years maintenance experience",
      "Ability to read technical manuals",
    ],
    benefits: ["Competitive salary", "Technical training", "Transport allowance"],
  },
  {
    id: "j04",
    title: "Landscaping Specialist",
    company: "Ethiopian Civil Aviation Authority",
    department: "Landscaping",
    location: "Addis Ababa",
    type: "Full-time",
    salary: "ETB 8,000–10,000",
    posted: "1 day ago",
    deadline: "2026-06-20",
    icon: "🌿",
    featured: false,
    description:
      "Maintain garden areas and landscaping at ECAA headquarters. Includes plant care, irrigation management, and grounds upkeep.",
    responsibilities: [
      "Regular plant care and watering",
      "Lawn mowing and hedge trimming",
      "Irrigation system maintenance",
    ],
    requirements: ["Landscaping experience preferred", "Physical stamina", "Reliability"],
    benefits: ["Stable employment", "Annual leave", "Transport allowance"],
  },
  {
    id: "j05",
    title: "HR Coordinator",
    company: "Clinton Health Access Initiative",
    department: "HR & Recruitment",
    location: "Addis Ababa",
    type: "Full-time",
    salary: "ETB 20,000–25,000",
    posted: "2 days ago",
    deadline: "2026-07-05",
    icon: "🤝",
    featured: false,
    description:
      "Support HR operations including recruitment coordination, staff record management, and onboarding processes for CHAI Ethiopia.",
    responsibilities: [
      "Coordinate recruitment processes end-to-end",
      "Maintain staff records and HR database",
      "Support onboarding of new staff",
      "Prepare HR reports and analytics",
    ],
    requirements: [
      "Bachelor's degree in HR or related field",
      "2+ years HR coordination experience",
      "Strong MS Office skills",
    ],
    benefits: ["Competitive salary", "Health insurance", "Professional development"],
  },
  {
    id: "j06",
    title: "Warehouse Porter",
    company: "DHL WorldWide Express",
    department: "General Labor",
    location: "Addis Ababa",
    type: "Full-time",
    salary: "ETB 7,000–9,000",
    posted: "1 day ago",
    deadline: "2026-06-18",
    icon: "📦",
    featured: false,
    description:
      "Loading, unloading, and warehouse logistics support at DHL Addis Ababa hub. Physical and reliable with attention to detail.",
    responsibilities: [
      "Loading and unloading shipments",
      "Sorting and organising parcels",
      "Maintaining clean and safe warehouse",
    ],
    requirements: ["Physical fitness", "Reliability and punctuality", "Team player"],
    benefits: ["Daily allowance", "Overtime pay", "Uniform provided"],
  },
  {
    id: "j07",
    title: "Night Security Guard",
    company: "Norwegian Refugee Council",
    department: "Security",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "ETB 14,000–18,000",
    posted: "5 days ago",
    deadline: "2026-06-22",
    icon: "🔒",
    featured: false,
    description:
      "Armed security coverage at NRC compound locations across Ethiopia. Prior armed security experience required.",
    responsibilities: [
      "Secure premises during night hours",
      "Conduct regular perimeter checks",
      "Respond to security incidents",
    ],
    requirements: [
      "Armed guard licence required",
      "Prior security experience (2+ years)",
      "Willingness to work night shifts",
    ],
    benefits: ["Night shift premium", "Insurance coverage", "Annual leave"],
  },
  {
    id: "j08",
    title: "Production Line Worker",
    company: "Dashen Brewery Factory",
    department: "General Labor",
    location: "Gondar",
    type: "Full-time",
    salary: "ETB 8,500–11,000",
    posted: "4 days ago",
    deadline: "2026-06-28",
    icon: "🍺",
    featured: false,
    description:
      "Production support at Dashen Brewery Gondar facility. Involves monitoring production lines, quality checks, and general support duties.",
    responsibilities: [
      "Support production line operations",
      "Perform basic quality checks",
      "Maintain workstation cleanliness",
    ],
    requirements: ["Grade 12 or above", "Physical fitness", "Willingness to work shifts"],
    benefits: ["Shift allowance", "Transport", "Annual leave"],
  },
];

export const CLIENTS = {
  Breweries: [
    "Awash Winery Share Company",
    "Heineken Brewery S.C.",
    "Harar Beer Share Company",
    "Dashen Brewery Factory",
    "Coca-Cola",
  ],
  "FMCG Manufacturers": [
    "East Africa Bottling S.C.",
    "Etete Milk Processing PLC",
    "Roto PLC",
    "Aquasafe Bottling PLC",
    "Asku PLC (Aqua Addis)",
  ],
  "Travel & Logistics": [
    "Lufthansa Airlines",
    "DHL WorldWide Express",
    "BMI British Airlines",
    "NICON Freight Forwarding",
  ],
  "Travel & Hospitality": [
    "Addis Ababa Hilton Hotel",
    "Atnafu Hotel",
    "National Tour Organization",
    "Gize Travel PLC",
  ],
  "Banks & Insurance": [
    "Buna International Bank",
    "Cooperative Bank of Oromia",
    "Nyala Insurance S.C.",
    "Addis International Bank",
  ],
  "NGOs & International Orgs": [
    "UNICEF",
    "UNHCR",
    "UN World Food Programme",
    "CARE Ethiopia",
    "Catholic Relief Services",
    "Clinton Health Access Initiative",
  ],
  "Building & Construction": [
    "Afro-Tsion Construction",
    "Civil Aviation Authority",
    "Ministry of Urban Development",
  ],
  "Other Organizations": [
    "Huawei Technologies Ethiopia",
    "Transsion Manufacturing",
    "International Livestock Research Institute",
    "British International School",
  ],
};

export const SERVICES = [
  {
    id: "cleaning",
    icon: "🧹",
    title: "Cleaning & Janitorial",
    description:
      "We outsource professional cleaning staff to keep your premises spotless and operationally efficient with minimal disruption to daily work.",
    color: "green",
    clients: ["Huawei Technologies", "East Africa Bottling", "UNHCR", "Coca-Cola"],
  },
  {
    id: "landscaping",
    icon: "🌿",
    title: "Landscaping Services",
    description:
      "Professional landscaping teams to maintain a pleasant, environmentally conducive setting through expert plant care and grounds management.",
    color: "green",
    clients: ["UNHCR", "Ethiopian Civil Aviation", "Selam Children Village"],
  },
  {
    id: "security",
    icon: "🛡️",
    title: "Security Services",
    description:
      "Uniformed, badge-wearing security officers who secure every corner of your premises — available 24/7 for residential and corporate settings.",
    color: "orange",
    clients: ["Huawei Technologies", "Lufthansa Airlines", "Hope for Justice],"],
  },
  {
    id: "skilled",
    icon: "👷",
    title: "Skilled Labor Provision",
    description:
      "Specialized and trained professionals placed in exactly the right roles — from technicians to engineers across diverse sectors.",
    color: "orange",
    clients: ["Lufthansa Airlines", "Awash Winery", "ILRI", "Huawei"],
  },
  {
    id: "general",
    icon: "🏗️",
    title: "General Labor",
    description:
      "Dependable general labor staff for warehousing, production lines, logistics, and daily operational support across Ethiopia.",
    color: "green",
    clients: ["DHL Express", "Dashen Brewery", "East Africa Bottling"],
  },
  {
    id: "recruitment",
    icon: "🤝",
    title: "Recruitment Services",
    description:
      "End-to-end recruitment: thorough assessment, shortlisting, and a free replacement guarantee in the first 3 months.",
    color: "orange",
    clients: ["Juniper Glass Industries", "Winner Ethiopia", "Transsion Manufacturing"],
  },
];

export const STATS = [
  { label: "Years of Excellence", value: 20, suffix: "+" },
  { label: "Clients Served", value: 500, suffix: "+" },
  { label: "Core Services", value: 6, suffix: "" },
  { label: "Cities Covered", value: 30, suffix: "+" },
];

export const WHY_POINTS = [
  {
    icon: "⚡",
    title: "24-Hour Response SLA",
    desc: "All complaints and issues resolved within 24 hours — fast, accountable, professional.",
  },
  {
    icon: "🔄",
    title: "Free Replacement Guarantee",
    desc: "Not satisfied in the first 3 months? We replace the candidate at zero additional cost.",
  },
  {
    icon: "⚖️",
    title: "Full Legal & Labor Compliance",
    desc: "We handle all labor relations, disputes, and Ethiopian labor law compliance on your behalf.",
  },
  {
    icon: "🎯",
    title: "Right Person, Right Role",
    desc: "Thorough assessment and testing ensures every placement perfectly matches your needs.",
  },
];
