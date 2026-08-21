import { useState, useEffect, useCallback } from "react";
import type { newScore, Score } from "../types/scoreTypes";

export const WORD_COUNTS = [10, 25, 50] as const;
export type WordCount = (typeof WORD_COUNTS)[number];
export type ScoresByWordCount = Record<WordCount, Score[]>;

const EMPTY_SCORES: ScoresByWordCount = { 10: [], 25: [], 50: [] };

export function useScores() {
  const [scoresByWordCount, setScoresByWordCount] =
    useState<ScoresByWordCount>(EMPTY_SCORES);
  const [loading, setLoading] = useState(false);

  const fetchScores = useCallback(async () => {
    setLoading(true);
    try {
      const entries = await Promise.all(
        WORD_COUNTS.map(async (wordCount) => {
          const res = await fetch(`/api/scores?wordCount=${wordCount}`);
          const data = await res.json();
          return [wordCount, data] as const;
        }),
      );
      setScoresByWordCount(Object.fromEntries(entries) as ScoresByWordCount);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchScores();
  }, [fetchScores]);

  const submitScore = useCallback(
    async ({ wpm, accuracy, wordCount, username = "Anonymous" }: newScore) => {
      await fetch("/api/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, wpm, accuracy, wordCount }),
      });
      await fetchScores();
    },
    [fetchScores],
  );

  return { scoresByWordCount, loading, submitScore, fetchScores };
}
