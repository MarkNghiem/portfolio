// About Container - First Section

import PropTypes from "prop-types";

// Stylesheets
import "../assets/stylesheets/about.css";

// Components
import AboutMe from "../components/About-AboutMe";
import Info from "../components/About-Info";
import TechStack from "../components/About-TechStack";

const AboutContainer = ({ handleEmail }) => {
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

AboutContainer.propTypes = {
  handleEmail: PropTypes.func,
};

export default AboutContainer;
