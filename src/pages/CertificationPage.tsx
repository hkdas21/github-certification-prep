import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, HelpCircle, FlaskConical, Layers, Network } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { QuizEngine } from "@/components/QuizEngine";
import { FlashCard } from "@/components/FlashCard";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { tracks } from "@/content/tracks";
import { foundationsContent } from "@/content/certifications/foundations";
import { actionsContent } from "@/content/certifications/actions";
import { securityContent } from "@/content/certifications/security";
import { adminContent } from "@/content/certifications/admin";
import { copilotContent } from "@/content/certifications/copilot";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

const contentMap: Record<string, typeof foundationsContent> = {
  foundations: foundationsContent,
  actions: actionsContent,
  security: securityContent,
  admin: adminContent,
  copilot: copilotContent,
};

const tabs = [
  { id: "modules", label: "Modules", icon: BookOpen },
  { id: "quizzes", label: "Quizzes", icon: HelpCircle },
  { id: "labs", label: "Labs", icon: FlaskConical },
  { id: "flashcards", label: "Flashcards", icon: Layers },
  { id: "mindmap", label: "Mindmap", icon: Network },
];

const CertificationPage = () => {
  const { trackId } = useParams<{ trackId: string }>();
  const [activeTab, setActiveTab] = useState("modules");

  const track = tracks.find((t) => t.id === trackId);
  const content = trackId ? contentMap[trackId] : null;

  const {
    progress,
    markModulesRead,
    markQuizCompleted,
    markFlashcardViewed,
    markLabsRead,
    markMindmapViewed,
    getOverallProgress,
  } = useProgress(trackId || "");

  // Mark section as read when tab changes
  useEffect(() => {
    if (activeTab === "modules") markModulesRead();
    if (activeTab === "labs") markLabsRead();
    if (activeTab === "mindmap") markMindmapViewed();
  }, [activeTab, markModulesRead, markLabsRead, markMindmapViewed]);

  if (!track || !content) {
    return <Navigate to="/" replace />;
  }

  const overallProgress = getOverallProgress();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container py-8">
          <Breadcrumb
            items={[{ label: track.title }]}
          />

          {/* Header with Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {track.title}
                </h1>
                <p className="text-muted-foreground max-w-3xl">
                  {track.description}
                </p>
              </div>
              <div className="w-full md:w-48">
                <ProgressIndicator percentage={overallProgress} />
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 p-1 bg-secondary rounded-lg w-fit">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                    isActive
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "modules" && (
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <MarkdownRenderer content={content.overview} />
              </div>
            )}

            {activeTab === "quizzes" && (
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Practice Quiz
                    </h2>
                    <p className="text-muted-foreground">
                      Test your knowledge with these exam-style questions.
                    </p>
                  </div>
                  <QuizEngine quizzes={content.quizzes} onComplete={markQuizCompleted} />
                </div>
              </div>
            )}

            {activeTab === "labs" && (
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <MarkdownRenderer content={content.labs} />
              </div>
            )}

            {activeTab === "flashcards" && (
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Flashcards
                  </h2>
                  <p className="text-muted-foreground">
                    Click on a card to reveal the definition. ({progress.flashcardsViewed.length}/{content.flashcards.length} viewed)
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {content.flashcards.map((card, index) => (
                    <FlashCard
                      key={index}
                      term={card.term}
                      definition={card.definition}
                      index={index}
                      isViewed={progress.flashcardsViewed.includes(card.term)}
                      onView={(term) => markFlashcardViewed(term, content.flashcards.length)}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "mindmap" && (
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Concept Mindmap
                  </h2>
                  <p className="text-muted-foreground">
                    Visual overview of key concepts and their relationships.
                  </p>
                </div>
                <MarkdownRenderer content={content.mindmap} />
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CertificationPage;
