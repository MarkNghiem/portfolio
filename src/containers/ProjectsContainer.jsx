// Project Container

import BottleNetes from "../../public/bottlenetes.png";
import YAP from "../../public/yap.png";
import Attune from "../../public/attune.png";
import ArmaDollar from "../../public/armadollar.png";
import Clockin from "../../public/clockin.png";
import Portfolio from "../../public/portfolio.jpg";

const ProjectsContainer = () => {
  const projects = [
    {
      type: "Open-source Product",
      name: "BottleNetes ",
      slogan: "Uncorking Kubernetes Bottlenecks & Insights, One Pod at a time",
      description:
        "An Open-source tool for managing and monitoring Kubernetes Clusters, featuring real-time data charts to track resources, limits and latency with an intuitive and interactive heat map.",
      logo: BottleNetes,
      style:
        "col-span-3 row-span-4 bg-linear-to-br from-slate-400 from-40% to-cyan-900",
    },
    {
      type: "Collaboration",
      name: "YAP",
      slogan: "Your Adaptive Persona",
      description:
        "Practice your communication skills in different scenarios such as job interview, dating or casual with friends and family. Turn those awkward silence into productive and enjoyable conversations.",
      logo: YAP,
      style:
        "col-start-4 col-span-2 row-span-3 bg-linear-to-br from-slate-400 from-40% to-violet-900",
    },
    {
      type: "Collaboration",
      name: "Attune",
      slogan: "Build good habits with great vibes",
      description:
        "A Spotify integrated habit builder. A lot of effort is needed when building good habits, music that fits the mood will definitely help when charting out that roadmap to become the best version of yourself.",
      logo: Attune,
      style:
        "col-start-4 col-span-2 row-start-4 row-span-2 bg-linear-to-br from-slate-400 from-40% to-teal-900",
    },
    {
      type: "Collaboration",
      name: "ArmaDollar",
      slogan: "Save you an arm an a tail!",
      description:
        "A budget management and subscriptions tracker. ArmaDollar helps you keeping track of your expense as well as recurring subscriptions so that so don't need to wonder where your dollars have been.",
      logo: ArmaDollar,
      style:
        "col-span-2 row-start-5 row-span-2 bg-linear-to-br from-slate-400 from-40% to-pink-900",
    },
    {
      type: "Solo",
      name: "Clockin'",
      slogan: "Simpler Management",
      description:
        "A must-have tool for managers. Record your employee's information such as account numbers and hours worked,... All in one place!",
      logo: Clockin,
      style:
        "col-start-3 col-span-3 row-start-6 bg-linear-to-br from-slate-400 from-40% to-sky-900",
    },
    {
      type: "Solo",
      name: "Portfolio",
      slogan: "Introduction from me!",
      description:
        "Believe it or not, this website itself is also a project. Not a lot of functionalities but the experiences is priceless and fun!",
      logo: Portfolio,
      style:
        "col-span-3 row-start-7 bg-linear-to-br from-slate-400 from-40% to-amber-900",
    },
    {
      type: "",
      name: "Coming soon...",
      slogan: "",
      description: "Stay tuned for incoming projects!",
      logo: "",
      style:
        "col-start-4 col-span-2 row-start-7 bg-linear-to-br from-slate-400 from-40% to-slate-700",
    },
  ];

  const blankGridPosition = ["col-start-3 row-start-5"];

  return (
    <div
      id="projects-container"
      className="mt-40 w-4/5 max-w-[1920px] place-self-center rounded-2xl bg-slate-900/20 pb-8"
    >
      <h1
        id="projects-shortcut"
        className="pt-8 pb-10 text-8xl font-semibold font-stretch-125%"
      >
        Projects
      </h1>
      <div
        id="projects"
        className="group grid w-[95%] grid-cols-5 grid-rows-7 gap-2 place-self-center"
      >
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`relative h-full rounded-2xl border border-slate-400 transition duration-300 group-hover:scale-95 group-hover:opacity-70 hover:z-10 hover:scale-110 hover:opacity-100 ${project.style}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.logo})`,
                  opacity: 0.05,
                }}
              />
              <div className="flex h-full flex-col py-10 transition-opacity duration-300 not-hover:opacity-100 group-hover:opacity-0">
                <h4 className="z-10 text-3xl font-stretch-120%">
                  {project.type}
                </h4>
                <div className="z-10 h-full place-content-center">
                  <h2 className="text-7xl font-semibold font-stretch-125%">
                    {project.name}
                  </h2>
                  <p className="text-xl">{project.slogan}</p>
                </div>
              </div>
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-10 text-2xl opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="pb-3 text-7xl font-semibold font-stretch-125%">
                  {project.name}
                </p>
                <p>{project.description}</p>
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
  );
};

export default ProjectsContainer;
