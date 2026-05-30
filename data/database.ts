/**
 * EDOMIAS ENTERPRISE - RECRUITMENT INTELLIGENCE DATABASE
 */

export interface Job {
  id: string;
  category_id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Contract" | "Casual" | "Professional";
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  deadline: string;
  posted_at: string;
  status: "Active" | "Closed";
  salary_range?: string;
  is_featured?: boolean;
  is_urgent?: boolean;
}

export interface Application {
  id: string;
  job_id: string;
  candidate_id: string;
  status: "New" | "Under Review" | "Shortlisted" | "Interview Scheduled" | "Hired" | "Rejected";
  applied_at: string;
  timeline: { status: string; date: string }[];
}

export const DB = {
  categories: [
    { id: "CAT-001", name: "Executive & Professional", slug: "executive" },
    { id: "CAT-002", name: "Security & Protection", slug: "security" },
    { id: "CAT-003", name: "Facility & Environment", slug: "facility" },
    { id: "CAT-004", name: "Skilled & Semi-Skilled Labor", slug: "labor" },
    { id: "CAT-005", name: "International NGO Ops", slug: "ngo" }
  ],

  jobs: [
    {
      id: "JOB-7701",
      category_id: "CAT-001",
      title: "Senior HR Compliance Auditor",
      company: "Edomias International Plc",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      department: "Legal & Corporate",
      description: "Leading multi-site labor law compliance audits for manufacturing partners in industrial parks. Ensuring strict adherence to ILO standards and Ethiopian labor codes.",
      responsibilities: [
        "Conduct comprehensive labor law audits across multiple manufacturing sites.",
        "Prepare detailed compliance reports for international stakeholders.",
        "Advise clients on risk mitigation strategies regarding labor relations."
      ],
      requirements: ["Masters in HRM or Law", "10+ years executive experience", "Deep knowledge of Ethiopian Labor Proclamation"],
      benefits: ["International Health Shield", "Performance Dividends", "On-site Transportation"],
      deadline: "2026-06-15",
      posted_at: "2026-05-20",
      status: "Active",
      salary_range: "ETB 45k - 65k",
      is_featured: true,
      is_urgent: false
    },
    {
      id: "JOB-8822",
      category_id: "CAT-002",
      title: "Regional Security Coordinator",
      company: "Strategic NGO Partner",
      location: "Dire Dawa / Harar",
      type: "Professional",
      department: "Field Operations",
      description: "Coordinating rapid response teams and security deployment for international development projects.",
      responsibilities: [
        "Manage security logistics for field workers.",
        "Develop risk assessment frameworks for remote operations.",
        "Liaise with local law enforcement and community leaders."
      ],
      requirements: ["15 years military/police background", "UN DSS certification", "Afaan Oromoo & Amharic fluency"],
      benefits: ["Hazard Pay Allowance", "Full Life Insurance", "Communication Toolkit"],
      deadline: "2026-06-10",
      posted_at: "2026-05-25",
      status: "Active",
      salary_range: "Highly Competitive",
      is_featured: true,
      is_urgent: true
    },
    {
      id: "JOB-3345",
      category_id: "CAT-003",
      title: "Industrial Facility Manager",
      company: "Eastern Industrial Park",
      location: "Dukem, Oromia",
      type: "Full-time",
      department: "Facility Management",
      description: "Managing a 50-person maintenance and cleaning crew for specialized manufacturing facilities.",
      responsibilities: [
        "Oversee technical maintenance schedules.",
        "Manage labor deployment for shift operations.",
        "Ensure ISO environmental standards are met."
      ],
      requirements: ["Degree in Engineering or Management", "Previous industrial facility experience", "Strong leadership of large teams"],
      benefits: ["Housing Allowance", "Annual Bonus", "Professional Development Access"],
      deadline: "2026-06-20",
      posted_at: "2026-05-28",
      status: "Active",
      salary_range: "ETB 25k - 35k",
      is_featured: false,
      is_urgent: true
    }
  ],

  applications: [
    {
      id: "APP-00451",
      job_id: "JOB-7701",
      candidate_id: "USR-BILI",
      status: "Under Review",
      applied_at: "2026-05-28",
      timeline: [
        { status: "Application Received", date: "2026-05-28" },
        { status: "CV Review", date: "2026-05-29" }
      ]
    },
    {
      id: "APP-00892",
      job_id: "JOB-8822",
      candidate_id: "USR-BILI",
      status: "Interview Scheduled",
      applied_at: "2026-05-26",
      timeline: [
        { status: "Application Received", date: "2026-05-26" },
        { status: "CV Review", date: "2026-05-27" },
        { status: "Interview Scheduled", date: "2026-05-30" }
      ]
    }
  ]
};
