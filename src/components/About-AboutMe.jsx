import chuchuLarge from '../../public/chuchu-large.jpeg';
import pikaLarge from '../../public/pika-large.jpeg';

const AboutMe = () => {
  return (
    <div id="about-me">
      <h3>About Me...</h3>
      <p>
        I am a dedicated and hungry-for-knowledge software engineer, always
        striving to improve and enrich myself with self-education and hands-on
        experiences in building applications and technologies with the goal of
        improving both UX and DX while adhering to best practices and staying
        informed with the latest technologies.
      </p>
      <p>
        My expertise is in building web applications and frameworks with
        JavaScript, TypeScript, React.js and Node.js.
      </p>
      <h3>Meet My Partners!</h3>
      <img src={pikaLarge} title='Pika' aria-label='Pika' className='size-60 object-cover rounded-4xl' />
      <h4>Pika</h4>
      <p>My first ever kitty I adopted since 2016. He was 6 months old when I first met him at a local shelter. Since then he has been very needy and always want snuggle times but very shy when it comes to stranger</p>
      <img src={chuchuLarge} title='Chuchu' aria-label='Chuchu' className=' size-60 object-cover rounded-4xl'/>
      <h4>Chuchu</h4>
      <p>Pika&apos;s little brother. Came home a few months after Pika. He&apos;s a bit more independent compared to his brother but can&apos;t resist a good belly rub.</p>
    </div>
  );
};

export default AboutMe;