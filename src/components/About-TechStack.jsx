// 'Tech Stack' Section - Contain the stack that I have experience in

import { useEffect, useState } from "react";

import {
  techStack3xl1,
  techStack3xl2,
  techStack3xl3,
  techStack3xl4,
  displayBlock3xl,
  title3xl,
  subtitle3xl,
  ender3xl,
} from "../assets/styles";

// Icons imported from 'svg' folder
import JavaScriptIcon from "../../public/svg/javascript.svg";
import TypeScriptIcon from "../../public/svg/typescript.svg";
import ReactIcon from "../../public/svg/react.svg";
import NodeIcon from "../../public/svg/nodedotjs.svg";
import ExpressIcon from "../../public/svg/express.svg";
import PostgreSQLIcon from "../../public/svg/postgresql.svg";
import MongoDBIcon from "../../public/svg/mongodb.svg";
import WebpackIcon from "../../public/svg/webpack.svg";
import ViteIcon from "../../public/svg/vite.svg";
import DockerIcon from "../../public/svg/docker.svg";
import KubernetesIcon from "../../public/svg/kubernetes.svg";
import AWSIcon from "../../public/svg/amazonwebservices.svg";
import ReduxIcon from "../../public/svg/redux.svg";
import ReactRouterIcon from "../../public/svg/reactrouter.svg";
import PassportIcon from "../../public/svg/passport.svg";
import TailwindCSSIcon from "../../public/svg/tailwindcss.svg";
import SassIcon from "../../public/svg/sass.svg";
import ChartJSIcon from "../../public/svg/chartdotjs.svg";
import ZustandIcon from "../../public/svg/zustand.svg";
import SequelizeIcon from "../../public/svg/sequelize.svg";
import LucideIcon from "../../public/svg/lucide.svg";
import MUIIcon from "../../public/svg/mui.svg";
import AxiosIcon from "../../public/svg/axios.svg";
import PrometheusIcon from "../../public/svg/prometheus.svg";
import IstioIcon from "../../public/svg/istio.svg";
import HelmIcon from "../../public/svg/helm.svg";
import JestIcon from "../../public/svg/jest.svg";
import VercelIcon from "../../public/svg/vercel.svg";
import HTMLIcon from "../../public/svg/html5.svg";
import CSSIcon from "../../public/svg/css.svg";
import JSONIcon from "../../public/svg/json.svg";
import YAMLIcon from "../../public/svg/yaml.svg";
import ExternalLink from "../../public/svg/external-link.svg";

const TechStack = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 5700);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 6100);

    return () => {
      clearTimeout(divTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  // Programming Language list
  const langs = [
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      label: "JavaScript MDN Documentation",
      icon: JavaScriptIcon,
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
      label: "TypeScript Homepage",
      icon: TypeScriptIcon,
    },
  ];

  // Framework and Technology list
  const techs = [
    {
      name: "React",
      url: "https://react.dev/",
      label: "React Homepage",
      icon: ReactIcon,
    },
    {
      name: "Node.js",
      url: "https://nodejs.org/en",
      label: "Node.js Homepage",
      icon: NodeIcon,
    },
    {
      name: "Express.js",
      url: "https://expressjs.com/",
      label: "Express.js Homepage",
      icon: ExpressIcon,
    },
    {
      name: "PostgreSQL",
      url: "https://www.postgresql.org/",
      label: "PostgreSQL Homepage",
      icon: PostgreSQLIcon,
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      label: "MongoDB Homepage",
      icon: MongoDBIcon,
    },
    {
      name: "Webpack",
      url: "https://webpack.js.org/",
      label: "Webpack Homepage",
      icon: WebpackIcon,
    },
    {
      name: "Vite",
      url: "https://vite.dev/",
      label: "Vite Homepage",
      icon: ViteIcon,
    },
    {
      name: "Docker",
      url: "https://www.docker.com/",
      label: "Docker Homepage",
      icon: DockerIcon,
    },
    {
      name: "Kubernetes",
      url: "https://kubernetes.io/",
      label: "Kubernetes Homepage",
      icon: KubernetesIcon,
    },
    {
      name: "AWS",
      url: "https://aws.amazon.com/",
      label: "AWS Homepage",
      icon: AWSIcon,
    },
    {
      name: "Redux",
      url: "https://redux.js.org/",
      label: "Redux Homepage",
      icon: ReduxIcon,
    },
    {
      name: "React Router",
      url: "https://reactrouter.com/",
      label: "React Router Homepage",
      icon: ReactRouterIcon,
    },
    {
      name: "Lucide",
      url: "https://lucide.dev/",
      label: "Lucide Homepage",
      icon: LucideIcon,
    },
    {
      name: "MaterialUI",
      url: "https://mui.com/",
      label: "MaterialUI Homepage",
      icon: MUIIcon,
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      label: "Tailwind CSS Homepage",
      icon: TailwindCSSIcon,
    },
    {
      name: "Sass",
      url: "https://sass-lang.com/",
      label: "Sass Homepage",
      icon: SassIcon,
    },
    {
      name: "Chart.js",
      url: "https://www.chartjs.org/",
      label: "Chart.js Homepage",
      icon: ChartJSIcon,
    },
    {
      name: "Passport.js",
      url: "https://www.passportjs.org/",
      label: "Passport.js Homepage",
      icon: PassportIcon,
    },
    {
      name: "Axios",
      url: "https://axios-http.com/docs/intro",
      label: "Axios Homepage",
      icon: AxiosIcon,
    },
    {
      name: "Zustand",
      url: "https://zustand.docs.pmnd.rs/getting-started/introduction",
      label: "Zustand Homepage",
      icon: ZustandIcon,
    },
    {
      name: "Sequelize",
      url: "https://sequelize.org/",
      label: "Sequelize Homepage",
      icon: SequelizeIcon,
    },
    {
      name: "Prometheus",
      url: "https://prometheus.io/",
      label: "Prometheus Homepage",
      icon: PrometheusIcon,
    },
    {
      name: "Helm",
      url: "https://helm.sh/",
      label: "Helm Homepage",
      icon: HelmIcon,
    },
    {
      name: "Istio",
      url: "https://istio.io/",
      label: "Istio Homepage",
      icon: IstioIcon,
    },
    {
      name: "Jest",
      url: "https://jestjs.io/",
      label: "Jest Homepage",
      icon: JestIcon,
    },
    {
      name: "Vercel",
      url: "https://vercel.com/",
      label: "Vercel Homepage",
      icon: VercelIcon,
    },
  ];

  // Other minor techs and languages
  const others = [
    {
      name: "HTML",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      label: "HTML MDN Documentation",
      icon: HTMLIcon,
    },
    {
      name: "CSS",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      label: "CSS MDN Documentation",
      icon: CSSIcon,
    },
    {
      name: "JSON",
      url: "https://www.json.org/json-en.html",
      label: "JSON Homepage",
      icon: JSONIcon,
    },
    {
      name: "YAML",
      url: "https://yaml.org/",
      label: "YAML Homepage",
      icon: YAMLIcon,
    },
  ];

  return (
    <div
      id="tech-stack"
      className={`rounded-2xl pb-8 bg-slate-900/20 shadow-2xl shadow-slate-900/50 transition-all duration-1000 ease-out ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} ${techStack3xl1}`}
    >
      <div
        id="tech-stack-content"
        className={`transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1
          className={`py-8 text-5xl font-semibold font-stretch-115% ${title3xl}`}
        >
          Tech Stacks
        </h1>
        <div
          className={`mx-5 h-[70dvh] overflow-scroll rounded-2xl bg-linear-to-br from-slate-900/20 to-amber-900/30 p-3 ${techStack3xl2}`}
        >
          <h3 className={`mb-4 text-xl font-semibold ${subtitle3xl}`}>
            Programming Languages
          </h3>
          <div
            id="lang-button"
            className="group flex justify-center gap-2 place-self-center"
          >
            {langs.map((lang) => {
              return (
                <a
                  href={lang.url}
                  key={lang.name}
                  title={lang.label}
                  aria-label={lang.label}
                >
                  <button
                    className={`relative m-0.5 flex cursor-pointer items-center justify-start rounded-xl border border-slate-400 bg-slate-900/20 p-4.5 transition duration-200 group-hover:scale-90 group-hover:opacity-90 hover:scale-110 hover:bg-slate-900/30 hover:opacity-100 active:bg-slate-900/40 ${techStack3xl3}`}
                  >
                    <img
                      src={lang.icon}
                      className={`size-10 ${techStack3xl4}`}
                    />
                    <p className={`hidden ${displayBlock3xl}`}>{lang.name}</p>
                    <img
                      src={ExternalLink}
                      className="absolute top-0 right-0 m-0.5 size-4"
                    />
                  </button>
                </a>
              );
            })}
          </div>
          <h3 className={`mt-8 mb-4 text-xl font-semibold ${subtitle3xl}`}>
            Frameworks and Technologies
          </h3>
          <div
            id="tech-button"
            className="group flex flex-wrap justify-center gap-2 place-self-center"
          >
            {techs.map((tech) => {
              return (
                <a
                  href={tech.url}
                  key={tech.name}
                  title={tech.label}
                  aria-label={tech.label}
                >
                  <button
                    className={`relative m-0.5 flex cursor-pointer items-center justify-start rounded-xl border border-slate-400 bg-slate-900/20 p-4.5 transition duration-200 group-hover:scale-90 group-hover:opacity-90 hover:scale-110 hover:bg-slate-900/30 hover:opacity-100 active:bg-slate-900/40 ${techStack3xl3}`}
                  >
                    <img
                      src={tech.icon}
                      className={`size-10 ${techStack3xl4}`}
                    />
                    <p className={`hidden ${displayBlock3xl}`}>{tech.name}</p>
                    <img
                      src={ExternalLink}
                      className="absolute top-0 right-0 m-0.5 size-4"
                    />
                  </button>
                </a>
              );
            })}
          </div>
          <h3 className={`mt-8 mb-4 text-xl font-semibold ${subtitle3xl}`}>
            Others
          </h3>
          <div
            id="other-button"
            className="group flex flex-wrap justify-center gap-2 place-self-center"
          >
            {others.map((other) => {
              return (
                <a
                  href={other.url}
                  key={other.name}
                  title={other.label}
                  aria-label={other.label}
                >
                  <button
                    className={`relative m-0.5 flex cursor-pointer items-center justify-start rounded-xl border border-slate-400 bg-slate-900/20 p-4.5 transition duration-200 group-hover:scale-90 group-hover:opacity-90 hover:scale-110 hover:bg-slate-900/30 hover:opacity-100 active:bg-slate-900/40 ${techStack3xl3}`}
                  >
                    <img
                      src={other.icon}
                      className={`size-10 ${techStack3xl4}`}
                    />
                    <p className={`hidden ${displayBlock3xl}`}>{other.name}</p>
                    <img
                      src={ExternalLink}
                      className="absolute top-0 right-0 m-0.5 size-4"
                    />
                  </button>
                </a>
              );
            })}
          </div>
          <h2 className={`my-8 text-3xl font-semibold font-stretch-115% ${ender3xl}`}>
            And more to come...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
