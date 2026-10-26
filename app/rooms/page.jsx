import HeroImage from "../components/layout/hero/HeroImage";
import IntroSection from "../components/layout/header/IntroSection";
import RoomsSuitesGrid from "../components/rooms/RoomSuitesGrid";

export const metadata = {
  title: "Rooms | The Mondernest WeHo",
  description: "The room types at The Mondernest WeHo",
};

export default function rooms() {
  return (
    <section>
      <HeroImage
        image="https://sabal-house.b-cdn.net/Mondernest/WeHo/Interior%20Renders/Secondary%20Bedroom.jpg"
        alt="interior of the king guestroom"
      />
      <IntroSection />
      <RoomsSuitesGrid />
    </section>
  );
}
