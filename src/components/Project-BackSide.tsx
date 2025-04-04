// Components
import HorizontalScroll from "./HorizontalScroll";

// Data
import projectBottleNetes from "../assets/data/projectBottleNetes";
import projectYAP from "../assets/data/projectYAP";
import projectAttune from "../assets/data/projectAttune";
import projectArmaDollar from "../assets/data/projectArmaDollar";
import projectClockin from "../assets/data/projectClockin";
import projectPortfolio from "../assets/data/projectPortfolio";
import { FaExternalLinkAlt } from "react-icons/fa";

// Types
import { ProjectBackSideProps } from "../types/propTypes";

const BackSide = ({
  project,
  index1,
  flipped,
  setFlipped,
}: ProjectBackSideProps) => {
  const data = [
    projectBottleNetes,
    projectYAP,
    projectAttune,
    projectArmaDollar,
    projectClockin,
    projectPortfolio,
  ];

  return (
    <div className={`backside ${flipped === index1 ? "visible" : "invisible"}`}>
      <h2 className="project-title text-center">{project.name}</h2>
      <button
        className="project-learn-more-close"
        onClick={() => setFlipped(null)}
      >
        <span className="mobile text-3xl">🅧</span>
        <span className="from-tablet">Close</span>
      </button>
      <div className="backside-content">
        <h4 className="project-type mt-10 mb-3">Summary</h4>
        <p className="body">{data[index1].summary}</p>
        <ul className="list-disc">
          <h4 className="project-type mt-10 mb-3">Features</h4>
          {data[index1].features.map((feature, index2) => {
            return (
              <li
                key={`${index1}.${index2}`}
                className="body ml-8 not-last:mb-1.5"
              >
                {feature}
              </li>
            );
          })}
        </ul>
        <h4 className="project-type mt-10 mb-3">Technologies Used</h4>
        <HorizontalScroll dataset={data[index1].technologies} />
        <ul>
          <h4 className="project-type mt-8 mb-3">Resources:</h4>
          <div className="backside-rss">
            {data[index1].resources.map((rss, index3) => {
              return (
                <li
                  key={`${index1}.${index3}`}
                  className="body ml-8 flex items-center gap-2 transition-colors duration-200 hover:text-amber-800"
                >
                  <a href={rss.url} title={rss.type} aria-label={rss.type}>
                    {rss.type}
                  </a>
                  <FaExternalLinkAlt className="size-3" />
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default BackSide;
