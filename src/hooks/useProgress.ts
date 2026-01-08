import { useState, useEffect, useCallback } from "react";

export interface TrackProgress {
  modulesRead: boolean;
  quizCompleted: boolean;
  quizScore: number;
  quizTotal: number;
  flashcardsViewed: string[];
  flashcardsTotal: number;
  labsRead: boolean;
  mindmapViewed: boolean;
}

export interface ProgressData {
  [trackId: string]: TrackProgress;
}

const STORAGE_KEY = "github-cert-progress";

const defaultTrackProgress: TrackProgress = {
  modulesRead: false,
  quizCompleted: false,
  quizScore: 0,
  quizTotal: 0,
  flashcardsViewed: [],
  flashcardsTotal: 0,
  labsRead: false,
  mindmapViewed: false,
};

export const useProgress = (trackId: string) => {
  const [progress, setProgress] = useState<TrackProgress>(defaultTrackProgress);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data: ProgressData = JSON.parse(stored);
      if (data[trackId]) {
        setProgress(data[trackId]);
      }
    }
  }, [trackId]);

  const updateProgress = useCallback(
    (updates: Partial<TrackProgress>) => {
      setProgress((prev) => {
        const newProgress = { ...prev, ...updates };

        const stored = localStorage.getItem(STORAGE_KEY);
        const data: ProgressData = stored ? JSON.parse(stored) : {};
        data[trackId] = newProgress;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return newProgress;
      });
    },
    [trackId]
  );

  const markModulesRead = useCallback(() => {
    updateProgress({ modulesRead: true });
  }, [updateProgress]);

  const markQuizCompleted = useCallback(
    (score: number, total: number) => {
      updateProgress({ quizCompleted: true, quizScore: score, quizTotal: total });
    },
    [updateProgress]
  );

  const markFlashcardViewed = useCallback(
    (term: string, total: number) => {
      setProgress((prev) => {
        const viewed = prev.flashcardsViewed.includes(term)
          ? prev.flashcardsViewed
          : [...prev.flashcardsViewed, term];

        const newProgress = { ...prev, flashcardsViewed: viewed, flashcardsTotal: total };

        const stored = localStorage.getItem(STORAGE_KEY);
        const data: ProgressData = stored ? JSON.parse(stored) : {};
        data[trackId] = newProgress;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        return newProgress;
      });
    },
    [trackId]
  );

  const markLabsRead = useCallback(() => {
    updateProgress({ labsRead: true });
  }, [updateProgress]);

  const markMindmapViewed = useCallback(() => {
    updateProgress({ mindmapViewed: true });
  }, [updateProgress]);

  const getOverallProgress = useCallback((): number => {
    let completed = 0;
    let total = 5; // modules, quiz, labs, mindmap, flashcards

    if (progress.modulesRead) completed++;
    if (progress.quizCompleted) completed++;
    if (progress.labsRead) completed++;
    if (progress.mindmapViewed) completed++;
    if (progress.flashcardsTotal > 0 && progress.flashcardsViewed.length === progress.flashcardsTotal) {
      completed++;
    }

    return Math.round((completed / total) * 100);
  }, [progress]);

  return {
    progress,
    markModulesRead,
    markQuizCompleted,
    markFlashcardViewed,
    markLabsRead,
    markMindmapViewed,
    getOverallProgress,
  };
};

export const useAllProgress = () => {
  const [allProgress, setAllProgress] = useState<ProgressData>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setAllProgress(JSON.parse(stored));
    }
  }, []);

  const getTrackProgress = (trackId: string): number => {
    const progress = allProgress[trackId];
    if (!progress) return 0;

    let completed = 0;
    let total = 5;

    if (progress.modulesRead) completed++;
    if (progress.quizCompleted) completed++;
    if (progress.labsRead) completed++;
    if (progress.mindmapViewed) completed++;
    if (progress.flashcardsTotal > 0 && progress.flashcardsViewed.length === progress.flashcardsTotal) {
      completed++;
    }

    return Math.round((completed / total) * 100);
  };

  return { allProgress, getTrackProgress };
};
