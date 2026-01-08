import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Award, Users, Clock } from "lucide-react";
import { bioData } from "@/content/bio";
import profilePhoto from "@/assets/profile-photo.jpg";

export const AuthorBio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl border border-border bg-card p-6 md:p-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-sm" />
          <img
            src={profilePhoto}
            alt={bioData.name}
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-border"
          />
        </motion.div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            {bioData.name}
          </h2>
          <p className="text-primary font-medium mb-4">{bioData.title}</p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {bioData.bio}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
            <a
              href={bioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href={bioData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Twitter className="w-5 h-5 text-foreground" />
            </a>
            <a
              href={bioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex md:flex-col gap-4 md:gap-3 text-center">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary">
            <Users className="w-4 h-4 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">{bioData.stats.students}</p>
              <p className="text-xs text-muted-foreground">Students</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary">
            <Award className="w-4 h-4 text-accent" />
            <div>
              <p className="text-sm font-semibold text-foreground">{bioData.stats.certifications}</p>
              <p className="text-xs text-muted-foreground">Certs</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary">
            <Clock className="w-4 h-4 text-github-orange" />
            <div>
              <p className="text-sm font-semibold text-foreground">{bioData.stats.experience}</p>
              <p className="text-xs text-muted-foreground">Exp</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
