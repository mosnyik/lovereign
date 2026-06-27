export type ServiceCategory = "Home Care" | "Behavioral Support";

export interface Service {
  slug: string;
  category: ServiceCategory;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  closing: string;
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    slug: "personal-care",
    category: "Home Care",
    title: "Personal Care",
    short: "Respectful, hands-on help with bathing, dressing, grooming, and daily hygiene.",
    intro:
      "Personal care is at the heart of helping someone stay comfortable and confident at home. Our caregivers assist with the daily tasks that can become difficult over time. We work at their pace, and we never rush. That includes help with bathing, dressing, grooming, toileting, and mobility, plus a friendly presence throughout the day.",
    includes: [
      "Bathing, dressing, grooming, and oral hygiene",
      "Mobility assistance, transfers, and fall-risk awareness",
      "Toileting and incontinence care",
      "Medication reminders",
      "Help with eating and staying nourished",
    ],
    closing: "We tailor every personal-care routine to the individual, and we adjust it as needs change.",
    image: "/images/personal-care.jpg",
    imageAlt: "An elderly couple's hands joined together, representing the dignity and trust of personal care",
  },
  {
    slug: "companion-care",
    category: "Home Care",
    title: "Companion Care",
    short: "Friendly company plus help with errands, light housekeeping, and everyday routines.",
    intro:
      "Staying connected and on top of daily life matters just as much as physical care. Companion care pairs your loved one with a caregiver who provides real company and a helping hand around the home, keeping routines on track and the day from feeling too long.",
    includes: [
      "Companionship and conversation",
      "Light housekeeping and laundry",
      "Meal preparation",
      "Grocery shopping and errands",
      "Transportation to appointments and outings",
      "Reminders and help staying organized",
    ],
    closing: "Companion care helps your loved one feel supported, engaged, and at ease in their own home.",
    image: "/images/companion-care.jpg",
    imageAlt: "A caregiver serving tea to an elderly woman in a warm, comfortable home setting",
  },
  {
    slug: "respite-care",
    category: "Home Care",
    title: "Respite Care",
    short: "Reliable temporary care so family caregivers can rest and recharge.",
    intro:
      "Caring for a loved one is rewarding, but it can wear you down. Caregivers need a break too. Respite care gives family caregivers time to rest and recharge, knowing their loved one is in good hands. Whether you need a few hours, a full weekend, or longer, we step in and keep things consistent.",
    includes: [
      "Short-term or scheduled relief care",
      "Coverage for vacations, travel, or family events",
      "Continuation of the client's existing routine and care plan",
      "Companionship and personal care during your absence",
    ],
    closing: "Respite care protects both your loved one's wellbeing and your own.",
    image: "/images/respite-care.jpg",
    imageAlt: "A woman relaxing peacefully on a sofa with a cup of coffee, taking a well-earned break",
  },
  {
    slug: "24-hour-live-in-care",
    category: "Home Care",
    title: "24-Hour & Live-In Care",
    short: "Around-the-clock support for those who need help at any hour.",
    intro:
      "Some situations call for someone to always be there. Our 24-hour and live-in care means your loved one is never alone when they need help. We coordinate caregivers carefully so there's always a familiar face, a consistent routine, and real rest for everyone in the household.",
    includes: [
      "Overnight and around-the-clock supervision",
      "Assistance at any hour with personal care and mobility",
      "Medication reminders and routine support",
      "Safety monitoring and fall prevention",
      "Peace of mind for families living far away",
    ],
    closing: "24-hour care brings constant reassurance that someone caring is always there.",
    image: "/images/live-in-care.jpg",
    imageAlt: "A healthcare professional attentively checking on a resting patient",
  },
  {
    slug: "post-hospital-transitional-care",
    category: "Home Care",
    title: "Post-Hospital / Transitional Care",
    short: "Extra support during recovery and the return home after a hospital stay.",
    intro:
      "The days and weeks after a hospital stay are when extra help matters most. Transitional care supports a smooth recovery at home, takes some of the weight off your family, and helps prevent setbacks during a time when things are still fragile.",
    includes: [
      "Help settling back in and following discharge routines",
      "Personal care and mobility support during recovery",
      "Medication reminders and appointment transportation",
      "Meal preparation and household support",
      "A watchful, caring presence as strength returns",
    ],
    closing: "We help your loved one recover at home, where they're most comfortable.",
    image: "/images/transitional-care.jpg",
    imageAlt: "A caregiver providing attentive support to someone using a wheelchair during recovery",
  },
  {
    slug: "behavioral-support-services",
    category: "Behavioral Support",
    title: "Behavioral Support Services",
    short: "Individualized, Positive Behavior Support for people with IDD, autism, and related conditions.",
    intro:
      "Our Behavioral Support Services are built for individuals with Intellectual and Developmental Disabilities (IDD), autism spectrum disorder, and related behavioral or emotional challenges. Our Direct Support Professionals work from Positive Behavior Support (PBS) principles, taking time to understand what's behind each behavior and helping build skills that actually stick, without punishment or shame. We work closely with Board Certified Behavior Analysts (BCBAs), case managers, and families to carry out Behavior Intervention Plans consistently across home and community settings.",
    includes: [
      "Functional Behavior Assessment (FBA) collaboration and Behavior Intervention Plan (BIP) implementation",
      "Positive Behavior Support (PBS) strategies tailored to each individual",
      "Crisis prevention, de-escalation, and safety planning",
      "Social skills, communication, and emotional regulation coaching",
      "Self-advocacy and decision-making skill development",
      "Progress documentation and data collection for care teams",
      "Coordination with BCBAs, therapists, care managers, and clinical staff",
      "Family and caregiver training and ongoing guidance",
    ],
    closing:
      "We work with children, adolescents, and adults whose needs range from mild behavioral guidance to intensive, structured support. Every plan gets reviewed regularly and updated as the person grows and their goals shift.",
    image: "/images/behavioral-support.jpg",
    imageAlt: "Two women having a calm, supportive conversation together on a couch",
  },
  {
    slug: "daily-living-community-support",
    category: "Behavioral Support",
    title: "Daily Living & Community Support",
    short: "Help building independence in everyday tasks and community participation.",
    intro:
      "Independence grows with the right kind of support. This service helps people build and hold onto everyday living skills while staying connected to their community, at whatever pace works for them.",
    includes: [
      "Support with daily living skills and routines",
      "Encouragement with personal organization and tasks",
      "Accompaniment to community activities and appointments",
      "Social engagement and confidence building",
      "Coordination with families and support networks",
    ],
    closing: "We focus on helping each person live as fully and independently as possible.",
    image: "/images/community-support.jpg",
    imageAlt: "A small group of senior women enjoying a leisurely walk together outdoors",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
