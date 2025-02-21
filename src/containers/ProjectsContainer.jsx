// Project Container

import { useEffect, useState } from "react";

import { CgWebsite } from "react-icons/cg";
import { SiMedium } from "react-icons/si";
import { FaGithub, FaLinkedin, FaProductHunt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import {
  projects3xl1,
  projects3xl2,
  projects3xl3,
  projects3xl4,
  projects3xl5,
  projects3xl6,
  projects3xl7,
  projects3xl8,
  projects3xl9,
  projects3xl10,
  projects3xl11,
  projects3xl12,
  projects3xl13,
  projects3xl14,
  projects3xl15,
  projects3xl16,
  projects3xl17,
  projects3xl18,
  projects3xl19,
  projects3xl20,
  title3xl,
} from "../assets/styles";

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
          icon: <CgWebsite className={`size-4 ${projects3xl1}`} />,
        },
        {
          type: "Medium Article",
          url: "https://medium.com/@bottlenetes/bottlenetes-simplifying-kubernetes-management-f91118f07f1c",
          icon: <SiMedium className={`size-4 ${projects3xl1}`} />,
        },
        {
          type: "GitHub Repository",
          url: "https://github.com/oslabs-beta/BottleNetes",
          icon: <FaGithub className={`size-4 ${projects3xl1}`} />,
        },
        {
          type: "LinkedIn",
          url: "https://www.linkedin.com/company/bottlenetes/posts/?feedView=all",
          icon: <FaLinkedin className={`size-4 ${projects3xl1}`} />,
        },
        {
          type: "Product Hunt",
          url: "https://www.producthunt.com/products/bottlenetes#bottlenetes",
          icon: <FaProductHunt className={`size-4 ${projects3xl1}`} />,
        },
        {
          type: "X",
          url: "https://x.com/bottlenetes",
          icon: <FaSquareXTwitter className={`size-4 ${projects3xl1}`} />,
        },
      ],
      style: `bg-linear-to-br from-slate-400 from-40% to-cyan-900 ${projects3xl2}`,
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
          icon: <FaGithub className={`size-4 ${projects3xl1}`} />,
        },
      ],
      style: `bg-linear-to-br from-slate-400 from-40% to-violet-900 ${projects3xl3}`,
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
          icon: <FaGithub className={`size-4 ${projects3xl1}`} />,
        },
      ],
      style: `bg-linear-to-br from-slate-400 from-40% to-teal-900 ${projects3xl4}`,
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
          icon: <FaGithub className={`size-4 ${projects3xl1}`} />,
        },
      ],
      style: `bg-linear-to-br from-slate-400 from-40% to-pink-900 ${projects3xl5}`,
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
          icon: <FaGithub className={`size-4 ${projects3xl1}`} />,
        },
      ],
      style: `bg-linear-to-br from-slate-400 from-40% to-sky-900 ${projects3xl6}`,
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
          icon: <FaGithub className={`size-4 ${projects3xl1}`} />,
        },
      ],
      style: `bg-linear-to-br from-slate-400 from-40% to-amber-900 ${projects3xl7}`,
    },
    {
      type: "",
      name: "Coming soon...",
      slogan: "",
      description: "Stay tuned for incoming projects!",
      logo: "",
      style: `bg-linear-to-br from-slate-400 from-40% to-slate-700 ${projects3xl8}`,
    },
  ];

  const blankGridPosition = [`hidden ${projects3xl9}`];

  return (
    <div
      id="projects"
      className={`mt-20 w-9/10 place-self-center rounded-2xl bg-slate-900/20 pb-8 shadow-2xl shadow-slate-900/50 transition duration-1000 ease-out ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} ${projects3xl10}`}
    >
      <div
        id="projects-content"
        className={`transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1
          className={`py-8 text-5xl font-semibold font-stretch-115% ${title3xl}`}
        >
          Projects
        </h1>
        <div
          className={`mx-5 h-[70dvh] overflow-scroll rounded-2xl bg-linear-to-br from-slate-900/30 to-amber-900/20 py-5 max-md:flex max-md:flex-col ${projects3xl11}`}
        >
          <div
            id="projects"
            className={`group flex w-[95%] flex-col gap-3 place-self-center ${projects3xl12}`}
          >
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className={`relative h-full w-full rounded-2xl border border-slate-400 shadow-2xl shadow-black/80 transition duration-300 ${project.style} ${projects3xl13}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${project.background})`,
                      opacity: 0.05,
                    }}
                  />
                  <div
                    className={`mx-2 flex h-80 flex-col transition-opacity duration-200 ${projects3xl14}`}
                  >
                    <h4 className={`z-10 pt-10 ${projects3xl15}`}>
                      {project.type}
                    </h4>
                    <div
                      className={`z-10 h-full place-content-center pb-10 ${projects3xl16}`}
                    >
                      <h2
                        className={`pb-2 text-3xl font-semibold font-stretch-115% ${projects3xl16} ${title3xl}`}
                      >
                        {project.name}
                      </h2>
                      <p className={`${projects3xl17}`}>{project.slogan}</p>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-10 opacity-0 transition-opacity duration-200 active:opacity-100 max-md:opacity-100 ${projects3xl18}`}
                  >
                    <div
                      className={`absolute top-0 left-0 z-30 m-1.5 flex gap-2 ${projects3xl19}`}
                    >
                      {project.resources?.map((resource, index) => {
                        return (
                          <a
                            key={index}
                            href={resource.url}
                            title={resource.type}
                            aria-label={resource.type}
                          >
                            <button
                              className={`cursor-pointer transition-transform duration-300 ${projects3xl20}`}
                            >
                              {resource.icon}
                            </button>
                          </a>
                        );
                      })}
                    </div>
                    <p
                      className={`pb-3 text-3xl font-semibold font-stretch-115% max-md:pointer-events-none max-md:opacity-0 ${title3xl}`}
                    >
                      {project.name}
                    </p>
                    <p className="max-md:pointer-events-none max-md:opacity-0">
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
