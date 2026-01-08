import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Zap, Shield, Settings, Clock, Layers, ArrowRight, Sparkles } from "lucide-react";
import { Track } from "@/content/tracks";
import { cn } from "@/lib/utils";

const iconMap = {
  BookOpen,
  Zap,
  Shield,
  Settings,
  Sparkles,
};

const colorVariants = {
  blue: "from-github-blue/20 to-github-blue/5 border-github-blue/30 hover:border-github-blue/50",
  green: "from-github-green/20 to-github-green/5 border-github-green/30 hover:border-github-green/50",
  purple: "from-github-purple/20 to-github-purple/5 border-github-purple/30 hover:border-github-purple/50",
  orange: "from-github-orange/20 to-github-orange/5 border-github-orange/30 hover:border-github-orange/50",
  cyan: "from-github-cyan/20 to-github-cyan/5 border-github-cyan/30 hover:border-github-cyan/50",
};

const iconColorVariants = {
  blue: "text-github-blue",
  green: "text-github-green",
  purple: "text-github-purple",
  orange: "text-github-orange",
  cyan: "text-github-cyan",
};

const badgeVariants = {
  Beginner: "bg-github-green/20 text-github-green",
  Intermediate: "bg-github-blue/20 text-github-blue",
  Advanced: "bg-github-purple/20 text-github-purple",
};

interface CertificationCardProps {
  track: Track;
  index: number;
}

export const CertificationCard = ({ track, index }: CertificationCardProps) => {
  const IconComponent = iconMap[track.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link to={`/certification/${track.id}`}>
        <div
          className={cn(
            "relative h-full overflow-hidden rounded-xl border bg-gradient-to-br p-6 transition-all duration-300",
            colorVariants[track.color]
          )}
        >
          {/* Icon */}
          <div
            className={cn(
              "inline-flex p-3 rounded-lg bg-card/50 mb-4",
              iconColorVariants[track.color]
            )}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          {/* Title and Badge */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {track.title}
            </h3>
            <span
              className={cn(
                "shrink-0 px-2 py-1 rounded text-xs font-medium",
                badgeVariants[track.difficulty]
              )}
            >
              {track.difficulty}
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {track.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{track.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>{track.modules} modules</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            <span>Start Learning</span>
            <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </div>

          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
        </div>
      </Link>
    </motion.div>
  );
};
