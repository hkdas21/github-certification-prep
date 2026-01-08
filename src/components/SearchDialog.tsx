import { useState, useMemo } from "react";
import { Search, X, BookOpen, Zap, Shield, Settings, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { tracks } from "@/content/tracks";
import { foundationsContent } from "@/content/certifications/foundations";
import { actionsContent } from "@/content/certifications/actions";
import { securityContent } from "@/content/certifications/security";
import { adminContent } from "@/content/certifications/admin";
import { copilotContent } from "@/content/certifications/copilot";

interface SearchResult {
  trackId: string;
  trackTitle: string;
  section: string;
  title: string;
  excerpt: string;
}

const certContents: Record<string, { overview: string; quizzes?: any[]; flashcards?: any[] }> = {
  foundations: foundationsContent,
  actions: actionsContent,
  security: securityContent,
  admin: adminContent,
  copilot: copilotContent,
};

const iconMap: Record<string, React.ReactNode> = {
  foundations: <BookOpen className="w-4 h-4" />,
  actions: <Zap className="w-4 h-4" />,
  security: <Shield className="w-4 h-4" />,
  copilot: <Sparkles className="w-4 h-4" />,
  admin: <Settings className="w-4 h-4" />,
};

const colorMap: Record<string, string> = {
  foundations: "text-github-blue",
  actions: "text-github-green",
  security: "text-github-purple",
  copilot: "text-github-cyan",
  admin: "text-github-orange",
};

export const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    if (query.length < 2) return [];

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    tracks.forEach((track) => {
      const content = certContents[track.id];
      if (!content) return;

      // Search in overview content
      const lines = content.overview.split("\n");
      let currentSection = "";

      lines.forEach((line, index) => {
        if (line.startsWith("# ")) {
          currentSection = line.replace("# ", "").trim();
        } else if (line.startsWith("## ")) {
          currentSection = line.replace("## ", "").trim();
        }

        if (line.toLowerCase().includes(lowerQuery)) {
          const contextStart = Math.max(0, index - 1);
          const contextEnd = Math.min(lines.length, index + 2);
          const excerpt = lines
            .slice(contextStart, contextEnd)
            .join(" ")
            .replace(/[#*`]/g, "")
            .trim()
            .slice(0, 150);

          // Avoid duplicates
          if (!results.find((r) => r.excerpt === excerpt && r.trackId === track.id)) {
            results.push({
              trackId: track.id,
              trackTitle: track.title,
              section: currentSection || "Overview",
              title: line.replace(/[#*`]/g, "").trim().slice(0, 60),
              excerpt: excerpt + "...",
            });
          }
        }
      });

      // Search in flashcards
      content.flashcards?.forEach((card: { front?: string; back?: string }) => {
        const front = card?.front || "";
        const back = card?.back || "";
        if (
          front.toLowerCase().includes(lowerQuery) ||
          back.toLowerCase().includes(lowerQuery)
        ) {
          results.push({
            trackId: track.id,
            trackTitle: track.title,
            section: "Flashcards",
            title: front.slice(0, 60),
            excerpt: back.slice(0, 150) + "...",
          });
        }
      });

      // Search in quizzes
      content.quizzes?.forEach((quiz: { question?: string }) => {
        const question = quiz?.question || "";
        if (question.toLowerCase().includes(lowerQuery)) {
          results.push({
            trackId: track.id,
            trackTitle: track.title,
            section: "Quizzes",
            title: question.slice(0, 60),
            excerpt: question.slice(0, 150) + "...",
          });
        }
      });
    });

    return results.slice(0, 20);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
    setQuery("");
    navigate(`/certification/${result.trackId}`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="flex items-center gap-3 w-full max-w-md h-10 px-4 text-sm text-muted-foreground bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 rounded-lg transition-all duration-200 group"
        >
          <Search className="w-4 h-4 shrink-0" />
          <span className="flex-1 text-left">Search certifications...</span>
          <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground group-hover:border-primary/30">
            ⌘K
          </kbd>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="sr-only">Search certifications</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search topics, flashcards, quizzes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={() => setQuery("")}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[400px]">
          {query.length < 2 ? (
            <div className="p-8 text-center text-muted-foreground">
              Type at least 2 characters to search
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No results found for "{query}"
            </div>
          ) : (
            <div className="p-2">
              {searchResults.map((result, index) => (
                <button
                  key={`${result.trackId}-${index}`}
                  onClick={() => handleSelect(result)}
                  className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={colorMap[result.trackId]}>
                      {iconMap[result.trackId]}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {result.trackTitle} › {result.section}
                    </span>
                  </div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {result.title}
                  </div>
                  <div className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {result.excerpt}
                  </div>
                </button>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
