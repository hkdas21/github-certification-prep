import { Link } from "react-router-dom";
import { Github, GraduationCap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { SearchDialog } from "./SearchDialog";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <span className="font-semibold text-lg text-foreground">
            GitHub Cert Hub
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <SearchDialog />
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Certifications
          </Link>
          <ThemeToggle />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
        </nav>
      </div>
    </header>
  );
};
