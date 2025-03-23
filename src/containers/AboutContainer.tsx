// About Container - First Section

// Stylesheets
import "../assets/stylesheets/about.css";

// Components
import AboutMe from "../components/About-AboutMe";
import Info from "../components/About-Info.tsx";
import TechStack from "../components/About-TechStack.tsx";

// Types
import { AboutProps } from "../types/propTypes.ts";

const AboutContainer = ({ handleEmail }: AboutProps) => {
  return (
    <div
      id="about"
      className="col-flex mobile-to-tablet-layout desktop-layout about-container-desktop-layout mt-10"
    >
      <Info handleEmail={handleEmail} />
      <AboutMe />
      <TechStack />
    </div>
  );
};

export default AboutContainer;
