import { useRef, useState, useEffect, useCallback } from "react";

// Lucide Icons
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

// Types
import { HorizontalScrollProps } from "../types/propTypes";

const HorizontalScroll = ({ dataset }: HorizontalScrollProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dataset && dataset.length > 0) {
      setLoading(false);
    }
  }, [dataset]);

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
      const scrollAmount = scrollRef.current.clientWidth - 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => checkScrollPosition(), 150);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full">
      {/* Scroll Left Button */}
      {canScrollLeft && (
        <button className="arrows left-0" onClick={() => scroll("left")}>
          <ChevronLeftCircle className="arrows-styles" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="project-tech-scroll min-xl:scrollbar-hidden"
      >
        {dataset && dataset.length > 0 ? (
          dataset.map((data, index) => {
            return (
              <div key={index} className="project-tech-scroll-button">
                <img
                  src={data.icon}
                  alt={`${data.name} Icon`}
                  className="size-10 rounded-md"
                />
                <p className="body">{data.name}</p>
              </div>
            );
          })
        ) : (
          <p>No Data Available</p>
        )}
      </div>
      {/* Scroll Right Button */}
      {canScrollRight && (
        <button className="arrows right-0" onClick={() => scroll("right")}>
          <ChevronRightCircle className="arrows-styles" />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroll;
