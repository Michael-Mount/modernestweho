import StayExperiencePage from "@/app/components/stay/StayExperiencePage";

export const metadata = {
  title: "Nightly Stays in Nashville | The Mondernest at WeHo",
  description:
    "Make a Nashville weekend feel more like home at The Mondernest at WeHo. Apartment-style nightly stays give couples, friends, and families more room to gather, unwind, cook, and experience the city together.",
  keywords: [
    "Nashville nightly stay",
    "Nashville weekend getaway",
    "apartment style hotel Nashville",
    "group stay Nashville",
    "multi bedroom hotel Nashville",
    "Nashville bachelorette stay",
    "Nashville family stay",
    "The Mondernest at WeHo",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nightly Stays | The Mondernest at WeHo",
    description:
      "A few nights in Nashville with more space, more privacy, and more room to be together.",
    type: "website",
  },
};

const nightlyStayContent = {
  hero: {
    eyebrow: "Nightly Stays",
    title: "A Few Nights. A Lot More Room.",
    description:
      "For weekends, celebrations, and spontaneous Nashville escapes, apartment-style living gives your stay more space to unfold.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2400&auto=format&fit=crop",
    imageAlt:
      "Warmly lit lounge prepared for friends gathering during a weekend stay",
  },

  intro: {
    eyebrow: "Stay Your Way",
    title: "More Than A Place To Sleep",
    paragraphs: [
      "A short stay does not have to feel temporary. At The Mondernest at WeHo, apartment-style accommodations give you the freedom to settle in quickly, spread out, and enjoy Nashville on your own rhythm.",
      "Start the morning around the kitchen, regroup in the living room before dinner, or wind down together after a night out. It is the convenience of a hotel stay with the comfort and flexibility of having a little more space to call your own.",
    ],
  },

  advantages: {
    eyebrow: "The Apartment Advantage",
    title: "Built Around The Way You Actually Travel",
    items: [
      {
        number: "01",
        title: "Room To Be Together",
        text: "Shared living areas give couples, friends, and family a natural place to gather without turning a bed into the center of the trip.",
      },
      {
        number: "02",
        title: "Space To Break Away",
        text: "Separate sleeping and living spaces make it easier to recharge, get ready, take a call, or simply enjoy a little privacy when you want it.",
      },
      {
        number: "03",
        title: "A Kitchen On Your Schedule",
        text: "Coffee before everyone wakes up, snacks between plans, or a relaxed meal at home—the kitchen is there when Nashville plans change.",
      },
      {
        number: "04",
        title: "Stay Together, Not Scattered",
        text: "For group trips, multiple-bedroom layouts can make it easier to keep the experience connected instead of dividing everyone across traditional hotel rooms.",
      },
    ],
  },

  editorial: {
    eyebrow: "Weekend Energy, Residential Ease",
    title: "Go Out Together. Come Home Together.",
    paragraphs: [
      "Nashville gives you plenty of reasons to stay out late. Your home base should make the hours in between just as easy.",
      "Whether the trip is a couples' getaway, birthday weekend, family visit, or small celebration with friends, having a living room, kitchen, and room to spread out changes the pace of the stay. Plans can start at home, change at the last minute, and keep going long after dinner reservations end.",
    ],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800&auto=format&fit=crop",
    imageAlt:
      "Bright modern apartment living room with comfortable seating and large windows",
  },

  rhythm: {
    eyebrow: "A Few Days At The Mondernest",
    title: "Make The Weekend Feel Longer",
    items: [
      {
        time: "Arrival",
        title: "Drop The Bags. Settle In.",
        text: "Unpack once, claim your space, stock the fridge, and let everyone get comfortable before deciding what comes next.",
      },
      {
        time: "Day",
        title: "Explore On Your Own Time",
        text: "Head into Nashville together or split up for a while. Your apartment-style stay gives everyone an easy place to reconnect between plans.",
      },
      {
        time: "Night",
        title: "Bring The Night Back With You",
        text: "Come home to a space made for recapping the evening, sharing a late snack, and spending time together without crowding into one room.",
      },
      {
        time: "Morning",
        title: "No Rush To Start Over",
        text: "Coffee, breakfast, showers, and getting ready all happen at a more comfortable pace when the stay has room to breathe.",
      },
    ],
  },

  audience: {
    eyebrow: "Made For The Moment",
    title: "One Stay, Plenty Of Reasons",
    items: [
      {
        title: "Weekend Getaways",
        text: "A comfortable home base for couples or friends who want the city outside and more space when they come back.",
      },
      {
        title: "Friends & Family",
        text: "Stay connected with shared spaces that make group travel feel less like coordinating separate hotel rooms.",
      },
      {
        title: "Small Celebrations",
        text: "Birthdays, wedding weekends, and intimate gatherings can feel more personal when your stay gives the group room to spend time together.",
      },
    ],
    note: "Gatherings and visitor access remain subject to reservation occupancy limits, quiet hours, building policies, and any event-specific requirements.",
  },

  cta: {
    eyebrow: "Find Your Nashville Home Base",
    title: "Stay For The Weekend. Live Like You Belong Here.",
    text: "Explore apartment-style accommodations designed for a few memorable nights in Nashville.",
    primary: {
      label: "View Accommodations",
      href: "/rooms",
    },
    secondary: {
      label: "Book Your Stay",
      href: "/book",
    },
  },
};

export default function Page() {
  return <StayExperiencePage content={nightlyStayContent} />;
}
