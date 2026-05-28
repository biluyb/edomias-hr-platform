/**
 * EDOMIAS ENTERPRISE - EXPANDED RELATIONAL DATABASE
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
  requirements: string[];
  posted_at: string;
  status: "Active" | "Closed";
  salary_range?: string;
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
      requirements: ["Masters in HRM or Law", "10+ years executive experience", "Deep knowledge of Ethiopian Labor Proclamation"],
      posted_at: "2026-05-20",
      status: "Active",
      salary_range: "ETB 45k - 65k"
    },
    {
      id: "JOB-8822",
      category_id: "CAT-002",
      title: "Regional Security Coordinator",
      company: "Strategic Partner (UN Field Support)",
      location: "Dire Dawa / Harar",
      type: "Professional",
      department: "Field Operations",
      description: "Coordinating rapid response teams and security deployment for international development projects. Liaison with local authorities and risk assessment.",
      requirements: ["15 years military/police background", "UN DSS certification", "Afaan Oromoo & Amharic fluency"],
      posted_at: "2026-05-25",
      status: "Active",
      salary_range: "Highly Competitive"
    },
    {
      id: "JOB-9910",
      category_id: "CAT-005",
      title: "Grant Compliance Manager",
      company: "International Relief Org (IRO)",
      location: "Addis Ababa / Remote Hybrid",
      type: "Contract",
      department: "Finance & Grants",
      description: "Overseeing financial compliance for $50M+ USAID and EU funded programs. Coordinating with internal auditors and international headquarters.",
      requirements: ["Certified Public Accountant (CPA)", "Experience with US Government grant cycles", "English proficiency (C2)"],
      posted_at: "2026-05-27",
      status: "Active",
      salary_range: "USD 3.5k - 5k"
    },
    {
      id: "JOB-3345",
      category_id: "CAT-003",
      title: "Industrial Facility Manager",
      company: "Eastern Industrial Park (Partner)",
      location: "Dukem, Oromia",
      type: "Full-time",
      department: "Facility Management",
      description: "Managing a 50-person maintenance and cleaning crew for specialized manufacturing facilities. Focus on zero-downtime operations and safety compliance.",
      requirements: ["Degree in Engineering or Management", "Previous industrial facility experience", "Strong leadership of large teams"],
      posted_at: "2026-05-28",
      status: "Active",
      salary_range: "ETB 25k - 35k"
    },
    {
      id: "JOB-1102",
      category_id: "CAT-004",
      title: "Certified Electrician (Level IV)",
      company: "Textile Manufacturing Partner",
      location: "Bole Lemi Industrial Park",
      type: "Full-time",
      department: "Engineering",
      description: "Maintaining high-voltage electrical systems and industrial machinery. Performing preventive maintenance and emergency troubleshooting.",
      requirements: ["COC Level IV Certification", "4+ years industrial experience", "Ability to work on shifts"],
      posted_at: "2026-05-28",
      status: "Active",
      salary_range: "ETB 15k - 20k"
    }
  ],

  applications: [
    {
      id: "APP-001",
      job_id: "JOB-7701",
      applicant_id: "USR-001",
      status: "Under Review",
      applied_at: "2026-05-22"
    },
    {
      id: "APP-002",
      job_id: "JOB-8822",
      applicant_id: "USR-001",
      status: "Interview Scheduled",
      applied_at: "2026-05-26"
    }
  ]
};
