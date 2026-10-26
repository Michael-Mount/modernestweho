import HeroImage from "../components/layout/hero/HeroImage";
import ContactPageSection from "../components/contact/ContactPageSection";

export const metadata = {
  title: "Contact Us | The Mondernest WeHo",
  description: "Contact the helpful team for The Mondernest WeHo.",
};

export default function Page() {
  return (
    <>
      <HeroImage
        image="https://sabal-house.b-cdn.net/Mondernest/WeHo/Exterior%20Renders/Modernest%20WeHo%20Exterior%202.jpg"
        alt="arial view of downtown Nashville at sunset"
      />
      <ContactPageSection />
    </>
  );
}
