import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthorBio } from "@/components/AuthorBio";
import { CertificationCard } from "@/components/CertificationCard";
import { Contributors } from "@/components/Contributors";
import { tracks } from "@/content/tracks";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          {/* Background decorations */}
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

          <div className="container relative py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Your path to GitHub certification</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Master GitHub
                <br />
                <span className="text-primary">Get Certified</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Comprehensive study materials, hands-on labs, and practice quizzes to help you
                ace your GitHub certification exams.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Certification Tracks
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose your certification path and start learning with interactive modules,
              quizzes, and hands-on labs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <CertificationCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </section>

        {/* Author Bio Section */}
        <section className="border-t border-border bg-card/50">
          <div className="container py-16">
            <AuthorBio />
          </div>
        </section>

        {/* Contributors Section */}
        <section className="border-t border-border">
          <div className="container py-16">
            <Contributors />
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-border bg-card/50">
          <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Comprehensive Content
                </h3>
                <p className="text-muted-foreground text-sm">
                  Detailed modules covering all exam topics with real-world examples.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4">
                  <span className="text-3xl">🧪</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Hands-on Labs
                </h3>
                <p className="text-muted-foreground text-sm">
                  Step-by-step practical exercises to build real skills.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-github-purple/10 mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Practice Quizzes
                </h3>
                <p className="text-muted-foreground text-sm">
                  Test your knowledge with exam-style questions and instant feedback.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
