import { useCallback, useMemo, useState } from "react";
import debounce from "lodash.debounce";

// MUI Components
import { Fade, Popper } from "@mui/material";

// React Icons
import { FaExternalLinkAlt } from "react-icons/fa";

// Types
import { ProjectResourcesProps } from "../types/propTypes";

/**
 * Interface for 'open' State
 */
interface Open {
  /** Index from Projects List */
  index1: number | null;
  /** Index from Resources List */
  index2: number | null;
}

const Resources = ({
  resources,
  index1,
  projectName,
}: ProjectResourcesProps) => {
  const [open, setOpen] = useState<Open>({ index1: null, index2: null });
  const [popperID, setPopperID] = useState<string | number | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // Debouncing each event to only trigger when hovering over a grid for at least 300ms
  const setDebouncedOpen = useMemo(
    () =>
      debounce(
        (index1: number, index2: number) => setOpen({ index1, index2 }),
        300,
      ),
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
    (
      event: React.MouseEvent<HTMLElement | null>,
      index1: number,
      index2: number,
    ) => {
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
    setOpen({ index1: null, index2: null });
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
              aria-owns={popperID ? String(popperID) : undefined}
              onMouseEnter={(event) => handlePopperOpen(event, index1, index2)}
              onMouseLeave={handlePopperClose}
            >
              <Icon className="project-icon" />
            </button>
            {anchorEl && (
              <Popper
                id={popperID ? String(popperID) : undefined}
                open={open.index1 === index1 && open.index2 === index2}
                anchorEl={anchorEl}
                placement="top-start"
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={200}>
                    <div className="popper-desktop typography-global">
                      <p>{`Visit ${projectName}'s ${resource.type.split(" ").slice(1).join(" ")}`}</p>
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

export default Resources;
