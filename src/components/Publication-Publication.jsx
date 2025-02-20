// Publications Section - Containing article and video featuring me and the products of the group

import { useState, useEffect } from "react";

import {
  publications3xl1,
  publications3xl2,
  publications3xl3,
  publications3xl4,
  publications3xl5,
  publications3xl6,
  publications3xl7,
  title3xl,
  subtitle3xl,
} from "../assets/styles";

const Publications = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 5900);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 6300);

    return () => {
      clearTimeout(divTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const publications = [
    {
      type: "Tech Talk - Kubernetes",
      description:
        "A high-level explaination of Kubernetes, its origin, components, usages and other tools to pair with it.",
      url: "https://www.youtube.com/watch?v=gO89hqj5kXk&t=15s",
      host: "Hosted by: Mark Nghiem, William Dalessandro",
      collaboratedWith: "Special thanks to: Codesmith, Bractlet",
    },
    {
      type: "BottleNetes - Article",
      description:
        "Introduction of BottleNetes. Launched in January 2025, learn more about our open-source product, the problems we are trying to solve and its features as well as future plans.",
      url: "https://medium.com/@bottlenetes/bottlenetes-simplifying-kubernetes-management-f91118f07f1c",
      host: "Authors: Zoe Xu, Quin Kirsten, Julie Hoagland-Sorensen",
      collaboratedWith: "Collaborated with: BottleNetes, OSLabs",
    },
  ];

  return (
    <div
      id="releases"
      className={`rounded-2xl bg-slate-900/20 pb-8 shadow-2xl shadow-slate-900/50 transition duration-1000 ease-out ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} ${publications3xl1}`}
    >
      <div
        id="publications-content"
        className={`transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1
          className={`py-8 text-5xl font-semibold font-stretch-115% ${title3xl}`}
        >
          Publications
        </h1>
        <div
          className={`flex h-[70dvh] w-[95%] flex-col gap-5 place-self-center overflow-scroll rounded-2xl bg-linear-to-br from-slate-900/30 to-amber-900/20 px-3 py-5 ${publications3xl2}`}
        >
          {publications.map((publication, index) => {
            return (
              <div
                key={index}
                id="title"
                className="relative w-[97%] place-self-center rounded-2xl border border-slate-300 bg-slate-300/20 shadow-xl shadow-black/30"
              >
                <h4 className={`py-5 text-xl font-semibold ${subtitle3xl}`}>
                  {publication.type}
                </h4>
                <p className={`px-5 text-start ${publications3xl3}`}>
                  {publication.description}
                </p>
                <div className={`px-5 pt-5 pb-2 text-sm ${publications3xl4}`}>
                  <a
                    href={publication.url}
                    title={publication.type}
                    aria-label={publication.type}
                    className={`text-lg font-semibold transition-colors duration-300 hover:text-amber-700 ${publications3xl5}`}
                  >
                    Learn More
                  </a>
                  <div className={`pt-5 text-start italic ${publications3xl6}`}>
                    <p className={`pb-2 ${publications3xl7}`}>
                      {publication.host}
                    </p>
                    <p>{publication.collaboratedWith}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Publications;
