// 'Tech Stack' Section - Contain the stack that I have experience in

import { useEffect, useState } from "react";

import { langs, techs, others } from '../assets/techStack';
import ExternalLink from '../../public/svg/external-link.svg';
import {
  techStack3xl1,
  techStack3xl2,
  techStack3xl3,
  displayBlock3xl,
  title3xl,
  subtitle3xl,
  ender3xl,
} from "../assets/styles";

const TechStack = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 5700);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 6100);

    return () => {
      clearTimeout(divTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div
      id="tech-stack"
      className={`scrollbar div-background div-effect tech-desktop-layout ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="tech-stack-content"
        className={`content-effect ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="title pb-8">Tech Stacks</h1>
        <div
          className='max-h-[70vh] inner-div'
        >
          <h3
            className='subtitle mb-5'
          >
            Programming Languages
          </h3>
          <div
            id="lang-button"
            className="tech-button-group group"
          >
            {langs.map((lang) => {
              return (
                <a
                  href={lang.url}
                  key={lang.name}
                  title={lang.label}
                  aria-label={lang.label}
                >
                  <button
                    className='tech-button'
                  >
                    <img
                      src={lang.icon}
                      className={`size-10 rounded-lg ${techStack3xl3}`}
                    />
                    <p className={`hidden ${displayBlock3xl}`}>{lang.name}</p>
                    <img
                      src={ExternalLink}
                      className="absolute top-0 right-0 m-0.5 size-4"
                    />
                  </button>
                </a>
              );
            })}
          </div>
          <h3 className={`mt-8 mb-4 text-xl font-semibold ${subtitle3xl}`}>
            Frameworks and Technologies
          </h3>
          <div
            id="tech-button"
            className="group flex flex-wrap justify-center gap-2 place-self-center"
          >
            {techs.map((tech) => {
              return (
                <a
                  href={tech.url}
                  key={tech.name}
                  title={tech.label}
                  aria-label={tech.label}
                >
                  <button
                    className={`relative m-0.5 flex cursor-pointer items-center justify-start rounded-xl border border-slate-400 bg-slate-900/20 p-4.5 transition duration-200 group-hover:scale-90 group-hover:opacity-90 hover:scale-110 hover:bg-slate-900/30 hover:opacity-100 active:bg-slate-900/40 ${techStack3xl2}`}
                  >
                    <img
                      src={tech.icon}
                      className={`size-10 ${techStack3xl3}`}
                    />
                    <p className={`hidden ${displayBlock3xl}`}>{tech.name}</p>
                    <img
                      src={ExternalLink}
                      className="absolute top-0 right-0 m-0.5 size-4"
                    />
                  </button>
                </a>
              );
            })}
          </div>
          <h3 className={`mt-8 mb-4 text-xl font-semibold ${subtitle3xl}`}>
            Others
          </h3>
          <div
            id="other-button"
            className="group flex flex-wrap justify-center gap-2 place-self-center"
          >
            {others.map((other) => {
              return (
                <a
                  href={other.url}
                  key={other.name}
                  title={other.label}
                  aria-label={other.label}
                >
                  <button
                    className={`relative m-0.5 flex cursor-pointer items-center justify-start rounded-xl border border-slate-400 bg-slate-900/20 p-4.5 transition duration-200 group-hover:scale-90 group-hover:opacity-90 hover:scale-110 hover:bg-slate-900/30 hover:opacity-100 active:bg-slate-900/40 ${techStack3xl2}`}
                  >
                    <img
                      src={other.icon}
                      className={`size-10 ${techStack3xl3}`}
                    />
                    <p className={`hidden ${displayBlock3xl}`}>{other.name}</p>
                    <img
                      src={ExternalLink}
                      className="absolute top-0 right-0 m-0.5 size-4"
                    />
                  </button>
                </a>
              );
            })}
          </div>
          <h2
            className={`my-8 text-3xl font-semibold font-stretch-115% ${ender3xl}`}
          >
            And more to come...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
