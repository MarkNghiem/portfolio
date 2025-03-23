import { Tech } from "./dataTypes";
import { Resource, Project } from "./dataTypes";

/**
 * PropTypes for NavBar Components
 */
export interface NavBarProps {
  /** A function that takes an id to anchor the scroll destinations when a NavBar's button is clicked */
  scrollTo: (id: string) => void;
}

/**
 * PropTypes for AboutContainer and its Components
 */
export interface AboutProps {
  /** A function definition to send an email to my address when a certain button is clicked */
  handleEmail: () => void;
}

/**
 * PropTypes for Tech Components
 * @template Tech An Object contains information about a technology
 */
export interface TechProps {
  /** A list of Technologies */
  dataset: Tech[];
}

/**
 * PropTypes for Project-FrontSide Component
 * @template Projects An Object contains information about a Project
 */
export interface ProjectFrontSideProps {
  /** A Project Object Literal */
  project: Project;
  /** Index Number from Projects List */
  index1: number;
  /** 'flipped' State, initial value is null */
  flipped: number | null;
  /** A Function that takes an index number to set the Flipped Project Card */
  handleFlip: (index: number) => void;
}

/**
 * PropTypes for Projects-Resources Component
 * @template Resource An Object contains resource for a Project
 */
export interface ProjectResourcesProps {
  /** A list of Resources for each Project */
  resources: Resource[];
  /** Index Number from Projects List */
  index1: number;
  /** Name of a Project */
  projectName: string;
}

/**
 * PropTypes for Projects-BackSide Component
 * @template Projects An Object contains information about a Project
 */
export interface ProjectBackSideProps {
  /** A Project Object Literal */
  project: Project;
  /** Index Number from Projects List */
  index1: number;
  /** 'flipped' State, initial value is null */
  flipped: number | null;
  /** Set State Action for 'flipped' State */
  setFlipped: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface HorizontalScrollProps {
  dataset: Tech[] | undefined
}