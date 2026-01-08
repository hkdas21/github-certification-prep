export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "blue" | "green" | "purple" | "orange" | "cyan";
  duration: string;
  modules: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export const tracks: Track[] = [
  {
    id: "foundations",
    title: "GitHub Foundations",
    description: "Master the fundamentals of GitHub including repositories, branches, commits, and pull requests. Perfect for beginners starting their journey.",
    icon: "BookOpen",
    color: "blue",
    duration: "8 hours",
    modules: 6,
    difficulty: "Beginner",
  },
  {
    id: "actions",
    title: "GitHub Actions",
    description: "Learn to automate your workflows with GitHub Actions. Build CI/CD pipelines, automate testing, and streamline your development process.",
    icon: "Zap",
    color: "green",
    duration: "12 hours",
    modules: 8,
    difficulty: "Intermediate",
  },
  {
    id: "copilot",
    title: "GitHub Copilot",
    description: "Master AI-powered development with GitHub Copilot. Learn prompt engineering, IDE integration, and best practices for AI-assisted coding.",
    icon: "Sparkles",
    color: "cyan",
    duration: "10 hours",
    modules: 7,
    difficulty: "Intermediate",
  },
  {
    id: "security",
    title: "GitHub Advanced Security",
    description: "Protect your code with advanced security features. Learn about code scanning, secret detection, and dependency management.",
    icon: "Shield",
    color: "purple",
    duration: "10 hours",
    modules: 7,
    difficulty: "Advanced",
  },
  {
    id: "admin",
    title: "GitHub Administration",
    description: "Master enterprise-level GitHub administration. Configure organizations, manage permissions, and implement governance policies.",
    icon: "Settings",
    color: "orange",
    duration: "14 hours",
    modules: 9,
    difficulty: "Advanced",
  },
];
