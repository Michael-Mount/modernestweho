import HeroImage from "../components/layout/hero/HeroImage";
import ExploreNashvillePage from "../components/explore/ExploreNashvillePage";

export const metadata = {
  title: "Explore | The Modernest WeHo",
  description:
    "Explore the historic downtown Nashville, home to The Modernest WeHo",
};

export default function Page() {
  return (
    <>
      <HeroImage
        image="https://sabal-house.b-cdn.net/Mondernest/WeHo/Exterior%20Renders/26-1005%20-%20Mad%20Dog%20-%20Fall%20Exterior%20Shot.jpeg"
        alt="Neon Lights from signs in downtown Nashville"
      />
      <ExploreNashvillePage />
    </>
  );
}
