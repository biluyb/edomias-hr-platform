/**
 * EDOMIAS ENTERPRISE - RECRUITMENT INTELLIGENCE DATABASE
 */

export interface Job {
  id: string;
  category_id: string;
  title: string;
  title_am?: string;
  company: string;
  location: string;
  type: "Full-time" | "Contract" | "Casual" | "Professional";
  department: string;
  description: string;
  description_am?: string;
  responsibilities: string[];
  responsibilities_am?: string[];
  requirements: string[];
  requirements_am?: string[];
  benefits: string[];
  benefits_am?: string[];
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
      title_am: "ከፍተኛ የሰው ኃይል ኦዲተር",
      company: "Edomias International Plc",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      department: "Legal & Corporate",
      description: "Leading multi-site labor law compliance audits for manufacturing partners in industrial parks. Ensuring strict adherence to ILO standards and Ethiopian labor codes.",
      description_am: "በኢንዱስትሪ ፓርኮች ውስጥ ለሚገኙ አምራች ድርጅቶች የሰራተኛ ህግ ተገዢነት ኦዲት ማካሄድ እና የአለም አቀፍ የሰራተኞች ድርጅት (ILO) መስፈርቶችን መከታተል።",
      responsibilities: [
        "Conduct comprehensive labor law audits across multiple manufacturing sites.",
        "Prepare detailed compliance reports for international stakeholders.",
        "Advise clients on risk mitigation strategies regarding labor relations."
      ],
      responsibilities_am: [
        "በተለያዩ የማኑፋክቸሪንግ ቦታዎች ላይ አጠቃላይ የሰራተኛ ህግ ኦዲት ማካሄድ።",
        "ለአለም አቀፍ ባለድርሻ አካላት ዝርዝር ሪፖርት ማዘጋጀት።",
        "ለደንበኞች በሰራተኞች ግንኙነት ዙሪያ ምክር መስጠት።"
      ],
      requirements: ["Masters in HRM or Law", "10+ years executive experience", "Deep knowledge of Ethiopian Labor Proclamation"],
      requirements_am: ["በሰው ኃይል ወይም በህግ የማስተርስ ዲግሪ", "10 ዓመት እና ከዚያ በላይ የስራ ልምድ", "ስለ ኢትዮጵያ የሰራተኛ አዋጅ ጥልቅ እውቀት"],
      benefits: ["International Health Shield", "Performance Dividends", "On-site Transportation"],
      benefits_am: ["አለም አቀፍ የጤና መድን", "የስራ አፈፃፀም ክፍያ", "የትራንስፖርት አገልግሎት"],
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
      title_am: "የክልል የደህንነት አስተባባሪ",
      company: "Strategic NGO Partner",
      location: "Dire Dawa / Harar",
      type: "Professional",
      department: "Field Operations",
      description: "Coordinating rapid response teams and security deployment for international development projects.",
      description_am: "ለአለም አቀፍ የልማት ፕሮጀክቶች የደህንነት ስምሪት እና የአደጋ ጊዜ ምላሽ ቡድኖችን ማስተባበር።",
      responsibilities: [
        "Manage security logistics for field workers.",
        "Develop risk assessment frameworks for remote operations.",
        "Liaise with local law enforcement and community leaders."
      ],
      responsibilities_am: [
        "በመስክ ለሚሰሩ ሰራተኞች የደህንነት ስምሪትን ማስተዳደር።",
        "ለራቅ ያሉ አካባቢዎች የአደጋ ግምገማ ማዕቀፍ ማዘጋጀት።",
        "ከአካባቢው የህግ አስከባሪዎች ጋር ግንኙነት መፍጠር።"
      ],
      requirements: ["15 years military/police background", "UN DSS certification", "Afaan Oromoo & Amharic fluency"],
      requirements_am: ["15 ዓመት በወታደራዊ ወይም በፖሊስ የሰለጠነ", "የተባበሩት መንግስታት የደህንነት ሰርተፍኬት", "አማርኛ እና ኦሮሚኛ ቋንቋ ችሎታ"],
      benefits: ["Hazard Pay Allowance", "Full Life Insurance", "Communication Toolkit"],
      benefits_am: ["የአደጋ ክፍያ ጥቅማጥቅም", "የህይወት መድን", "የመገናኛ መሳሪያዎች"],
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
      title_am: "የኢንዱስትሪ ፋሲሊቲ ስራ አስኪያጅ",
      company: "Eastern Industrial Park",
      location: "Dukem, Oromia",
      type: "Full-time",
      department: "Facility Management",
      description: "Managing a 50-person maintenance and cleaning crew for specialized manufacturing facilities.",
      description_am: "ለልዩ ማኑፋክቸሪንግ ፋሲሊቲዎች የጥገና እና የፅዳት ሰራተኞችን ማስተባበር።",
      responsibilities: [
        "Oversee technical maintenance schedules.",
        "Manage labor deployment for shift operations.",
        "Ensure ISO environmental standards are met."
      ],
      responsibilities_am: [
        "የቴክኒክ ጥገና መርሃ ግብሮችን መከታተል።",
        "የሰራተኞች ስምሪት በፈረቃ ማስተዳደር።",
        "የ ISO አካባቢ ጥበቃ መስፈርቶች መከበራቸውን ማረጋገጥ።"
      ],
      requirements: ["Degree in Engineering or Management", "Previous industrial facility experience", "Strong leadership of large teams"],
      requirements_am: ["በምህንድስና ወይም በማኔጅመንት ዲግሪ", "በኢንዱስትሪ ፋሲሊቲ የስራ ልምድ", "ትላልቅ ቡድኖችን የመምራት ብቃት"],
      benefits: ["Housing Allowance", "Annual Bonus", "Professional Development Access"],
      benefits_am: ["የቤት አበል", "ዓመታዊ ቦነስ", "የሙያ ማሻሻያ ስልጠናዎች"],
      deadline: "2026-06-20",
      posted_at: "2026-05-28",
      status: "Active",
      salary_range: "ETB 25k - 35k",
      is_featured: false,
      is_urgent: true
    },
    {
      id: "JOB-4401",
      category_id: "CAT-001",
      title: "Finance & Accounting Manager",
      title_am: "የፋይናንስ እና አካውንቲንግ ስራ አስኪያጅ",
      company: "Edomias International Plc",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      department: "Finance",
      description: "Lead the finance department, oversee budgeting, forecasting, and financial reporting for multi-sector operations.",
      description_am: "የፋይናንስ መምሪያውን መምራት፣ በጀት ማዘጋጀት እና የፋይናንስ ሪፖርቶችን ማዘጋጀት።",
      responsibilities: [
        "Prepare monthly financial statements and annual reports.",
        "Manage cash flow, budgets, and financial forecasting.",
        "Ensure compliance with Ethiopian tax and financial regulations."
      ],
      responsibilities_am: [
        "ወርሃዊ እና ዓመታዊ የፋይናንስ ሪፖርቶችን ማዘጋጀት።",
        "የበጀት እና የካሽ ፍሎው አስተዳደርን መከታተል።",
        "የኢትዮጵያ ታክስ እና ፋይናንስ ህጎችን መከበራቸውን ማረጋገጥ።"
      ],
      requirements: ["BA/MA in Accounting or Finance", "CPA certification preferred", "7+ years in senior accounting role"],
      requirements_am: ["በአካውንቲንግ ወይም ፋይናንስ ዲግሪ", "የ CPA ሰርተፍኬት ያለው", "7 ዓመት እና ከዚያ በላይ የስራ ልምድ"],
      benefits: ["Competitive Salary", "Health Insurance", "Annual Performance Bonus"],
      benefits_am: ["ተወዳዳሪ ደመወዝ", "የጤና መድን", "ዓመታዊ ቦነስ"],
      deadline: "2026-07-01",
      posted_at: "2026-06-01",
      status: "Active",
      salary_range: "ETB 40k - 55k",
      is_featured: true,
      is_urgent: false
    },
    {
      id: "JOB-4502",
      category_id: "CAT-004",
      title: "Heavy Equipment Operator",
      title_am: "የከባድ መኪና እና መሳሪያዎች ኦፕሬተር",
      company: "Addis Construction PLC",
      location: "Addis Ababa, Ethiopia",
      type: "Contract",
      department: "Operations",
      description: "Operate heavy construction equipment including excavators, bulldozers, and cranes for large-scale infrastructure projects.",
      description_am: "እንደ ኤክስካቫተር፣ ቡልዶዘር እና ክሬን ያሉ የከባድ ግንባታ መሳሪያዎችን ማንቀሳቀስ።",
      responsibilities: [
        "Operate heavy machinery safely and efficiently on construction sites.",
        "Perform daily equipment inspections and report maintenance needs.",
        "Coordinate with site supervisors on project timelines."
      ],
      responsibilities_am: [
        "መሳሪያዎቹን በግንባታ ቦታዎች ላይ በጥንቃቄ ማንቀሳቀስ።",
        "የዕለታዊ ምርመራ ማካሄድ እና የጥገና ፍላጎቶችን ማሳወቅ።",
        "ከግንባታ ተቆጣጣሪዎች ጋር በጊዜ ሰሌዳው ላይ መስራት።"
      ],
      requirements: ["Level III/IV in Heavy Machinery Operation", "Valid equipment operation license", "3+ years field experience"],
      requirements_am: ["በከባድ መሳሪያዎች ኦፕሬሽን ደረጃ 3 ወይም 4", "ህጋዊ የመንዳት ፈቃድ", "3 ዓመት እና ከዚያ በላይ የስራ ልምድ"],
      benefits: ["Daily Allowance", "Safety Equipment Provided", "Transport Shuttle"],
      benefits_am: ["የዕለታዊ አበል", "የደህንነት መሳሪያዎች አቅርቦት", "የሰራተኞች ትራንስፖርት"],
      deadline: "2026-06-25",
      posted_at: "2026-06-01",
      status: "Active",
      salary_range: "ETB 12k - 18k",
      is_featured: false,
      is_urgent: true
    },
    {
      id: "JOB-4603",
      category_id: "CAT-005",
      title: "Project Coordinator – WASH Program",
      title_am: "የፕሮጀክት አስተባባሪ - WASH ፕሮግራም",
      company: "International NGO Partner",
      location: "Hawassa, SNNPR",
      type: "Contract",
      department: "Program Management",
      description: "Coordinate water, sanitation, and hygiene programs in rural communities, working with international donors and local government.",
      description_am: "በገጠር አካባቢዎች የውሃ፣ የፅዳት እና የንፅህና ፕሮግራሞችን ማስተባበር።",
      responsibilities: [
        "Plan and execute WASH program activities in target communities.",
        "Manage budgets and produce donor-required progress reports.",
        "Coordinate with local health offices and community leaders."
      ],
      responsibilities_am: [
        "የ WASH ፕሮግራም ተግባራትን ማቀድ እና መተግበር።",
        "በጀት ማስተዳደር እና የለጋሾችን ሪፖርት ማዘጋጀት።",
        "ከአካባቢ ጤና ቢሮዎች እና መሪዎች ጋር መስራት።"
      ],
      requirements: ["Degree in Public Health or Development Studies", "3+ years NGO project coordination", "Fluency in English and local languages"],
      requirements_am: ["በሕዝብ ጤና ወይም ልማት ጥናት ዲግሪ", "3 ዓመት በ NGO የፕሮጀክት ስራ ልምድ", "እንግሊዝኛ እና የአካባቢው ቋንቋ ችሎታ"],
      benefits: ["Field Allowance", "Health Coverage", "Professional Training"],
      benefits_am: ["የመስክ አበል", "የጤና መድን", "የሙያ ስልጠና"],
      deadline: "2026-06-30",
      posted_at: "2026-06-02",
      status: "Active",
      salary_range: "USD 1,200 - 1,800/mo",
      is_featured: true,
      is_urgent: false
    },
    {
      id: "JOB-4704",
      category_id: "CAT-002",
      title: "Access Control Officer",
      title_am: "የመግቢያ ቁጥጥር ኦፊሰር",
      company: "Edomias Security Division",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      department: "Security Operations",
      description: "Manage physical access control systems at premium corporate and diplomatic compound facilities.",
      description_am: "በኮርፖሬት እና ዲፕሎማቲክ ተቋማት የመግቢያ እና መውጫ ቁጥጥር ስራዎችን ማከናወን።",
      responsibilities: [
        "Monitor and control entry/exit points using electronic systems.",
        "Conduct visitor screening and badge management.",
        "Coordinate emergency response and evacuation procedures."
      ],
      responsibilities_am: [
        "በኤሌክትሮኒክስ መሳሪያዎች መግቢያዎችን መቆጣጠር።",
        "የጎብኝዎችን ምርመራ እና መታወቂያ አስተዳደር መስራት።",
        "የአደጋ ጊዜ ምላሽ እና የመልቀቂያ ሂደቶችን ማስተባበር።"
      ],
      requirements: ["High school diploma minimum", "Security guard license", "2+ years in access control or guarding"],
      requirements_am: ["የሁለተኛ ደረጃ ትምህርት ያጠናቀቀ", "የጥበቃ ስልጠና ሰርተፍኬት", "2 ዓመት እና ከዚያ በላይ የስራ ልምድ"],
      benefits: ["Uniform Provided", "Overtime Pay", "Meal Allowance"],
      benefits_am: ["ዩኒፎርም አቅርቦት", "የትርፍ ሰዓት ክፍያ", "የምግብ አበል"],
      deadline: "2026-06-18",
      posted_at: "2026-06-01",
      status: "Active",
      salary_range: "ETB 8k - 12k",
      is_featured: false,
      is_urgent: false
    },
    {
      id: "JOB-4805",
      category_id: "CAT-003",
      title: "Commercial Cleaning Supervisor",
      title_am: "የፅዳት ስራዎች ተቆጣጣሪ",
      company: "Edomias Facility Services",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      department: "Facility Services",
      description: "Supervise teams of 30+ cleaning professionals across corporate offices and commercial buildings.",
      description_am: "በተለያዩ ተቋማት ውስጥ ከ30 በላይ የፅዳት ሰራተኞችን በበላይነት መቆጣጠር።",
      responsibilities: [
        "Schedule and assign daily cleaning tasks across multiple sites.",
        "Inspect work quality and ensure client satisfaction standards.",
        "Train new team members on cleaning protocols and safety."
      ],
      responsibilities_am: [
        "የዕለታዊ የፅዳት ስራዎችን መመደብ።",
        "የስራውን ጥራት መመርመር እና ደንበኞች መርካታቸውን ማረጋገጥ።",
        "አዳዲስ ሰራተኞችን ማሰልጠን።"
      ],
      requirements: ["Diploma in Management or related field", "3+ years supervisory experience", "Strong organizational and people skills"],
      requirements_am: ["በማኔጅመንት ዲፕሎማ", "3 ዓመት በተቆጣጣሪነት ስራ ልምድ", "ሰዎችን የማስተባበር ብቃት"],
      benefits: ["Monthly Bonus", "Transport Allowance", "Uniform & Equipment"],
      benefits_am: ["ወርሃዊ ቦነስ", "የትራንስፖርት አበል", "የስራ መሳሪያዎች አቅርቦት"],
      deadline: "2026-07-05",
      posted_at: "2026-06-02",
      status: "Active",
      salary_range: "ETB 10k - 15k",
      is_featured: false,
      is_urgent: false
    },
    {
      id: "JOB-4906",
      category_id: "CAT-001",
      title: "IT Systems Administrator",
      title_am: "የአይቲ ሲስተም አድሚኒስትሬተር",
      company: "Edomias International Plc",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      department: "Information Technology",
      description: "Manage the organization's IT infrastructure, including servers, networks, and cloud systems, ensuring 99.9% uptime.",
      description_am: "የድርጅቱን አይቲ መሰረተ ልማት፣ ሰርቨሮች እና ኔትወርኮች ማስተዳደር።",
      responsibilities: [
        "Administer and maintain Windows/Linux servers and network infrastructure.",
        "Manage cloud resources (AWS/Azure) and backup systems.",
        "Provide Level 2/3 technical support to staff."
      ],
      responsibilities_am: [
        "የዊንዶውስ እና ሊኑክስ ሰርቨሮችን ማስተዳደር።",
        "የክላውድ እና የባክአፕ ሲስተሞችን መከታተል።",
        "ለሰራተኞች ከፍተኛ የቴክኒክ ድጋፍ መስጠት።"
      ],
      requirements: ["BSc in Computer Science or IT", "AWS/Azure certification preferred", "4+ years system administration experience"],
      requirements_am: ["በኮምፒውተር ሳይንስ ወይም አይቲ ዲግሪ", "የክላውድ ሰርተፍኬት ያለው", "4 ዓመት የስራ ልምድ"],
      benefits: ["Tech Allowance", "Remote Work Days", "Training Budget"],
      benefits_am: ["የአይቲ አበል", "የርቀት ስራ እድል", "ለስልጠና የሚመደብ በጀት"],
      deadline: "2026-07-10",
      posted_at: "2026-06-02",
      status: "Active",
      salary_range: "ETB 30k - 45k",
      is_featured: true,
      is_urgent: false
    },
    {
      id: "JOB-5007",
      category_id: "CAT-004",
      title: "Warehouse Operations Assistant",
      title_am: "የመጋዘን ስራዎች ረዳት",
      company: "Horizon Logistics PLC",
      location: "Dukem, Oromia",
      type: "Full-time",
      department: "Supply Chain",
      description: "Assist in warehouse operations including receiving, storing, and dispatching goods for manufacturing supply chains.",
      description_am: "በመጋዘን ውስጥ እቃዎችን የመቀበል፣ የማከማቸት እና የማከፋፈል ስራዎችን ማገዝ።",
      responsibilities: [
        "Receive incoming shipments and verify against purchase orders.",
        "Organize storage areas and maintain inventory accuracy.",
        "Prepare outgoing shipments and coordinate with logistics team."
      ],
      responsibilities_am: [
        "የሚገቡ እቃዎችን ቆጥሮ መቀበል እና ከትዕዛዝ ጋር ማመሳከር።",
        "እቃዎችን በአግባቡ ማከማቸት።",
        "የሚወጡ እቃዎችን ማዘጋጀት።"
      ],
      requirements: ["TVET Level III in Logistics or Management", "1+ year warehouse experience", "Basic computer skills"],
      requirements_am: ["በሎጅስቲክስ ደረጃ 3 ሰርተፍኬት", "1 ዓመት የስራ ልምድ", "መሰረታዊ የኮምፒውተር እውቀት"],
      benefits: ["Lunch Provided", "Shift Allowance", "Safety Gear"],
      benefits_am: ["ምሳ ይቀርባል", "የፈረቃ አበል", "የደህንነት ልብሶች"],
      deadline: "2026-06-28",
      posted_at: "2026-06-01",
      status: "Active",
      salary_range: "ETB 7k - 10k",
      is_featured: false,
      is_urgent: true
    },
    {
      id: "JOB-5108",
      category_id: "CAT-005",
      title: "Monitoring & Evaluation Specialist",
      title_am: "የክትትል እና ግምገማ ባለሙያ",
      company: "UN Agency Partner",
      location: "Addis Ababa, Ethiopia",
      type: "Professional",
      department: "Strategy & Impact",
      description: "Design and implement M&E frameworks for multi-country humanitarian and development programs.",
      description_am: "ለሰብዓዊ እርዳታ እና ልማት ፕሮግራሞች የክትትል እና ግምገማ ማዕቀፍ ማዘጋጀት።",
      responsibilities: [
        "Develop logical frameworks and theory of change for programs.",
        "Design data collection tools and oversee field data collection.",
        "Produce quarterly impact reports and donor presentations."
      ],
      responsibilities_am: [
        "ለፕሮግራሞች የክትትል ማዕቀፍ ማዘጋጀት።",
        "የመረጃ መሰብሰቢያ መሳሪያዎችን ማዘጋጀት።",
        "የሩብ ዓመት የተፅዕኖ ሪፖርቶችን ማዘጋጀት።"
      ],
      requirements: ["Masters in Development, Statistics, or related field", "5+ years M&E experience with INGOs", "Advanced data analysis skills (SPSS/Stata)"],
      requirements_am: ["በልማት ጥናት ወይም ስታቲስቲክስ የማስተርስ ዲግሪ", "5 ዓመት በ NGO የክትትል ስራ ልምድ", "የመረጃ ትንተና ክህሎት"],
      benefits: ["UN Scale Salary", "International Health Insurance", "R&R Leave"],
      benefits_am: ["በተባበሩት መንግስታት ስኬል ደመወዝ", "አለም አቀፍ ጤና መድን", "ዕረፍት"],
      deadline: "2026-07-15",
      posted_at: "2026-06-02",
      status: "Active",
      salary_range: "USD 2,500 - 3,800/mo",
      is_featured: true,
      is_urgent: false
    },
    {
      id: "JOB-5209",
      category_id: "CAT-003",
      title: "Landscaping & Grounds Keeper",
      title_am: "የአትክልት እና አካባቢ ጥበቃ ባለሙያ",
      company: "Edomias Facility Services",
      location: "Addis Ababa, Ethiopia",
      type: "Casual",
      department: "Environment Services",
      description: "Maintain outdoor areas, gardens, and green spaces at commercial compounds and residential estates.",
      description_am: "የተቋማትን የአትክልት ቦታዎች እና አረንጓዴ ስፍራዎችን መንከባከብ።",
      responsibilities: [
        "Mow lawns, prune trees, and maintain flower beds.",
        "Operate landscaping equipment safely.",
        "Coordinate with facility managers on seasonal planting schedules."
      ],
      responsibilities_am: [
        "ሳር ማጨድ እና ዛፎችን መከንከብ።",
        "የአትክልት መሳሪያዎችን መጠቀም።",
        "የተክሎችን ወቅታዊ ስርጭት መከታተል።"
      ],
      requirements: ["Experience in gardening or landscaping", "Physical fitness for outdoor work", "Basic knowledge of plant care"],
      requirements_am: ["በአትክልት እንክብካቤ ልምድ ያለው", "አካላዊ ብቃት", "ስለ ተክሎች መሰረታዊ እውቀት"],
      benefits: ["Daily Wage", "Meals Provided", "Equipment Supplied"],
      benefits_am: ["የዕለታዊ ክፍያ", "ምግብ ይቀርባል", "የስራ መሳሪያዎች አቅርቦት"],
      deadline: "2026-06-22",
      posted_at: "2026-06-01",
      status: "Active",
      salary_range: "ETB 200 - 350/day",
      is_featured: false,
      is_urgent: false
    },
    {
      id: "JOB-5310",
      category_id: "CAT-001",
      title: "Recruitment & Talent Acquisition Lead",
      title_am: "የቅጥር እና የችሎታ ግኝት መሪ",
      company: "Edomias International Plc",
      location: "Addis Ababa, Ethiopia",
      type: "Full-time",
      department: "Human Resources",
      description: "Lead end-to-end recruitment processes for corporate clients, managing a pipeline of 200+ candidates monthly.",
      description_am: "ለተለያዩ ድርጅቶች የቅጥር ሂደቶችን በበላይነት መምራት እና ብቁ እጩዎችን መመልመል።",
      responsibilities: [
        "Design and execute recruitment strategies for diverse sectors.",
        "Screen, interview, and shortlist qualified candidates.",
        "Build and maintain a talent pool database for future opportunities."
      ],
      responsibilities_am: [
        "የቅጥር ስልቶችን መንደፍ እና መተግበር።",
        "እጩዎችን መለየት እና ቃለ መጠይቅ ማድረግ።",
        "የእጩዎችን ዳታቤዝ ማደራጀት።"
      ],
      requirements: ["BA/MA in HRM or Business Management", "5+ years in recruitment or staffing agency", "Strong interviewing and assessment skills"],
      requirements_am: ["በሰው ኃይል ማኔጅመንት ዲግሪ", "5 ዓመት በቅጥር ኤጀንሲ የስራ ልምድ", "የቃለ መጠይቅ እና የምልመላ ክህሎት"],
      benefits: ["Performance Commission", "Health Insurance", "Career Growth Path"],
      benefits_am: ["ተጨማሪ ክፍያ (ኮሚሽን)", "የጤና መድን", "የስራ እድገት"],
      deadline: "2026-07-08",
      posted_at: "2026-06-02",
      status: "Active",
      salary_range: "ETB 35k - 50k",
      is_featured: true,
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
