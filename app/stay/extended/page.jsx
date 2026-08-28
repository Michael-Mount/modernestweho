import StayExperiencePage from "@/app/components/stay/StayExperiencePage";
export const metadata = {
  title: "Extended Stays in Nashville | The Mondernest at WeHo",
  description:
    "Stay longer in Nashville with the space and flexibility of apartment-style hospitality at The Mondernest at WeHo. Designed for extended getaways, long events, staycations, and trips that deserve more room to settle in.",
  keywords: [
    "extended stay Nashville",
    "long stay hotel Nashville",
    "apartment style hotel Nashville",
    "Nashville staycation",
    "extended hotel stay Nashville",
    "long event stay Nashville",
    "multi bedroom hotel Nashville",
    "The Mondernest at WeHo",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Extended Stays | The Mondernest at WeHo",
    description:
      "For trips that last longer than a typical hotel stay, settle into apartment-style space designed to make Nashville feel a little more like home.",
    type: "website",
  },
};

const extendedStayContent = {
  hero: {
    eyebrow: "Extended Stays",
    title: "Stay Longer. Settle In.",
    description:
      "For long weekends that become full weeks, extended events, staycations, and trips with no reason to rush home.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2400&auto=format&fit=crop",
    imageAlt:
      "Warm modern apartment-style living room designed for a comfortable extended stay",
  },

  intro: {
    eyebrow: "A Longer Kind Of Stay",
    title: "Give The Trip Room To Become Routine",
    paragraphs: [
      "Once a trip stretches beyond a few nights, the little things start to matter more. A place to gather, space to spread out, a kitchen for the nights you stay in, and enough separation for everyone to find their own rhythm.",
      "The Mondernest at WeHo brings the flexibility of apartment-style living into a hospitality experience, giving extended Nashville stays a more comfortable home base without making the trip feel overly formal or temporary.",
    ],
  },

  advantages: {
    eyebrow: "Why Apartment-Style Works",
    title: "Designed For More Than Living Out Of A Suitcase",
    items: [
      {
        number: "01",
        title: "Settle Into A Rhythm",
        text: "Longer stays feel easier when your days can develop a routine. Make coffee, slow down between plans, or spend an evening in without feeling confined to a traditional hotel room.",
      },
      {
        number: "02",
        title: "Live Beyond The Bedroom",
        text: "Separate living and sleeping areas give the stay more flexibility, whether you are getting work done, hosting a quiet night in, or simply giving everyone room to unwind.",
      },
      {
        number: "03",
        title: "Make Meals Part Of The Stay",
        text: "A kitchen gives you another option between Nashville reservations—from an easy breakfast to groceries for a relaxed night at home.",
      },
      {
        number: "04",
        title: "Keep The Group Connected",
        text: "For longer group trips, multi-bedroom layouts can help everyone stay close while still preserving the privacy and breathing room that becomes more important over time.",
      },
    ],
  },

  editorial: {
    eyebrow: "Nashville, At Your Own Pace",
    title: "When You Have Time, The City Feels Different.",
    paragraphs: [
      "An extended stay changes the relationship you have with a destination. There is less pressure to fit everything into one weekend and more freedom to discover the places, routines, and neighborhoods that make Nashville feel familiar.",
      "Spend a day out, take the next one slowly, invite the group back together, or make no plans at all. Apartment-style space gives longer trips the flexibility to be energetic when you want them to be and comfortable when you do not.",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop",
    imageAlt:
      "Comfortable contemporary apartment interior suited to a longer Nashville stay",
  },

  rhythm: {
    eyebrow: "Settle Into The Stay",
    title: "More Time Means More Ways To Make It Yours",
    items: [
      {
        time: "Arrive",
        title: "Unpack A Little More",
        text: "Settle into the space instead of living around a suitcase. Get comfortable, organize the week, and make the accommodation feel like your own home base.",
      },
      {
        time: "Reset",
        title: "Build In A Day With No Agenda",
        text: "Longer stays leave room for a quiet morning, an afternoon at home, or a night off between plans without feeling like you are wasting the trip.",
      },
      {
        time: "Gather",
        title: "Keep Everyone In The Same Orbit",
        text: "For extended celebrations, family visits, and group trips, shared living space gives everyone an easy place to reconnect without coordinating a lobby meetup.",
      },
      {
        time: "Repeat",
        title: "Find Your Nashville Routine",
        text: "Discover a favorite coffee stop, revisit a neighborhood, cook a meal, or simply enjoy having enough time for Nashville to feel less like a checklist.",
      },
    ],
  },

  audience: {
    eyebrow: "Stay For A Little More",
    title: "Made For Trips That Need Extra Time",
    items: [
      {
        title: "Staycations",
        text: "Change the scenery without giving up the comforts of home. A longer local escape leaves room to relax, explore, and actually slow down.",
      },
      {
        title: "Extended Events",
        text: "Wedding weeks, celebrations, festivals, family occasions, and multi-day events are easier when your accommodation can support the quieter hours around the main plans.",
      },
      {
        title: "Longer Getaways",
        text: "For trips that stretch past the usual weekend, apartment-style living makes it easier to balance exploring Nashville with the everyday moments that make a longer stay comfortable.",
      },
    ],
    note: "Stay requirements, occupancy limits, visitor policies, quiet hours, and event guidelines may vary by reservation and accommodation.",
  },

  cta: {
    eyebrow: "Make Nashville Feel A Little More Like Home",
    title: "Give Yourself A Few More Days.",
    text: "Explore apartment-style accommodations that make longer Nashville stays feel easier, more flexible, and more lived in.",
    primary: {
      label: "View Accommodations",
      href: "/stay/accommodations",
    },
    secondary: {
      label: "Book An Extended Stay",
      href: "/book",
    },
  },
};

export default function ExtendedStayPage() {
  return <StayExperiencePage content={extendedStayContent} />;
}
