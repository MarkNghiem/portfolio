import { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

// MUI Components
import { Fade, Popper } from "@mui/material";

// React Icons
import { FaExternalLinkAlt } from "react-icons/fa";

const Resources = ({ resources, index1, projectName }) => {
  const [open, setOpen] = useState({ projectIndex: null, resourceIndex: null });
  const [popperID, setPopperID] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  /** A Memoize callback to handle popper open when hovering over a grid
   * When hovered:
   * - Set anchorEl to the current hovered target
   * - Set open to outer and inner index
   * - Set popperID to the 'outerIndex.innerIndex' format
   * Reason for 2 indexes is because it is nested map. 1 for 'projects' array and 1 for 'resources' array nested in each objects in 'projects' array
   */
  const handlePopperOpen = useCallback((event, projectIndex, resourceIndex) => {
    setAnchorEl(event.currentTarget);
    setOpen({ projectIndex, resourceIndex });
    setPopperID(`${projectIndex}.${resourceIndex}`);
  }, []);

  // Debouncing each event to only trigger when hovering over a grid for at least 500ms
  const debouncedOpen = useMemo(
    () => debounce(handlePopperOpen, 500),
    [handlePopperOpen],
  );

  /** When stop hovering:
   * - Cancel debounce
   * - Set open and popperID back to initial state
   */
  const handlePopperClose = () => {
    debouncedOpen.cancel();
    setAnchorEl(null);
    setOpen({ projectIndex: null, resourceIndex: null });
    setPopperID(null);
  };

  return (
    <div className="project-icon-container">
      {resources?.map((resource, index2) => {
        return (
          <a key={index2} href={resource.url} aria-label={resource.type}>
            <button
              className="project-button"
              aria-owns={popperID}
              onMouseEnter={(e) => handlePopperOpen(e, index1, index2)}
              onMouseLeave={handlePopperClose}
            >
              {resource.icon}
            </button>
            <Popper
              id={popperID}
              open={
                open.projectIndex === index1 && open.resourceIndex === index2
              }
              anchorEl={anchorEl}
              placement="top-start"
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={100}>
                  <div className="popper-desktop typography-global">
                    <p>{`Visit ${projectName}'s ${resource.type}`}</p>
                    <FaExternalLinkAlt className="icons" />
                  </div>
                </Fade>
              )}
            </Popper>
          </a>
        );
      })}
    </div>
  );
};

Resources.propTypes = {
  resources: PropTypes.array,
  index1: PropTypes.number,
  projectName: PropTypes.string,
};

export default Resources;
