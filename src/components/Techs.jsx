// Reusable Tech Component

import { useState, useMemo, useCallback } from "react";
import debounce from "lodash.debounce";
import PropTypes from "prop-types";

// MUI Components
import { Popper, Fade } from "@mui/material";

// React Icons
import { FaExternalLinkAlt } from "react-icons/fa";

const Techs = ({ dataset }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(null);
  const [popperID, setPopperID] = useState(null);

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
    (event, index) => {
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
              aria-owns={popperID}
              onMouseEnter={(event) => handlePopperOpen(event, `lang.${index}`)}
              onMouseLeave={handlePopperClose}
            >
              <img src={data.icon} alt={data.name} className="tech-button-image" />
              <p className="tech-button-description">{data.name}</p>
              <FaExternalLinkAlt className="icons" />
            </button>
            {anchorEl && (
              <Popper
                id={popperID}
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

Techs.propTypes = {
  dataset: PropTypes.array,
};

export default Techs;
