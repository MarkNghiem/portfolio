import { useState } from "react";

// Components
import FrontSide from "./Project-FrontSide";
import BackSide from "./Project-BackSide";

// Data
import { projects, blankGridPosition } from "../assets/data/projects";

const Project = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlipped((prev) => (prev === index ? null : index));
  };

  return (
    <div id="projects" className={`group project-group`}>
      <div className="project-background-overall" />
      {projects.map((project, index1) => {
        return (
          <div
            key={index1}
            className={`project-card ${project.style} ${flipped === index1 ? "top-0 left-0 z-10 col-span-full max-h-full w-full rotate-y-180" : ""}`}
          >
            <div
              className="project-background opacity-5"
              style={{
                backgroundImage: `url(${project.background})`,
              }}
            />
            {/* Front Side */}
            <FrontSide
              project={project}
              index1={index1}
              flipped={flipped}
              handleFlip={handleFlip}
            />

            {/* Back Side */}
            <BackSide
              project={project}
              index1={index1}
              flipped={flipped}
              setFlipped={setFlipped}
            />
          </div>
        );
      })}
      <div className="project-card project-grids project-7">
        <div className="project-card-inner">
          <div className="project-description-field">
            <h2 className="project-title">Coming soon...</h2>
          </div>
        </div>
        <div className="project-hover">
          <h2 className="project-title project-title-hover">Coming soon...</h2>
          <p className="project-description body">
            Stay tuned for incoming projects!
          </p>
        </div>
      </div>
      {blankGridPosition.map((grid, index) => {
        return <div key={index} className={`rounded-2xl py-20 ${grid}`} />;
      })}
    </div>
  );
};

export default Project;
