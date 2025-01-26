import AboutMe from '../components/About-AboutMe';
import Info from '../components/About-Info';

const AboutContainer = () => {
  return (
    <div id='about' className='grid'>
      <Info />
      <AboutMe />
    </div>
  )
};

export default AboutContainer;