import Herovideo from "./components/layout/hero/Herovideo";
import IntroSection from "./components/layout/header/IntroSection";
import NashvilleFeature from "./components/layout/text/NashvilleFeature";
import TextTwoImageSection from "./components/layout/text/TextTwoImageSection";
import AmenitiesSection from "./components/layout/cards/AmenitiesSection";
import SimpleGallery from "./components/galleries/SimpleGallery";
import ManagementCompanyCard from "./components/layout/cards/managementCompanyCard";

export default function Home() {
  return (
    <>
      <Herovideo videoSrc="https://sabal-house.b-cdn.net/Mondernest/Mondernest%20Hero%201080.mp4" />
      <IntroSection />

      <TextTwoImageSection
        eyebrow="Modern Nashville Living"
        title="Two distinct residences. One elevated experience."
        description="The Modernest Collection brings together apartment-style comfort, curated design, and a polished sense."
        buttonLabel="View Rooms"
        buttonHref="/residences"
        imageOne="https://sabal-house.b-cdn.net/Mondernest/WeHo/Interior%20Renders/1425%20-%20Sink%20%2B%20Tile%20Detail%20Shot.jpg"
        imageTwo="https://sabal-house.b-cdn.net/Mondernest/WeHo/Interior%20Renders/Mad%20Dog%20-%20Loft%20-%20View%20From%20Above%20(7-10-26).jpg"
        imageOneAlt="Modern luxury apartment living room in Nashville"
        imageTwoAlt="Elegant bedroom in a luxury Nashville apartment"
      />
      <NashvilleFeature />
      <AmenitiesSection />
      <SimpleGallery />
      <ManagementCompanyCard />
    </>
  );
}
