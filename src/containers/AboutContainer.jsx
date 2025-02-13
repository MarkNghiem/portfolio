// About Container - First Section
import PropTypes from 'prop-types'

import AboutMe from '../components/About-AboutMe';
import Info from '../components/About-Info';
import TechStack from '../components/About-TechStack';

const AboutContainer = ({ handleEmail }) => {
  return (
    <div id="about" className="grid grid-cols-5 grid-rows-5 w-4/5 place-self-center mt-20 gap-10 max-w-[1920px]">
      <Info handleEmail={handleEmail} />
      <AboutMe />
      <TechStack />
    </div>
  );
};

AboutContainer.propTypes = {
  handleEmail: PropTypes.func,
}

export default AboutContainer;