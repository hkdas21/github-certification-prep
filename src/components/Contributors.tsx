import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, User } from "lucide-react";

interface Contributor {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  social?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const contributors: Contributor[] = [
  {
    name: "Contributor 1",
    title: "Title / Role",
    avatar: "",
    bio: "Brief bio description goes here.",
    social: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Contributor 2",
    title: "Title / Role",
    avatar: "",
    bio: "Brief bio description goes here.",
    social: {
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Contributor 3",
    title: "Title / Role",
    avatar: "",
    bio: "Brief bio description goes here.",
    social: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Contributor 4",
    title: "Title / Role",
    avatar: "",
    bio: "Brief bio description goes here.",
    social: {
      github: "#",
      twitter: "#",
    },
  },
];

export const Contributors = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Contributors
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Meet the experts who helped create this learning content.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contributors.map((contributor, index) => (
          <motion.div
            key={contributor.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300">
              {/* Avatar */}
              <div className="relative mx-auto w-20 h-20 mb-4">
                {contributor.avatar ? (
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-full h-full rounded-full object-cover ring-2 ring-border group-hover:ring-primary/30 transition-all"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-secondary ring-2 ring-border group-hover:ring-primary/30 transition-all flex items-center justify-center">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="font-semibold text-foreground mb-1">
                {contributor.name}
              </h3>
              <p className="text-sm text-primary mb-3">{contributor.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {contributor.bio}
              </p>

              {/* Social Links */}
              {contributor.social && (
                <div className="flex items-center justify-center gap-3">
                  {contributor.social.github && (
                    <a
                      href={contributor.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {contributor.social.twitter && (
                    <a
                      href={contributor.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {contributor.social.linkedin && (
                    <a
                      href={contributor.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
