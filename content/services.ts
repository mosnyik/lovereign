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
      "Personal care is at the heart of helping someone stay comfortable and confident at home. Our caregivers provide respectful, attentive assistance with the daily tasks that can become difficult over time — always at the client's pace and with their dignity front of mind. This can include help with bathing, dressing, grooming, toileting, and mobility, as well as encouragement and a friendly presence throughout the day.",
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
      "Staying socially connected and on top of daily life matters just as much as physical care. Companion care pairs your loved one with a caregiver who provides genuine company and a helping hand around the home — easing isolation and keeping daily routines running smoothly.",
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
      "Caring for a loved one is rewarding, but it can also be exhausting — and caregivers need care too. Respite care gives family caregivers a dependable break, knowing their loved one is in warm, capable hands. Whether you need a few hours, a weekend, or longer, we step in seamlessly and keep routines consistent.",
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
      "Some situations call for support that's always present. Our 24-hour and live-in care provides continuous, attentive assistance — day and night — so your loved one is never alone when they need help. We coordinate caregivers thoughtfully to ensure consistency, safety, and genuine rest for everyone involved.",
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
      "The days and weeks after a hospital stay are when extra help matters most. Transitional care supports a safe, smooth recovery at home — reducing the stress on families and helping prevent setbacks during a vulnerable time.",
    includes: [
      "Help settling back in and following discharge routines",
      "Personal care and mobility support during recovery",
      "Medication reminders and appointment transportation",
      "Meal preparation and household support",
      "A watchful, caring presence as strength returns",
    ],
    closing: "We help your loved one recover where they're most comfortable — at home.",
    image: "/images/transitional-care.jpg",
    imageAlt: "A caregiver providing attentive support to someone using a wheelchair during recovery",
  },
  {
    slug: "behavioral-support-services",
    category: "Behavioral Support",
    title: "Behavioral Support Services",
    short: "Individualized, Positive Behavior Support for people with IDD, autism, and related conditions.",
    intro:
      "Our Behavioral Support Services are designed to help individuals with Intellectual and Developmental Disabilities (IDD), autism spectrum disorder, and related behavioral or emotional challenges live more confidently and independently. Grounded in Positive Behavior Support (PBS) principles, our Direct Support Professionals work to understand the purpose behind each behavior and replace challenges with meaningful skills — without punishment or shame. We partner closely with Board Certified Behavior Analysts (BCBAs), case managers, and families to carry out individualized Behavior Intervention Plans with consistency across home and community settings.",
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
      "We serve individuals across the lifespan — children, adolescents, and adults — whose needs range from mild behavioral guidance to intensive, structured support. Every plan is reviewed regularly and updated as the individual grows and goals evolve.",
    image: "/images/behavioral-support.jpg",
    imageAlt: "Two women having a calm, supportive conversation together on a couch",
  },
  {
    slug: "daily-living-community-support",
    category: "Behavioral Support",
    title: "Daily Living & Community Support",
    short: "Help building independence in everyday tasks and community participation.",
    intro:
      "Independence grows with the right support. This service helps individuals build and maintain everyday living skills and stay connected to their community — at a pace that's comfortable and encouraging.",
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
