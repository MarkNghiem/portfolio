// About Container - First Section

import AboutMe from '../components/About-AboutMe';
import Info from '../components/About-Info';
import TechStack from '../components/About-TechStack';

const AboutContainer = () => {
  return (
    <div id="about" className="grid grid-cols-5 grid-rows-5 w-[90%] place-self-center mt-20 gap-16">
      <Info />
      <AboutMe />
      <TechStack />
    </div>
  );
};

export default AboutContainer;