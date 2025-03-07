// Recommendations Section - Recommendations from LinkedIn

import { useState } from "react";

// Custom Hooks
import useSmoothFadeInTransition from '../hooks/useSmoothFadeInTransition';

const Recommendation = () => {
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  // Timer to create smooth fade in effect for each components
  useSmoothFadeInTransition(setDivVisible, setContentVisible, 6000, 6400);

  return (
    <div
      id="recommendations"
      className={`scrollbar div-background div-effect rec-desktop-layout ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="recommendations-content"
        className={`col-flex h-full content-effect ${contentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <h1
          className='pb-8 rec-title'
        >
          Recommendations
        </h1>
        <div
          className='inner-div rec-inner'
        >
          <h1 className='subtitle'>
            Coming soon...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
