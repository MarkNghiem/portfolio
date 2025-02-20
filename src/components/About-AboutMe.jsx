// 'About Me' Section - Containing a summary of me as well as Pika and Chuchu

import { useEffect, useState } from "react";

import {
  about3xl1,
  about3xl2,
  about3xl3,
  about3xl4,
  flex3xl,
  ender3xl
} from "../assets/styles";

import chuchuLarge from "../../public/chuchu-large.jpeg";
import pikaLarge from "../../public/pika-large.jpeg";

const AboutMe = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 5600);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 6000);

    return () => {
      clearTimeout(divTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div
      id="about-me"
      className={`rounded-2xl bg-slate-900/20 p-5 text-start shadow-2xl shadow-slate-900/50 transition-all duration-1000 ease-out ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} ${about3xl1}`}
    >
      <div
        id="about-me-content"
        className={`transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h2
          className={`mb-5 text-3xl font-semibold font-stretch-115% ${ender3xl}`}
        >
          About Me...
        </h2>
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
        <h2
          className={`my-10 text-3xl font-semibold font-stretch-115% ${about3xl2}`}
        >
          Meet My Partners!
        </h2>
        <div id="pika" className={`mb-8 items-center gap-4 ${flex3xl}`}>
          <img
            src={pikaLarge}
            title="Pika"
            aria-label="Pika"
            className={`mb-5 rounded-4xl border-2 size-60 place-self-center border-slate-400 object-cover shadow-xl shadow-slate-900/40 transition-transform duration-200 hover:scale-105`}
          />
          <div id="pika-details">
            <h4 className="mb-3 text-center text-3xl font-semibold">
              Pika
            </h4>
            <p>
              My first ever kitty I adopted since 2016. He was 6 months old when
              I first met him at a local shelter. Since then he has been very
              needy and always want snuggle times but very shy when it comes to
              strangers.
            </p>
          </div>
        </div>
        <div id="chuchu" className={`items-center gap-4 ${flex3xl}`}>
          <img
            src={chuchuLarge}
            title="Chuchu"
            aria-label="Chuchu"
            className={`mb-5 rounded-4xl border-2 size-60 place-self-center border-slate-400 object-cover shadow-xl shadow-slate-900/40 transition-transform duration-200 hover:scale-105 ${about3xl3}`}
          />
          <div id="chuchu-details" className={`${about3xl4}`}>
            <h4 className="mb-3 text-center text-3xl font-semibold">
              Chuchu
            </h4>
            <p className="text-start">
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
