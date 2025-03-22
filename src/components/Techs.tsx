// Reusable Tech Component

import { useState, useMemo, useCallback } from "react";
import debounce from "lodash.debounce";

// MUI Components
import { Popper, Fade } from "@mui/material";

// React Icons
import { FaExternalLinkAlt } from "react-icons/fa";

// Types
import { TechProps } from "../types/types";

const Techs = ({ dataset }: TechProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState<string | number | null>(null);
  const [popperID, setPopperID] = useState<string | number | null>(null);

  // Debounce the handler to only run when hovered for at least 300ms
  const setDebouncedOpen = useMemo(
    () => debounce((index) => setOpen(index), 300),
    [],
  );

  /**
   * A memoized callback for handling popper appearance when hovering over a button.
   *
   * When hovered:
   * - Set anchorEl to the current hovered object
   * - Set open and popperID to the index of current hovered object
   */
  const handlePopperOpen = useCallback(
    (event: React.MouseEvent<HTMLElement | null>, index: number | string) => {
      setAnchorEl(event.currentTarget);
      setPopperID(index);
      setDebouncedOpen(index);
    },
    [setDebouncedOpen],
  );

  // When not hovering anymore, cancel debounce, set anchorEl, open and popperID to their initial states
  const handlePopperClose = () => {
    setDebouncedOpen.cancel();
    setAnchorEl(null);
    setOpen(null);
    setAnchorEl(null);
  };

  return (
    <div id={`${dataset}-button`} className="tech-button-group group">
      {dataset.map((data, index) => {
        return (
          <a
            href={data.url}
            key={index}
            title={data.label}
            aria-label={data.label}
          >
            <button
              className="tech-button"
              aria-owns={popperID ? String(popperID) : undefined}
              onMouseEnter={(event) => handlePopperOpen(event, `lang.${index}`)}
              onMouseLeave={handlePopperClose}
            >
              <img
                src={data.icon}
                alt={data.name}
                className="tech-button-image"
              />
              <p className="tech-button-description">{data.name}</p>
              <FaExternalLinkAlt className="icons" />
            </button>
            {anchorEl && (
              <Popper
                id={popperID ? String(popperID) : undefined}
                open={open === `lang.${index}`}
                anchorEl={anchorEl}
                placement="top-start"
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={200}>
                    <div className="typography-global popper-desktop">
                      {data.label}
                      <FaExternalLinkAlt className="icons" />
                    </div>
                  </Fade>
                )}
              </Popper>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default Techs;
