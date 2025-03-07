// 'About Me' Section - Containing a summary of me as well as Pika and Chuchu

import { useState } from "react";

// Custom Hooks
import useSmoothFadeInTransition from "../hooks/useSmoothFadeInTransition";

// Assets
import chuchuLarge from "../../public/chuchu-large.jpeg";
import pikaLarge from "../../public/pika-large.jpeg";

const AboutMe = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useSmoothFadeInTransition(setDivVisible, setContentVisible, 5600, 6000);

  return (
    <div
      id="about-me"
      className={`div-background div-effect about-desktop-layout text-start ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="about-me-content"
        className={`content-effect ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="title mb-5">About Me...</h2>
        <p className="mb-3">
          👋🏼 Hey there! my name is Kiet Nghiem but I go by Mark most of the
          time. I am a passionate and hungry-for-knowledge Software Engineer
          dedicated to continuously improve myself with self-education and
          hands-on experiences by building scalable applications and intuitive
          user and developer experiences while adhering to best practices and
          staying informed with the latest technologies.
        </p>
        <p className="mb-3">
          🛠️ With expertise in JavaScript, TypeScript, React, Node.js, and
          Kubernetes, I specialize in creating efficient, maintainable, and
          secure software solutions.
        </p>
        <p className="mb-3">
          ✨ I love seeing people around me happy and accomplish great things.
          Therefore I enjoy helping my teammates with both technical and
          non-technical issues within my ability whenever I can.
        </p>
        <p className="mb-3">
          🎮 Beyond coding, I enjoy collaborating in agile environments,
          mentoring engineers, and constantly pushing myself to learn new
          technologies. When I&apos;m not coding, you can find me tweaking UI
          mods in games, enjoying great food, watching Anime and TV Shows.{" "}
          <span className="italic">
            My current favorites right now are &apos;The Apothecary
            Diaries&apos; as well as &apos;Suits&apos;.
          </span>
        </p>
        <p>Let&apos;s build something amazing together! 🚀</p>
        <h2 className="subtitle my-10">Meet My Partners!</h2>
        <div id="pika" className="col-flex partner-container mb-10">
          <img
            src={pikaLarge}
            title="Pika"
            aria-label="Pika"
            className="partner-image content-border content-shadow avatar-rounded-4xl content-hover-effect"
          />
          <div id="pika-details">
            <h4 className="pika-bio subtitle">Pika</h4>
            <p>
              My first ever kitty I adopted since 2016. He was 6 months old when
              I first met him at a local shelter. Since then he has been very
              needy and always want snuggle times but very shy when it comes to
              strangers.
            </p>
          </div>
        </div>
        <div id="chuchu" className="col-flex partner-container">
          <img
            src={chuchuLarge}
            title="Chuchu"
            aria-label="Chuchu"
            className="partner-image content-border content-shadow avatar-rounded-4xl content-hover-effect lg:order-2"
          />
          <div id="chuchu-details" className="order-1">
            <h4 className="chuchu-bio subtitle">Chuchu</h4>
            <p className="lg:text-end">
              Pika&apos;s little brother. Came home a few months after Pika.
              He&apos;s a lot more independent compared to his brother but
              can&apos;t resist a good belly rub. He&apos;s so loveable that
              Pika started grooming him after just one day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
