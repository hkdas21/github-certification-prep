import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlashCardProps {
  term: string;
  definition: string;
  index: number;
}

export const FlashCard = ({ term, definition, index }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="perspective-1000"
    >
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-full h-48 cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className={cn(
              "absolute inset-0 rounded-xl border border-border bg-gradient-to-br from-card to-secondary p-6 flex flex-col items-center justify-center text-center",
              "backface-hidden"
            )}
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Term
            </p>
            <h4 className="text-lg font-semibold text-foreground">{term}</h4>
            <div className="absolute bottom-3 right-3 text-muted-foreground">
              <RotateCcw className="w-4 h-4" />
            </div>
          </div>

          {/* Back */}
          <div
            className={cn(
              "absolute inset-0 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-6 flex flex-col items-center justify-center text-center"
            )}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-xs text-primary uppercase tracking-wider mb-2">
              Definition
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              {definition}
            </p>
            <div className="absolute bottom-3 right-3 text-primary">
              <RotateCcw className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
