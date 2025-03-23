import { IconType } from "react-icons";

/**
 * Type for Tech Objects
 * @property {string} name - Name of tech
 * @property {string} url - Link to tech page
 * @property {string} label - Label for tech
 * @property {string} icon - Icon for tech
 */
export interface Tech {
  name: string;
  url: string;
  label: string;
  icon: string;
}

/**
 * Type for Resource Objects
 * @property {string} type - Type of Resource
 * @property {string} url - Link to Resource
 * @property {IconType} icon - Icon for Resource
 */
export interface Resource {
  type: string;
  url: string;
  icon: IconType;
}

/**
 * Type for Project Objects
 * @property {string} type - Type of Project
 * @property {string} name - Name of Project
 * @property {string} slogan - Slogan of Project
 * @property {string} description - Description of Project
 * @property {string} background - Background for Project
 * @property {Resource[]} resources - A list of Resources for Project
 * @property {string} style - Inline style for Project
 */
export interface Project {
  type: string;
  name: string;
  slogan: string;
  description: string;
  background: string;
  resources: Resource[];
  style: string;
}

/**
 * Type for Back Side of each Project
 * @property {string} name - Name of Project
 * @property {string} summary - Summary of Project
 * @property {string[]} features - A list of Features for a Project
 * @property {Tech[] | undefined} technologies - A list of Technologies for a Project
 * @property {Resource[]} resources - A list of Resources for a Project
 */
export interface ProjectBackSideDetail {
  name: string;
  summary: string;
  features: string[];
  technologies: Tech[] | undefined;
  resources: Resource[];
}
