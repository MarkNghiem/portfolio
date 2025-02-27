// About Container - First Section
import PropTypes from "prop-types";

import '../assets/stylesheets/about.css';

import AboutMe from "../components/About-AboutMe";
import Info from "../components/About-Info";
import TechStack from "../components/About-TechStack";

const AboutContainer = ({ handleEmail }) => {
  return (
    <div
      id="about"
      className='col-flex mobile-to-tablet-layout mt-10 desktop-layout about-container-desktop-layout'
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
