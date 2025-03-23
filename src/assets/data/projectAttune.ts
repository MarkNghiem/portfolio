// Data
import { projects } from "./projects";

// Utils
import { populateTech } from "../../utils/populateTech";

// Types
import { ProjectBackSideDetail } from "../../types/dataTypes";

const projectAttune: ProjectBackSideDetail = {
  name: "Attune",
  summary:
    "A Web Application for building good habit with the help of music that fits the mood. Empowered and motivating while working out, or inspiring and calm when studying.",
  features: [
    "Private session with a User Account.",
    "Songs selected from more than 100 genres on Spotify with different parameters such as Energy, Danceability and Valence.",
    "Create, Edit or Remove daily habits from the database.",
    "AI Assistant helps you select a song that fits your mood.",
  ],
  technologies: populateTech([
    "javascript",
    "react",
    "node.js",
    "express.js",
    "postgresql",
    "vite",
    "tailwind css",
    "postman",
    "openai",
    "supabase",
    "spotify",
    "html",
    "css",
    "git",
    "excalidraw",
    "trello",
  ]),
  resources: projects[2].resources,
};

export default projectAttune;
