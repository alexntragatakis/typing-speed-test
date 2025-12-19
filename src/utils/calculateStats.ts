export interface rawResult {
  time: number;
  typed: string;
  wordList: string;
}

export interface processedResult {
  WPM: number;
  accuracy: number;
}

export function calculateResults(raw: rawResult) {
  let correct = 0;
  for (let i = 0; i < raw.wordList.length; i++) {
    if (raw.wordList[i] === raw.typed[i]) {
      correct++;
    }
  }
  const accuracy = Math.round((correct / raw.wordList.length) * 100);

  const words = raw.wordList.length / 5;
  const minutes = raw.time / 60000;
  const WPM = Math.round((words / minutes) * (correct / raw.wordList.length));

  const result: processedResult = {
    WPM: WPM,
    accuracy: accuracy,
  };

  return result;
}
