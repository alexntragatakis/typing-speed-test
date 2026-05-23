import { useState, useEffect, useCallback } from "react";
import type { Score } from "../types/resultTypes";

export function useScores() {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchScores = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/scores");
      const data = await res.json();
      setScores(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchScores();
  }, [fetchScores]);

  const submitScore = useCallback(
    async (
      wpm: number,
      accuracy: number,
      word_count: number,
      username = "Anonymous",
    ) => {
      await fetch("/api/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, wpm, accuracy, word_count }),
      });
      await fetchScores();
    },
    [fetchScores],
  );

  return { scores, loading, submitScore, fetchScores };
}
