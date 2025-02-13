import { useState, useEffect } from 'react';

const Recommendation = () => {
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

  return (
    <div
      id="recommendations"
      className={`col-span-5 rounded-2xl bg-slate-900/20 shadow-2xl shadow-slate-900/50 transition duration-1000 ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="recommendations-content"
        className={`transition-opacity duration-1000 ease-out h-full ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="py-8 text-7xl font-semibold font-stretch-125%">
          Recommendations
        </h1>
        <div className='bg-linear-to-br from-slate-900/30 to-amber-900/20 rounded-2xl w-[95%] place-self-center h-[80%] place-content-center'>
          <h1 className='text-5xl font-semibold font-stretch-125% py-10'>Coming soon...</h1>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;