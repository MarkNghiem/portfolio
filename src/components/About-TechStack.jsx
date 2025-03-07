// 'Tech Stack' Section - Contain the stack that I have experience in

import { useState } from "react";

// Custom Hooks
import useSmoothFadeInTransition from "../hooks/useSmoothFadeInTransition";

// Data
import { langs, techs, others } from "../assets/data/techStack";

// React Icons
import { FaExternalLinkAlt } from "react-icons/fa";

const TechStack = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useSmoothFadeInTransition(setDivVisible, setContentVisible, 5700, 6100);

  return (
    <div
      id="tech-stack"
      className={`scrollbar div-background div-effect tech-desktop-layout ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="tech-stack-content"
        className={`content-effect ${contentVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <h1 className="title pb-8">Tech Stacks</h1>
        <div className="inner-div max-h-[70svh]">
          <h3 className="subtitle mb-5">Programming Languages</h3>
          <div id="lang-button" className="tech-button-group group">
            {langs.map((lang) => {
              return (
                <a
                  href={lang.url}
                  key={lang.name}
                  title={lang.label}
                  aria-label={lang.label}
                >
                  <button className="tech-button">
                    <img src={lang.icon} className="tech-button-image" />
                    <p className="tech-button-description">{lang.name}</p>
                    <FaExternalLinkAlt className="icons" />
                  </button>
                </a>
              );
            })}
          </div>
          <h3 className="subtitle mt-8 mb-5">Frameworks and Technologies</h3>
          <div id="tech-button" className="group tech-button-group">
            {techs.map((tech) => {
              return (
                <a
                  href={tech.url}
                  key={tech.name}
                  title={tech.label}
                  aria-label={tech.label}
                >
                  <button className="tech-button">
                    <img src={tech.icon} className="tech-button-image" />
                    <p className="tech-button-description">{tech.name}</p>
                    <FaExternalLinkAlt className="icons" />
                  </button>
                </a>
              );
            })}
          </div>
          <h3 className="subtitle mt-8 mb-4">Others</h3>
          <div id="other-button" className="group tech-button-group">
            {others.map((other) => {
              return (
                <a
                  href={other.url}
                  key={other.name}
                  title={other.label}
                  aria-label={other.label}
                >
                  <button className="tech-button">
                    <img src={other.icon} className="tech-button-image" />
                    <p className="tech-button-description">{other.name}</p>
                    <FaExternalLinkAlt className="icons" />
                  </button>
                </a>
              );
            })}
          </div>
          <h2 className="subtitle mt-8">And more to come...</h2>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
