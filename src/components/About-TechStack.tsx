// 'Tech Stack' Section - Contain the stack that I have experience in

import { useState } from "react";

// Components
import Techs from "./Techs.tsx";

// Custom Hooks
import useSmoothFadeInTransition from "../hooks/useSmoothFadeInTransition";

// Data
import { langs, techs, others } from "../assets/data/techStack.ts";

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
        <div className="inner-div tech-height">
          <h3 className="subtitle mb-5">Programming Languages</h3>
          <Techs dataset={langs} />
          <h3 className="subtitle mt-8 mb-5">Frameworks and Technologies</h3>
          <Techs dataset={techs} />
          <h3 className="subtitle mt-8 mb-4">Others</h3>
          <Techs dataset={others} />
          <h2 className="subtitle mt-8">And more to come...</h2>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
