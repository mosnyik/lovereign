export interface Faq {
  question: string;
  answer: string;
  audience: "family" | "referral" | "general";
}

export const faqs: Faq[] = [
  {
    audience: "general",
    question: "How does home care with Lovereign actually work?",
    answer:
      "It starts with a conversation. We listen to what your loved one needs, build a personalized care plan around that, and match them with a caregiver suited to their personality and routine. From there, care happens on the schedule you choose — a few hours a week, daily visits, or around-the-clock support.",
  },
  {
    audience: "family",
    question: "How do we get started?",
    answer:
      "Reach out through our contact page or give us a call to schedule a free consultation. We'll talk through your situation, answer your questions, and outline what a care plan could look like — with no pressure to commit on that first call.",
  },
  {
    audience: "family",
    question: "What does care cost, and is it covered by insurance?",
    answer:
      "Cost depends on the type and amount of care your loved one needs, so we provide a personalized quote after your free consultation. Coverage varies by payer and program — our team can walk you through what's typically applicable and help you understand your options.",
  },
  {
    audience: "general",
    question: "What's the difference between home care and behavioral support?",
    answer:
      "Home care covers everyday support like personal care, companionship, and help around the house. Behavioral support is more specialized — focused on helping individuals build stability, routine, and independence through patient, person-centered assistance. Many clients benefit from a blend of both.",
  },
  {
    audience: "referral",
    question: "How does the referral process work for case managers?",
    answer:
      "Professional referrals are submitted through our secure referral form, kept separate from general email so client information is handled appropriately. Once submitted, our team follows up promptly to coordinate next steps and keep you informed.",
  },
  {
    audience: "family",
    question: "Can care start quickly if we need help right away?",
    answer:
      "Yes — let us know your timeline when you reach out. We do our best to accommodate urgent requests and will always be upfront with you about what's realistic for your situation.",
  },
  {
    audience: "general",
    question: "How are caregivers selected and matched with clients?",
    answer:
      "We consider the specific care needs, personality, and preferences of each client when matching a caregiver, and we stay involved afterward to make sure the relationship is working well for everyone.",
  },
  {
    audience: "general",
    question: "Do you provide care in every county?",
    answer:
      "We serve families across all counties in our service area. Reach out and let us know your location — we'll confirm availability and timing for your area.",
  },
];
