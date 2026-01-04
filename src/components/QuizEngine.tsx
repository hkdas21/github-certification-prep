import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Quiz {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizEngineProps {
  quizzes: Quiz[];
}

export const QuizEngine = ({ quizzes }: QuizEngineProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = quizzes[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsComplete(false);
  };

  if (isComplete) {
    const percentage = Math.round((score / quizzes.length) * 100);
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="inline-flex p-4 rounded-full bg-accent/20 mb-6">
          <Trophy className="w-12 h-12 text-accent" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Quiz Complete!</h2>
        <p className="text-xl text-muted-foreground mb-4">
          You scored {score} out of {quizzes.length} ({percentage}%)
        </p>
        <div className="w-full max-w-xs mx-auto h-3 bg-secondary rounded-full overflow-hidden mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={cn(
              "h-full rounded-full",
              percentage >= 80 ? "bg-accent" : percentage >= 60 ? "bg-github-blue" : "bg-github-orange"
            )}
          />
        </div>
        <p className="text-muted-foreground mb-6">
          {percentage >= 80
            ? "Excellent work! You've mastered this material."
            : percentage >= 60
            ? "Good job! Review the topics you missed."
            : "Keep studying! Review the material and try again."}
        </p>
        <Button onClick={handleRestart} variant="outline" className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Try Again
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {quizzes.length}
        </span>
        <span className="text-sm font-medium text-foreground">
          Score: {score}/{currentQuestionIndex + (selectedAnswer !== null ? 1 : 0)}
        </span>
      </div>

      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-8">
        <motion.div
          initial={false}
          animate={{ width: `${((currentQuestionIndex + 1) / quizzes.length) * 100}%` }}
          className="h-full bg-primary rounded-full"
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            {currentQuestion.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectOption = currentQuestion.correctAnswer === index;
              
              let optionClasses = "bg-secondary hover:bg-secondary/80 border-transparent";
              
              if (selectedAnswer !== null) {
                if (isCorrectOption) {
                  optionClasses = "bg-accent/20 border-accent";
                } else if (isSelected && !isCorrectOption) {
                  optionClasses = "bg-destructive/20 border-destructive";
                } else {
                  optionClasses = "bg-secondary/50 border-transparent opacity-50";
                }
              }

              return (
                <motion.button
                  key={index}
                  whileHover={selectedAnswer === null ? { scale: 1.01 } : {}}
                  whileTap={selectedAnswer === null ? { scale: 0.99 } : {}}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={cn(
                    "w-full p-4 rounded-lg border-2 text-left transition-all flex items-center gap-3",
                    optionClasses,
                    selectedAnswer === null && "cursor-pointer"
                  )}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-card flex items-center justify-center text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 text-foreground">{option}</span>
                  {selectedAnswer !== null && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  )}
                  {selectedAnswer !== null && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-destructive" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6"
              >
                <div
                  className={cn(
                    "p-4 rounded-lg border",
                    isCorrect
                      ? "bg-accent/10 border-accent/30"
                      : "bg-destructive/10 border-destructive/30"
                  )}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="font-medium text-accent">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-destructive" />
                        <span className="font-medium text-destructive">Incorrect</span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {currentQuestion.explanation}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button onClick={handleNext} className="gap-2">
                    {currentQuestionIndex < quizzes.length - 1 ? (
                      <>
                        Next Question
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      "See Results"
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
