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
      "Provide compassionate in-home assistance with personal care, daily living activities, and companionship — making a meaningful difference in a client's life every day.",
    description:
      "Caregivers at Lovereign Care Services are the friendly, dependable presence that helps clients feel safe, comfortable, and cared for in their own homes. You'll assist with a range of personal care and household tasks while building genuine relationships with the people you serve. No two days are exactly alike, and your warmth, patience, and reliability are what matter most. We welcome both experienced caregivers and compassionate individuals new to the field — we'll provide the support and training you need to thrive.",
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
      "Deliver direct, hands-on patient care under RN supervision, supporting clients with clinical personal care, monitoring, and daily living needs in the home setting.",
    description:
      "As a Certified Nursing Assistant at Lovereign Care Services, you'll provide essential clinical personal care to clients in their homes under the supervision of a Registered Nurse. You'll be the front-line presence that keeps clients comfortable, monitors their day-to-day condition, and communicates changes to the nursing team. This role is ideal for a CNA who wants to build strong, ongoing relationships with clients rather than rotating across a facility floor.",
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
      "Provide skilled nursing assessments, care plan oversight, and clinical guidance to clients receiving home health services across New Jersey.",
    description:
      "As a Registered Nurse at Lovereign Care Services, you will play a central role in ensuring the clinical quality and safety of our home health program. You will conduct initial and ongoing assessments, develop and supervise individualized care plans, and serve as a trusted resource for clients, families, and our direct care staff. This role is ideal for an RN who thrives in a community setting and values autonomy alongside collaborative, multidisciplinary teamwork.",
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
      "Provide personal care, companionship, and daily living support to clients in their homes — making a real difference in someone's life every shift.",
    description:
      "Home Health Aides at Lovereign Care Services are the heart of what we do. You will work one-on-one with clients in their own homes, assisting with personal care, household tasks, and daily routines while providing a friendly, reassuring presence. We value caregivers who are reliable, patient, and genuinely passionate about the people they serve — and we invest in your growth through ongoing training and consistent scheduling.",
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
      "Support individuals with Intellectual and Developmental Disabilities in building independence, developing life skills, and participating fully in their communities.",
    description:
      "As a Direct Support Professional at Lovereign Care Services, you will provide person-centered support to individuals with Intellectual and Developmental Disabilities (IDD), autism spectrum disorder, and related conditions — empowering them to live as independently and fully as possible. Working within an individualized support plan, you will help clients develop daily living skills, navigate their community, and reach personal goals, while implementing positive behavior support strategies under the guidance of clinical staff.",
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
      "Provide skilled nursing care to home health clients under RN and physician supervision, including medication administration, wound care, and ongoing patient monitoring.",
    description:
      "Licensed Practical Nurses at Lovereign Care Services deliver focused, skilled nursing care to clients in their homes, working within a collaborative care team led by Registered Nurses and physicians. You'll carry out clinical tasks, monitor client health, educate clients and families, and maintain thorough documentation — all while building the kind of trusting, ongoing relationship that makes home-based care so effective. This is a great opportunity for an LPN looking to work in a community health setting with meaningful one-on-one client contact.",
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
      "Support the daily operations of Lovereign Care Services through scheduling, client intake, staff coordination, and general office administration.",
    description:
      "Our administrative team keeps everything running smoothly behind the scenes — from coordinating caregiver schedules and supporting client intake to managing records and handling day-to-day communications. If you're organized, people-focused, and thrive in a fast-paced environment where your work directly supports a compassionate mission, we'd love to hear from you. We have a range of administrative positions available, from intake coordinators and scheduling specialists to billing support and office managers.",
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
