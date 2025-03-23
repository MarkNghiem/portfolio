// Project Container

import { useState } from "react";

// Custom Hooks
import useSmoothFadeInTransition from "../hooks/useSmoothFadeInTransition";

// Components
import Project from "../components/Projects-Project";

// Stylesheets
import "../assets/stylesheets/projects.css";

const ProjectsContainer = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useSmoothFadeInTransition(setDivVisible, setContentVisible, 5800, 6200);

  return (
    <div
      id="projects"
      className={`scrollbar projects-desktop-layout mobile-to-tablet-layout div-background div-effect project-layout ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="projects-content"
        className={`content-effect contain-layout contain-paint ${contentVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <h1 className="title pb-8">Projects</h1>
        <div className={`inner-div project-inner-div h-[70svh]`}>
          <Project />
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
