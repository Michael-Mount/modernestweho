import HeroImage from "../components/layout/hero/HeroImage";
import AmenitiesPage from "../components/amenities/AmenitiesPage";

export const metadata = {
  title: "Amenities | The Modernest WeHo",
  description:
    "All the high end and luxury amenities offered at The Modernest WeHo",
};

export default function Amenities() {
  return (
    <>
      <HeroImage
        image="https://sabal-house.b-cdn.net/Mondernest/WeHo/Amenities%20Renders/Modernest%20WeHo%20.jpg"
        alt="Gym at the The mondernest WeHo"
      />
      <AmenitiesPage />
    </>
  );
}
