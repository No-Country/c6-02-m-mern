import { SectionContact } from "../../components/LandingPageComponents/contact/SectionContact";
import { SectionDiscover } from "../../components/LandingPageComponents/Discover/SectionDiscover.";
import { Header } from "../../components/LandingPageComponents/header/Header";
import { SectionHero } from "../../components/LandingPageComponents/hero/SectionHero";

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <SectionHero />
      <SectionDiscover />
      <SectionContact />
    </div>
  );
};
