import HeroImage from "../components/layout/hero/HeroImage";
import MosaicGallery from "../components/galleries/MosaicGallery";

export const metadata = {
  title: "Gallery | The Modernest WeHo",
  description: "View the Newly built The Modernest WeHo",
};

export default function Page() {
  return (
    <>
      <HeroImage
        image="https://sabal-house.b-cdn.net/Mondernest/WeHo/Exterior%20Renders/26-1005%20-%20Mad%20Dog%20-%20Fall%20Exterior%20Shot.jpeg"
        alt="Neon Lights from signs in downtown Nashville"
      />
      <MosaicGallery />
    </>
  );
}
