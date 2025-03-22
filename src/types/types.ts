// Props

/**
 * Props for AboutContainer and its Components
 * @template handleEmail A function definition with no param and no return value 
 */
export interface AboutProps {
  /** A function definition to send an email to my address when a certain button is clicked */
  handleEmail: () => void,
}

/**
 * Props for Tech Components
 * @template Tech An Object contains information about a technology
 */
export interface TechProps {
  /** A list of Technologies */
  dataset: Tech[]
}

// Data

/**
 * Type for Tech Objects
 * @property {string} name - Name of tech
 * @property {string} url - Link to tech page
 * @property {string} label - Label for tech
 * @property {string} icon - Icon for tech
 */
export interface Tech {
  [key: string]: string
}