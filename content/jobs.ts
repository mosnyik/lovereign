export interface Job {
  slug: string;
  title: string;
  type: "Full-Time" | "Part-Time" | "Per-Diem";
  county: string;
  summary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export const jobs: Job[] = [
  {
    slug: "caregiver",
    title: "Caregiver",
    type: "Part-Time",
    county: "All New Jersey Counties",
    summary:
      "Help clients with personal care, daily tasks, and companionship in their own homes. Every day you show up matters more than you might think.",
    description:
      "Caregivers at Lovereign are the steady, friendly presence that helps clients feel safe and at ease in their own homes. You'll help with personal care and household tasks, and over time you'll build real relationships with the people you work with. No two days are exactly alike, and patience and reliability matter more than a long resume. We welcome experienced caregivers and people new to the field alike. We'll make sure you have the training and support you need.",
    responsibilities: [
      "Assist clients with personal care tasks including bathing, dressing, grooming, and toileting",
      "Prepare meals and assist with eating and staying nourished",
      "Perform light housekeeping, laundry, and tidying to maintain a clean, safe home",
      "Provide medication reminders as outlined in the care plan",
      "Offer genuine companionship, conversation, and emotional support",
      "Help with grocery shopping, errands, and transportation to appointments",
      "Observe and report any changes in client wellbeing to the supervising nurse or coordinator",
    ],
    qualifications: [
      "High school diploma or GED equivalent",
      "Compassionate, reliable, and patient with a genuine desire to help others",
      "Ability to follow a care plan and work independently in a client's home",
      "Valid New Jersey driver's license and reliable transportation preferred",
      "Ability to pass required background checks including criminal history",
      "Prior caregiving or personal care experience a plus, but not required",
    ],
  },
  {
    slug: "certified-nursing-assistant",
    title: "Certified Nursing Assistant (CNA)",
    type: "Full-Time",
    county: "All New Jersey Counties",
    summary:
      "Deliver hands-on patient care under RN supervision, supporting clients with clinical personal care and monitoring in their homes.",
    description:
      "As a CNA at Lovereign, you'll provide clinical personal care to clients in their homes under the supervision of a Registered Nurse. You'll be the consistent presence that keeps clients comfortable, monitors their condition day to day, and flags changes to the nursing team. This is a good fit for CNAs who want to build ongoing relationships with patients rather than moving across a facility floor.",
    responsibilities: [
      "Assist clients with bathing, dressing, grooming, oral hygiene, and toileting",
      "Take and record vital signs (temperature, blood pressure, pulse, respiration) as directed",
      "Provide skin care and assist with pressure injury prevention and positioning",
      "Support safe mobility, transfers, and ambulation",
      "Assist with meal preparation and feeding",
      "Observe clients for changes in physical or mental condition and report promptly to the supervising RN",
      "Complete accurate and timely care documentation",
    ],
    qualifications: [
      "Active, valid Certified Nursing Assistant (CNA) certification in the State of New Jersey",
      "Current CPR/First Aid certification",
      "Strong observation skills and the ability to follow clinical directions precisely",
      "Compassionate, patient, and professional demeanor",
      "Valid New Jersey driver's license and reliable transportation",
      "Prior home health or long-term care experience preferred",
    ],
  },
  {
    slug: "registered-nurse",
    title: "Registered Nurse (RN)",
    type: "Per-Diem",
    county: "All New Jersey Counties",
    summary:
      "Conduct in-home nursing assessments, oversee care plans, and serve as a clinical resource for clients, families, and our care staff across New Jersey.",
    description:
      "As an RN at Lovereign, you'll be central to the clinical quality of our home health program. You'll conduct assessments, develop and supervise care plans, and be a resource families and staff can rely on. This role works well for nurses who prefer the autonomy of community-based care and like building ongoing relationships with patients rather than rotating through a facility floor.",
    responsibilities: [
      "Perform comprehensive in-home nursing assessments and reassessments",
      "Develop, implement, and update individualized care plans in coordination with physicians and care teams",
      "Supervise and support Home Health Aides (HHAs) in the delivery of care",
      "Monitor clients for changes in condition and communicate promptly with the appropriate team members",
      "Educate clients and families on care plans, medication management, and health maintenance",
      "Complete accurate and timely clinical documentation in compliance with state and agency standards",
      "Ensure care delivery aligns with New Jersey home health regulations and agency policies",
    ],
    qualifications: [
      "Active, unrestricted Registered Nurse (RN) license in the State of New Jersey",
      "Minimum one year of clinical nursing experience; home health experience preferred",
      "Current CPR/AED certification",
      "Strong interpersonal, assessment, and organizational skills",
      "Valid New Jersey driver's license and reliable transportation",
      "Proficiency with electronic health records (EHR) or care management platforms",
    ],
  },
  {
    slug: "home-health-aide",
    title: "Home Health Aide (HHA)",
    type: "Part-Time",
    county: "All New Jersey Counties",
    summary:
      "Provide personal care, companionship, and daily living support to clients in their own homes.",
    description:
      "Home Health Aides at Lovereign are at the center of what we do. You'll work one-on-one with clients in their homes, helping with personal care, household tasks, and daily routines. We want people who are reliable and patient and actually care about the people they work with. In return, we invest in your training and make sure you have the schedule you need.",
    responsibilities: [
      "Assist clients with personal care including bathing, dressing, grooming, and oral hygiene",
      "Provide mobility assistance, safe transfers, and fall-risk prevention",
      "Prepare nutritious meals and assist with feeding as needed",
      "Perform light housekeeping and laundry to maintain a safe, clean environment",
      "Provide medication reminders according to the care plan",
      "Offer companionship, emotional support, and meaningful engagement",
      "Transport clients to medical appointments and community activities",
      "Document care provided and report any changes in client condition to the supervising RN",
    ],
    qualifications: [
      "Current, valid Home Health Aide (HHA) certification in New Jersey",
      "Current CPR/First Aid certification",
      "Compassionate, dependable, and patient demeanor",
      "Ability to work independently and follow written and verbal instructions",
      "Valid New Jersey driver's license preferred",
      "Prior home care or caregiving experience a plus, but not required",
    ],
  },
  {
    slug: "direct-support-professional",
    title: "Direct Support Professional (DSP)",
    type: "Full-Time",
    county: "All New Jersey Counties",
    summary:
      "Support individuals with Intellectual and Developmental Disabilities in building everyday skills, gaining independence, and staying connected to their communities.",
    description:
      "As a Direct Support Professional at Lovereign, you'll work alongside individuals with Intellectual and Developmental Disabilities (IDD), autism spectrum disorder, and related conditions, helping them live as independently as possible. You'll help clients build daily living skills, get around their community, and work toward their personal goals, while following positive behavior support strategies with guidance from clinical staff.",
    responsibilities: [
      "Implement individualized support plans and Behavior Intervention Plans (BIPs) as directed",
      "Assist clients with daily living skills including meal preparation, hygiene, household management, and money management",
      "Accompany and support clients in community activities, appointments, and social engagements",
      "Apply Positive Behavior Support (PBS) strategies and de-escalation techniques during challenging moments",
      "Collect data, document observations, and communicate progress to supervisors and clinical teams",
      "Facilitate skill-building activities targeting independence, communication, and social participation",
      "Coordinate with families, care managers, BCBAs, and other team members",
      "Maintain a safe, respectful, and supportive environment at all times",
    ],
    qualifications: [
      "High school diploma or GED equivalent required",
      "Experience supporting individuals with IDD, autism, or behavioral challenges strongly preferred",
      "Current CPR/First Aid certification (or willingness to obtain upon hire)",
      "Ability to remain calm, patient, and professional in a range of situations",
      "Valid New Jersey driver's license and reliable transportation required",
      "Completion of NJ DSP training requirements or willingness to complete upon hire",
      "Ability to pass required background checks including criminal history",
    ],
  },
  {
    slug: "licensed-practical-nurse",
    title: "Licensed Practical Nurse (LPN)",
    type: "Per-Diem",
    county: "All New Jersey Counties",
    summary:
      "Provide skilled nursing care to home health clients under RN and physician supervision, including medication administration, wound care, and patient monitoring.",
    description:
      "LPNs at Lovereign deliver focused skilled nursing care to clients in their homes, working within a care team led by RNs and physicians. You'll handle clinical tasks, keep an eye on how clients are doing, teach clients and families what they need to know, and keep thorough documentation. It's a good fit for an LPN who wants real one-on-one time with patients and prefers the community health setting over a facility.",
    responsibilities: [
      "Administer medications, injections, and IV therapy as prescribed and permitted under NJ LPN scope of practice",
      "Perform wound care, dressing changes, catheter care, and other clinical procedures as directed",
      "Monitor and document vital signs, pain levels, and client response to treatment",
      "Observe clients for changes in condition and communicate promptly to the supervising RN or physician",
      "Educate clients and families on medication schedules, wound care, and health maintenance",
      "Assist with the development and updating of individualized care plans under RN supervision",
      "Complete timely and accurate clinical documentation in compliance with agency and state standards",
    ],
    qualifications: [
      "Active, unrestricted Licensed Practical Nurse (LPN) license in the State of New Jersey",
      "Current CPR/AED certification",
      "Minimum one year of clinical nursing experience; home health or community health experience preferred",
      "Thorough knowledge of NJ LPN scope of practice",
      "Strong clinical observation, communication, and documentation skills",
      "Valid New Jersey driver's license and reliable transportation",
    ],
  },
  {
    slug: "administrative-roles",
    title: "Administrative Roles",
    type: "Full-Time",
    county: "All New Jersey Counties",
    summary:
      "Keep things running behind the scenes through scheduling, client intake, staff coordination, and general office work.",
    description:
      "Our administrative team is what keeps the operation together. From coordinating caregiver schedules and handling client intake to managing records and day-to-day communications, this work directly affects how well we serve our clients. If you're organized, good with people, and want a role where your work has a real impact, we'd like to hear from you. We have a range of admin roles available, from intake coordination and scheduling to billing support and office management.",
    responsibilities: [
      "Coordinate caregiver scheduling to ensure consistent, reliable coverage for all clients",
      "Support the client intake and onboarding process, including gathering information and communicating with families",
      "Answer phones and respond to inquiries from clients, families, and referral partners with professionalism and warmth",
      "Maintain accurate client and employee records in compliance with agency and state requirements",
      "Assist with billing, authorizations, and documentation for insurance or Medicaid claims",
      "Communicate updates and schedule changes to caregivers, nurses, and supervisors",
      "Provide general office support including filing, data entry, and supply management",
    ],
    qualifications: [
      "High school diploma or GED required; associate's or bachelor's degree in business, healthcare administration, or related field preferred",
      "Prior experience in healthcare, home health, or social services administration strongly preferred",
      "Proficiency with Microsoft Office (Word, Excel, Outlook) and comfort learning scheduling or EHR platforms",
      "Excellent organizational, communication, and multitasking skills",
      "Empathetic, professional phone manner and strong customer service orientation",
      "Ability to handle sensitive and confidential information with discretion",
    ],
  },
];

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
