// Utils
import { populateTech } from '../../utils/populateTech';

const bottleNetes = {
  name: "BottleNetes",
  summary:
    "An ever-improving and maintaining Open-source product. A highly efficient with robust functionalities to manage and monitor Kubernetes Clusters. BottleNetes offers scalable, secured and smart alternative to boost the performance of your container orchestration system with the help of various graph forms and a trained model.",
  features: [
    "A Log In Page for a private and secured session, either with a BottleNetes Account or your own Google or GitHub Account using OAuth.",
    "Intuitive dashboard with a summary of the current cluster.",
    "Options for Auto Refresh and Refresh Frequency Settings.",
    "Color-coded Heatmap for an overview of each pod's current performance with detailed metrics, including distinctive meters such as CPU or Memory Usage as well as Latency.",
    "Interactive functionalities for pods including Restart, View Logs, Modify Replicas and more!",
    "3 real-time data graphs for Node and/or Pod levels for tracking, monitoring and managing Nodes or Individual Pod",
    "Helpful AI Assistant to gain insights and diagnostics to optimize your cluster's performance!",
    "Tired of the color scheme? Switch to Dark Mode!",
  ],
  technologies: [],
};

populateTech(
  [
    "javascript",
    "typescript",
    "react",
    "node.js",
    "express.js",
    "postgresql",
    "vite",
    "docker",
    "kubernetes",
    "react router",
    "lucide",
    "materialui",
    "tailwind css",
    "chart.js",
    "passport.js",
    "axios",
    "zustand",
    "sequelize",
    "prometheus",
    "helm",
    "istio",
    "vercel",
    "postman",
    "openai api",
    "supabase",
    "html",
    "css",
    "git (version control)",
    "excalidraw (wireframing)",
  ],
  bottleNetes.technologies,
);