import PropTypes from "prop-types";

// Components
import Resources from "./Projects-Resources";

const Project = ({ projects, blank }) => {
  return (
    <div id="projects" className={`group project-group`}>
      {projects.map((project, index1) => {
        return (
          <div key={index1} className={`project-card ${project.style}`}>
            <div
              className="project-background"
              style={{
                backgroundImage: `url(${project.background})`,
                opacity: 0.05,
              }}
            />
            <div className="project-card-inner">
              <h4 className="project-type">{project.type}</h4>
              <div className="project-description-field">
                <h2 className="project-title">{project.name}</h2>
                <p className="body">{project.slogan}</p>
              </div>
            </div>
            <div className="project-hover">
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
        return (
          <div
            key={index}
            className={`rounded-2xl bg-slate-900/70 py-20 ${grid}`}
          />
        );
      })}
    </div>
  );
};

Project.propTypes = {
  projects: PropTypes.array,
  blank: PropTypes.array,
};

export default Project;
