// 'About Me' Section - Containing a summary of me as well as Pika and Chuchu

import { useEffect, useState } from "react";

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
      className={`col-span-2 row-span-5 rounded-2xl bg-slate-900/20 p-8 text-start text-xl shadow-2xl shadow-slate-900/50 transition-all duration-1000 ease-out ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="about-me-content"
        className={`transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h3 className="mb-5 text-4xl font-semibold font-stretch-120%">
          About Me...
        </h3>
        <p className="mb-2">
          👋🏼 Hey there! my name is Kiet Nghiem but I go by Mark most of the
          time. I am a passionate and hungry-for-knowledge Software Engineer
          dedicated to continuously improve myself with self-education and
          hands-on experiences by building scalable applications and intuitive
          user and developer experiences while adhering to best practices and
          staying informed with the latest technologies.
        </p>
        <p className="mb-2">
          🛠️ With expertise in JavaScript, TypeScript, React, Node.js, and
          Kubernetes, I specialize in creating efficient, maintainable, and
          secure software solutions.
        </p>
        <p className="mb-2">
          ✨ I love seeing people around me happy and accomplish great things.
          Therefore I enjoy helping my teammates both technical and
          non-technical issues within my ability whenever I can.
        </p>
        <p className="mb-2">
          🎮 Beyond coding, I enjoy collaborating in agile environments,
          mentoring engineers, and constantly pushing myself to learn new
          technologies. When I&apos;m not coding, you can find me tweaking UI
          mods in games, enjoying great food, watching Anime and TV Shows.{" "}
          <span className="italic">
            My current favorites right now are &apos;The Apothecary
            Diaries&apos; as well as &apos;Suits&apos;
          </span>
        </p>
        <p>Let&apos;s build something amazing together! 🚀</p>
        <h3 className="mt-8 mb-5 text-4xl font-semibold font-stretch-120%">
          Meet My Partners!
        </h3>
        <div id="pika" className="mb-8 flex items-center gap-4">
          <img
            src={pikaLarge}
            title="Pika"
            aria-label="Pika"
            className="size-60 rounded-4xl border-2 border-slate-400 object-cover shadow-xl shadow-slate-900/40"
          />
          <div id="pika-details">
            <h4 className="mb-3 text-center text-3xl font-semibold font-stretch-120%">
              Pika
            </h4>
            <p>
              My first ever kitty I adopted since 2016. He was 6 months old when
              I first met him at a local shelter. Since then he has been very
              needy and always want snuggle times but very shy when it comes to
              strangers
            </p>
          </div>
        </div>
        <div id="chuchu" className="flex items-center gap-4">
          <img
            src={chuchuLarge}
            title="Chuchu"
            aria-label="Chuchu"
            className="order-2 size-60 rounded-4xl border-2 border-slate-400 object-cover shadow-xl shadow-slate-900/40"
          />
          <div id="chuchu-details" className="order-1">
            <h4 className="mb-3 text-center text-3xl font-semibold font-stretch-120%">
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
