import PropTypes from "prop-types";

// Components
import Resources from "./Projects-Resources";
import { useState } from "react";

const Project = ({ projects, blank }) => {
  const [flipped, setFlipped] = useState(null);

  const handleFlip = (index) => {
    setFlipped((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="projects"
      className={`group project-group`}
    >
      <div className='project-background-overall' />
      {projects.map((project, index1) => {
        return (
          <div
            key={index1}
            className={`project-card ${project.style} ${flipped === index1 ? "z-10 rotate-y-180" : ""}`}
            onClick={() => handleFlip(index1)}
          >
            <div
              className="project-background"
              style={{
                backgroundImage: `url(${project.background})`,
                opacity: 0.05,
              }}
            />
            <div
              className={`project-card-inner ${flipped === index1 ? "invisible" : "visible"}`}
            >
              <h4 className="project-type">{project.type}</h4>
              <div className="project-description-field">
                <h2 className="project-title">{project.name}</h2>
                <p className="body">{project.slogan}</p>
              </div>
            </div>
            <div
              className={`project-hover ${flipped === index1 ? "invisible" : "visible"}`}
            >
              <Resources
                resources={project.resources}
                index1={index1}
                projectName={project.name}
              />
              <p className="project-title project-title-hover">
                {project.name}
              </p>
              <p className="project-description body">{project.description}</p>
            </div>
          </div>
        );
      })}
      {blank.map((grid, index) => {
        return <div key={index} className={`rounded-2xl py-20 ${grid}`} />;
      })}
    </div>
  );
};

Project.propTypes = {
  projects: PropTypes.array,
  blank: PropTypes.array,
};

export default Project;
