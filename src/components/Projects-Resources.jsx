import { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

// MUI Components
import { Fade, Popper } from "@mui/material";

// React Icons
import { FaExternalLinkAlt } from "react-icons/fa";

const Resources = ({ resources, index1, projectName }) => {
  const [open, setOpen] = useState({ index1: null, index2: null });
  const [popperID, setPopperID] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  // Debouncing each event to only trigger when hovering over a grid for at least 300ms
  const setDebouncedOpen = useMemo(
    () => debounce((index1, index2) => setOpen({ index1, index2 }), 300),
    [],
  );

  /** A Memoize callback to handle popper open when hovering over a grid
   * When hovered:
   * - Set anchorEl to the current hovered target
   * - Set open to outer and inner index
   * - Set popperID to the 'outerIndex.innerIndex' format
   * Reason for 2 indexes is because it is nested map. 1 for 'projects' array and 1 for 'resources' array nested in each objects in 'projects' array
   */
  const handlePopperOpen = useCallback(
    (event, index1, index2) => {
      setAnchorEl(event.currentTarget);
      setPopperID(`${index1}.${index2}`);
      setDebouncedOpen(index1, index2);
    },
    [setDebouncedOpen],
  );

  /** When stop hovering:
   * - Cancel debounce
   * - Set open and popperID back to initial state
   */
  const handlePopperClose = () => {
    setDebouncedOpen.cancel();
    setAnchorEl(null);
    setOpen({ projectIndex: null, resourceIndex: null });
    setPopperID(null);
  };

  return (
    <div className="project-icon-container">
      {resources?.map((resource, index2) => {
        const Icon = resource.icon;
        return (
          <a key={index2} href={resource.url} aria-label={resource.type}>
            <button
              className="project-button"
              aria-owns={popperID}
              onMouseEnter={(event) => handlePopperOpen(event, index1, index2)}
              onMouseLeave={handlePopperClose}
            >
              <Icon className='project-icon'/>
            </button>
            {anchorEl && (
              <Popper
                id={popperID}
                open={
                  open.index1 === index1 && open.index2 === index2
                }
                anchorEl={anchorEl}
                placement="top-start"
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={200}>
                    <div className="popper-desktop typography-global">
                      <p>{`Visit ${projectName}'s ${resource.type}`}</p>
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

Resources.propTypes = {
  resources: PropTypes.array,
  index1: PropTypes.number,
  projectName: PropTypes.string,
};

export default Resources;
