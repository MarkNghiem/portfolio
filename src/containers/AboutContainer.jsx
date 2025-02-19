// About Container - First Section
import PropTypes from "prop-types";

import AboutMe from "../components/About-AboutMe";
import Info from "../components/About-Info";
import TechStack from "../components/About-TechStack";

import { aboutContainer3xl } from '../assets/styles';

const AboutContainer = ({ handleEmail }) => {
  return (
    <div
      id="about"
      className={`mt-10 flex w-9/10 flex-col gap-20 place-self-center ${aboutContainer3xl}`}
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
