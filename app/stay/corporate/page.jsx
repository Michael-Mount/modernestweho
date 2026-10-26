import StayExperiencePage from "@/app/components/stay/StayExperiencePage";

export const metadata = {
  title: "Corporate & Remote Work Stays in Nashville | The Mondernest at WeHo",
  description:
    "Work from Nashville without giving up the comforts of home. The Mondernest at WeHo offers apartment-style corporate and remote work stays with space to focus, settle in, and experience the city beyond the workday.",
  keywords: [
    "corporate stay Nashville",
    "remote work hotel Nashville",
    "work from Nashville",
    "workcation Nashville",
    "extended business stay Nashville",
    "apartment style hotel Nashville",
    "business travel Nashville",
    "long stay hotel Nashville",
    "The Mondernest at WeHo",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Corporate & Remote Work Stays | The Mondernest at WeHo",
    description:
      "Bring work with you and make Nashville home for a while with apartment-style space designed for productive days and better time off.",
    type: "website",
  },
};

const corporateStayContent = {
  hero: {
    eyebrow: "Corporate Stays",
    title: "Take The Work. Change The View.",
    description:
      "For remote workers, traveling professionals, and longer business stays, make Nashville your home base without making work feel like the whole trip.",
    image:
      "https://sabal-house.b-cdn.net/Mondernest/WeHo/Amenities%20Renders/Modernest%20WeHo%20Co-Working.jpg",
    imageAlt:
      "Modern apartment-style workspace with natural light for a remote work stay",
  },

  intro: {
    eyebrow: "Work From Somewhere Better",
    title: "A Place To Focus. A City To Step Into.",
    paragraphs: [
      "Remote work makes it possible to stay longer and experience a city differently. The Mondernest at WeHo gives you the space to keep your routine moving while making Nashville part of everything that happens after you close the laptop.",
      "Apartment-style accommodations create more separation between work and downtime than a traditional hotel room. Set up for the day, make lunch at home, take a break in the living room, and still have a comfortable place to return to after exploring the city.",
    ],
  },

  advantages: {
    eyebrow: "The Work-From-Anywhere Advantage",
    title: "Built For Productive Days And Better Off Hours",
    items: [
      {
        number: "01",
        title: "Separate Work From Rest",
        text: "More room makes it easier to create a dedicated work zone instead of spending every meeting, meal, and evening from the edge of a hotel bed.",
      },
      {
        number: "02",
        title: "Settle Into A Routine",
        text: "Start the day with coffee at home, work on your own schedule, take a real lunch break, and build a rhythm that feels closer to everyday living.",
      },
      {
        number: "03",
        title: "Stay Flexible",
        text: "Whether your trip lasts a week, a project cycle, or a little longer, apartment-style living gives you the flexibility to adjust plans without feeling temporary.",
      },
      {
        number: "04",
        title: "Make The City Part Of The Perk",
        text: "When the workday ends, Nashville is already outside your door. Trade a commute home for dinner, live music, a neighborhood walk, or a quiet evening in.",
      },
    ],
  },

  editorial: {
    eyebrow: "Business Travel, Reimagined",
    title: "Your Office Can Move. Your Routine Does Not Have To.",
    paragraphs: [
      "A corporate stay can be more than a place to sleep between meetings. With the right space, longer business travel starts to feel less disruptive and remote work becomes an opportunity to experience somewhere new.",
      "Keep the practical pieces easy—space to work, room to unwind, a kitchen for everyday meals, and a comfortable place to stay awhile—then use the rest of your time to make Nashville feel less like a business trip and more like temporary home.",
    ],
    image:
      "https://sabal-house.b-cdn.net/Mondernest/WeHo/Interior%20Renders/Modernest%20WeHo%20Studio%20(1).jpg",
    imageAlt:
      "Contemporary apartment living and dining area suited to working remotely in Nashville",
  },

  rhythm: {
    eyebrow: "A Better Workday Away",
    title: "Keep The Routine. Upgrade Everything Around It.",
    items: [
      {
        time: "Morning",
        title: "Start Without The Commute",
        text: "Make breakfast, answer the first emails, and ease into the day from a space that feels more like home than a standard business hotel.",
      },
      {
        time: "Workday",
        title: "Give Focus Its Own Space",
        text: "Create a comfortable work setup and keep the rest of your accommodation available for meals, breaks, calls, and the moments between meetings.",
      },
      {
        time: "After Hours",
        title: "Close The Laptop. Change The Pace.",
        text: "Step into Nashville for dinner, music, fitness, or a neighborhood walk instead of ending the workday in the same room where it started.",
      },
      {
        time: "Weekend",
        title: "Stay Put. Explore More.",
        text: "A longer stay means the weekend already starts in Nashville. Spend it discovering the city instead of packing, traveling, and starting over somewhere else.",
      },
    ],
  },

  audience: {
    eyebrow: "For Work That Travels",
    title: "A Smarter Home Base For Working Away",
    items: [
      {
        title: "Remote Workers",
        text: "Turn location flexibility into something more meaningful with a comfortable place to work during the day and a new city to experience afterward.",
      },
      {
        title: "Project & Contract Stays",
        text: "For assignments that last longer than a typical business trip, apartment-style space can make temporary relocation feel far more manageable.",
      },
      {
        title: "Team & Corporate Travel",
        text: "Give traveling team members a more residential option for longer visits, company projects, training periods, and other extended work in Nashville.",
      },
    ],
    note: "Accommodation features, stay-length requirements, workspace configurations, occupancy limits, and corporate booking options may vary by reservation.",
  },

  cta: {
    eyebrow: "Make Nashville Your Next Office",
    title: "Work Here For A While. Live Here While You Do.",
    text: "Explore apartment-style accommodations for remote work, extended business travel, and corporate stays in Nashville.",
    primary: {
      label: "View Accommodations",
      href: "/stay/accommodations",
    },
    secondary: {
      label: "Book A Corporate Stay",
      href: "/book",
    },
  },
};

export default function Page() {
  return <StayExperiencePage content={corporateStayContent} />;
}
