// Project Container

import { useEffect, useState } from "react";

import "../assets/stylesheets/projects.css";

import { CgWebsite } from "react-icons/cg";
import { SiMedium } from "react-icons/si";
import { FaGithub, FaLinkedin, FaProductHunt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import BottleNetes from "../../public/bottlenetes.png";
import YAP from "../../public/yap.png";
import Attune from "../../public/attune.png";
import ArmaDollar from "../../public/armadollar.png";
import Clockin from "../../public/clockin.png";
import Portfolio from "../../public/portfolio.jpg";

const ProjectsContainer = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 5800);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 6200);

    return () => {
      clearTimeout(divTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const projects = [
    {
      type: "Open-source Product",
      name: "BottleNetes ",
      slogan: "Uncorking Kubernetes Bottlenecks & Insights, One Pod at a time",
      description:
        "An Open-source tool for managing and monitoring Kubernetes Clusters, featuring real-time data charts to track resources, limits and latency with an intuitive and interactive heat map.",
      background: BottleNetes,
      resources: [
        {
          type: "Website",
          url: "https://www.bottlenetes.com/",
          icon: <CgWebsite className="project-icon" />,
        },
        {
          type: "Medium Article",
          url: "https://medium.com/@bottlenetes/bottlenetes-simplifying-kubernetes-management-f91118f07f1c",
          icon: <SiMedium className="project-icon" />,
        },
        {
          type: "GitHub Repository",
          url: "https://github.com/oslabs-beta/BottleNetes",
          icon: <FaGithub className="project-icon" />,
        },
        {
          type: "LinkedIn",
          url: "https://www.linkedin.com/company/bottlenetes/posts/?feedView=all",
          icon: <FaLinkedin className="project-icon" />,
        },
        {
          type: "Product Hunt",
          url: "https://www.producthunt.com/products/bottlenetes#bottlenetes",
          icon: <FaProductHunt className="project-icon" />,
        },
        {
          type: "X",
          url: "https://x.com/bottlenetes",
          icon: <FaSquareXTwitter className="project-icon" />,
        },
      ],
      style: "project-grids project-1",
    },
    {
      type: "Collaboration",
      name: "YAP",
      slogan: "Your Adaptive Persona",
      description:
        "Practice your communication skills in different scenarios such as job interview, dating or casual with friends and family. Turn those awkward silence into productive and enjoyable conversations.",
      background: YAP,
      resources: [
        {
          type: "GitHub Repository",
          url: "https://github.com/bugs-go-away/ai",
          icon: <FaGithub className="project-icon" />,
        },
      ],
      style: "project-grids project-2",
    },
    {
      type: "Collaboration",
      name: "Attune",
      slogan: "Build good habits with great vibes",
      description:
        "A Spotify integrated habit builder. A lot of effort is needed when building good habits, music that fits the mood will definitely help when charting out that roadmap to become the best version of yourself.",
      background: Attune,
      resources: [
        {
          type: "GitHub Repository",
          url: "https://github.com/attune-iteration/attune_2.0",
          icon: <FaGithub className="project-icon" />,
        },
      ],
      style: "project-grids project-3",
    },
    {
      type: "Collaboration",
      name: "ArmaDollar",
      slogan: "Save you an arm an a tail!",
      description:
        "A budget management and subscriptions tracker. ArmaDollar helps you keeping track of your expense as well as recurring subscriptions so that so don't need to wonder where your dollars have been.",
      background: ArmaDollar,
      resources: [
        {
          type: "GitHub Repository",
          url: "https://github.com/PFArmadillos/scratch",
          icon: <FaGithub className="project-icon" />,
        },
      ],
      style: "project-grids project-4",
    },
    {
      type: "Solo",
      name: "Clockin'",
      slogan: "Simpler Management",
      description:
        "A must-have tool for managers. Record your employee's information such as account numbers and hours worked,... All in one place!",
      background: Clockin,
      resources: [
        {
          type: "GitHub Repository",
          url: "https://github.com/MarkNghiem/Clockin",
          icon: <FaGithub className="project-icon" />,
        },
      ],
      style: "project-grids project-5",
    },
    {
      type: "Solo",
      name: "Portfolio",
      slogan: "Introduction from me!",
      description:
        "Believe it or not, this website itself is also a project. Not a lot of functionalities but the experiences is priceless and fun!",
      background: Portfolio,
      resources: [
        {
          type: "GitHub Repository",
          url: "https://github.com/MarkNghiem/portfolio",
          icon: <FaGithub className="project-icon" />,
        },
      ],
      style: "project-grids project-6",
    },
    {
      type: "",
      name: "Coming soon...",
      slogan: "",
      description: "Stay tuned for incoming projects!",
      logo: "",
      style: "project-grids project-7",
    },
  ];

  const blankGridPosition = ["project-blank"];

  return (
    <div
      id="projects"
      className={`scrollbar projects-desktop-layout mobile-to-tablet-layout div-background div-effect project-layout ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="projects-content"
        className={`content-effect ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="title pb-8">Projects</h1>
        <div className={`inner-div project-inner-div h-[70svh]`}>
          <div id="projects" className={`group project-group`}>
            {projects.map((project, index) => {
              return (
                <div key={index} className={`project-card ${project.style}`}>
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
                    <div className="project-icon-container">
                      {project.resources?.map((resource, index) => {
                        return (
                          <a
                            key={index}
                            href={resource.url}
                            title={resource.type}
                            aria-label={resource.type}
                          >
                            <button className="project-button">
                              {resource.icon}
                            </button>
                          </a>
                        );
                      })}
                    </div>
                    <p className="project-title project-title-hover">
                      {project.name}
                    </p>
                    <p className="project-description body">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
            {blankGridPosition.map((grid, index) => {
              return (
                <div
                  key={index}
                  className={`rounded-2xl bg-slate-900/70 py-20 ${grid}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
