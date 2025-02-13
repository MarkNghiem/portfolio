import { useState, useEffect } from "react";

const Publications = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

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
      className={`col-span-4 rounded-2xl bg-slate-900/20 pb-8 shadow-2xl shadow-slate-900/50 transition duration-1000 ease-out ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="publications-content"
        className={`transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="py-8 text-7xl font-semibold font-stretch-125%">
          Publications
        </h1>
        <div className="flex w-[95%] flex-col gap-5 place-self-center rounded-2xl bg-linear-to-br from-slate-900/30 to-amber-900/20 p-3 py-10">
          {publications.map((publication, index) => {
            return (
              <div
                key={index}
                id="title"
                className="relative w-[97%] place-self-center rounded-2xl border border-slate-300 bg-slate-300/20 shadow-xl shadow-black/30"
              >
                <h4 className="py-5 text-3xl font-semibold">
                  {publication.type}
                </h4>
                <p className="px-5 py-5 text-start text-xl">
                  {publication.description}
                </p>
                <div className="flex items-end justify-between px-5 pt-5 pb-2">
                  <a
                    href={publication.url}
                    title={publication.type}
                    aria-label={publication.type}
                    className="text-xl font-semibold transition-colors duration-300 hover:text-amber-700"
                  >
                    Learn More
                  </a>
                  <div className="text-end italic">
                    <p>{publication.host}</p>
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
