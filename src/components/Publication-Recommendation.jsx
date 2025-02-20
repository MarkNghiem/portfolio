import { useState, useEffect } from "react";
import {
  recommendations3xl1,
  recommendations3xl2,
  recommendations3xl3,
  title3xl,
} from "../assets/styles";

const Recommendation = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useEffect(() => {
    const divTimer = setTimeout(() => {
      setDivVisible(true);
    }, 6000);

    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 6400);

    return () => {
      clearTimeout(divTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div
      id="recommendations"
      className={`rounded-2xl bg-slate-900/20 pb-8 shadow-2xl shadow-slate-900/50 transition duration-1000 ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} ${recommendations3xl1}`}
    >
      <div
        id="recommendations-content"
        className={`h-full transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1
          className={`py-8 text-3xl font-semibold font-stretch-115% ${title3xl}`}
        >
          Recommendations
        </h1>
        <div
          className={`h-[70dvh] max-h-[70dvh] w-[95%] place-content-center place-self-center rounded-2xl bg-linear-to-br from-slate-900/30 to-amber-900/20 ${recommendations3xl2}`}
        >
          <h1 className={`text-xl font-semibold ${recommendations3xl3}`}>
            Coming soon...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
