import { useEffect, useState } from 'react';

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

const TechStack = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

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
      className={`col-span-3 row-span-3 rounded-2xl bg-slate-900/20 transition-all duration-1000 ease-out ${divVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
    >
      <div id="tech-stack-content" className={`transition-opacity duration-1000 ease-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="mt-5 text-7xl font-semibold font-stretch-120%">
          Tech Stacks
        </h1>
        <h3 className="mt-8 mb-4 text-3xl font-semibold">
          Programming Languages
        </h3>
        <div
          id="lang-button"
          className="flex justify-center gap-2 place-self-center"
        >
          {langs.map((lang) => {
            return (
              <a
                href={lang.url}
                key={lang.name}
                title={lang.label}
                aria-label={lang.label}
              >
                <button className="m-0.5 flex cursor-pointer items-center justify-start rounded-xl bg-slate-900/20 px-2 py-1.5 transition-opacity duration-200 hover:opacity-80 active:opacity-90">
                  <img src={lang.icon} className="mr-1.5 size-10 p-1" />
                  {lang.name}
                </button>
              </a>
            );
          })}
        </div>
        <h3 className="mt-8 mb-4 text-3xl font-semibold">
          Frameworks and Technologies
        </h3>
        <div
          id="tech-button"
          className="flex w-[90%] flex-wrap gap-2 place-self-center"
        >
          {techs.map((tech) => {
            return (
              <a
                href={tech.url}
                key={tech.name}
                title={tech.label}
                aria-label={tech.label}
              >
                <button className="m-0.5 flex cursor-pointer items-center justify-start rounded-xl bg-slate-900/20 px-2 py-1.5 transition-opacity duration-200 hover:opacity-80 active:opacity-90">
                  <img src={tech.icon} className="mr-1.5 size-10 p-1" />
                  {tech.name}
                </button>
              </a>
            );
          })}
        </div>
        <h3 className="mt-8 mb-4 text-3xl font-semibold">Others</h3>
        <div id="other-button" className="flex justify-center gap-2">
          {others.map((other) => {
            return (
              <a
                href={other.url}
                key={other.name}
                title={other.label}
                aria-label={other.label}
              >
                <button className="m-0.5 flex cursor-pointer items-center justify-start rounded-xl bg-slate-900/20 px-2 py-1.5 transition-opacity duration-200 hover:opacity-80 active:opacity-90">
                  <img src={other.icon} className="mr-1.5 size-10 p-1" />
                  {other.name}
                </button>
              </a>
            );
          })}
        </div>
        <h1 className="mt-8 text-5xl font-semibold font-stretch-120%">
          And more to come...
        </h1>
      </div>
    </div>
  );
};

export default TechStack;
