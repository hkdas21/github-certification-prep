import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  percentage: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export const ProgressIndicator = ({
  percentage,
  size = "md",
  showLabel = true,
  className,
}: ProgressIndicatorProps) => {
  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  };

  const isComplete = percentage === 100;

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-muted-foreground">Progress</span>
          <span className="text-xs font-medium text-foreground flex items-center gap-1">
            {isComplete && <CheckCircle2 className="w-3 h-3 text-accent" />}
            {percentage}%
          </span>
        </div>
      )}
      <div className={cn("w-full bg-secondary rounded-full overflow-hidden", sizeClasses[size])}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full",
            isComplete ? "bg-accent" : "bg-primary"
          )}
        />
      </div>
    </div>
  );
};
