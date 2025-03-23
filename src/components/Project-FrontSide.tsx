// Components
import Resources from "./Projects-Resources";

// Types
import { ProjectFrontSideProps } from "../types/propTypes";

const FrontSide = ({
  project,
  index1,
  flipped,
  handleFlip,
}: ProjectFrontSideProps) => {
  return (
    <>
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
        <h2 className="project-title project-title-hover">{project.name}</h2>
        <p className="project-description body">{project.description}</p>
        <button
          className="project-learn-more"
          onClick={() => handleFlip(index1)}
        >
          Learn More
        </button>
      </div>
    </>
  );
};

export default FrontSide;
