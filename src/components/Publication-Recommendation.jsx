import { useState, useEffect } from 'react';

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
      className={`col-span-5 rounded-2xl bg-slate-900/20 shadow-2xl shadow-slate-900/50 transition duration-1000 ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="recommendations-content"
        className={`h-full transition-opacity duration-1000 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="py-8 3xl:text-7xl font-semibold font-stretch-125%">
          Recommendations
        </h1>
        <div className="h-[80%] w-[95%] place-content-center place-self-center rounded-2xl bg-linear-to-br from-slate-900/30 to-amber-900/20">
          <h1 className="py-10 3xl:text-5xl font-semibold font-stretch-125%">
            Coming soon...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;