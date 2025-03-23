// Recommendations Section - Recommendations from LinkedIn

import { Fragment, useEffect, useState, useRef, useCallback } from "react";

// Lucide Icons
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

// Custom Hooks
import useSmoothFadeInTransition from "../hooks/useSmoothFadeInTransition";

// Data
import recs from "../assets/data/rec";

const Recommendation = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [divVisible, setDivVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (recs && recs.length > 0) {
      setLoading(false);
    }
  }, []);

  const checkScrollPosition = useCallback(() => {
    const scrollEl = scrollRef.current;

    if (scrollEl) {
      setCanScrollLeft(scrollEl.scrollLeft > 0);
      setCanScrollRight(
        scrollEl.scrollLeft < scrollEl.scrollWidth - scrollEl.clientWidth,
      );
    }
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;

    if (!scrollEl) return;
    scrollEl.addEventListener("scroll", checkScrollPosition);

    return () => scrollEl.removeEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth + 56;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => checkScrollPosition(), 150);
    }
  };

  // Timer to create smooth fade in effect for each components
  useSmoothFadeInTransition(setDivVisible, setContentVisible, 6000, 6400);

  if (loading) return <div>Loading...</div>;

  return (
    <div
      id="recommendations"
      className={`scrollbar div-background div-effect rec-desktop-layout ${divVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <div
        id="recommendations-content"
        className={`col-flex content-effect max-h-full ${contentVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className='rec-title-container'>
          {/* Scroll Left Button */}
          {canScrollLeft && (
            <button className="arrows left-0" onClick={() => scroll("left")}>
              <ChevronLeftCircle className="arrows-styles" />
            </button>
          )}
          <h1 className="rec-title">Recommendations</h1>
          {/* Scroll Right Button */}
          {canScrollRight && (
            <button className="arrows right-0" onClick={() => scroll("right")}>
              <ChevronRightCircle className="arrows-styles" />
            </button>
          )}
        </div>
        <div className="inner-div rec-inner scrollbar-hidden" ref={scrollRef}>
          {recs.map((rec, index1) => {
            return (
              <div key={index1} className="recs-display">
                <div className="rec-person content-shadow">
                  <img
                    src={rec.img}
                    alt={`Portrait of ${rec.name}`}
                    className="rec-person-avatar"
                  />
                  <div className="text-end">
                    <h4 className="rec-inner-title">{rec.name}</h4>
                    <h5 className="rec-inner-subtitle">{rec.title}</h5>
                  </div>
                </div>
                <div className="rec-body content-shadow">
                  {!rec.body ? (
                    <p>Unable to render data`</p>
                  ) : (
                    rec.body.split("\n").map((line, index2) => {
                      return (
                        <Fragment key={index2}>
                          <p className="my-5 text-start">{line}</p>
                        </Fragment>
                      );
                    })
                  )}
                  <p className="mt-10 pb-5 text-end italic">{rec.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
