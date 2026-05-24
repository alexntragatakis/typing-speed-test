import type { testData, newScore } from "../types/scoreTypes.ts";

export function calculateResults(raw: testData) {
  let correct = 0;
  for (let i = 0; i < raw.wordList.length; i++) {
    if (raw.wordList[i] === raw.typed[i]) {
      correct++;
    }
  }
  const accuracy = Math.round((correct / raw.wordList.length) * 100);

  const words = raw.wordList.length / 5;
  const minutes = raw.time / 60000;
  const wpm = Math.round((words / minutes) * (correct / raw.wordList.length));

  const result: newScore = {
    wpm,
    accuracy,
    wordCount: raw.wordCount,
  };

  return result;
}
