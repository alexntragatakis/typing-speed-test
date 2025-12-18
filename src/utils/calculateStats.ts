export interface rawResult {
  time: number;
  typed: string;
  wordList: string;
}

export interface processedResult {
  WPM: number;
  accuracy: number;
}

export function calculateWPM(result: rawResult) {
  const words = result.wordList.length / 5;
  const minutes = result.time / 60000;
  return Math.round(words / minutes);
}

export function calculateAccuracy(result: rawResult) {
  let correct = 0;

  for (let i = 0; i < result.wordList.length; i++) {
    if (result.wordList[i] === result.typed[i]) {
      correct++;
    }
  }

  return Math.round(correct / result.wordList.length) * 100;
}

// Change to one function that exports a interface type "processedResult", result prop is processedResult type
// make WPM WPM*Accuracy to account for accuracy
// npm run build, npm run deploy

export function calculateResults(raw: rawResult) {
  let correct = 0;
  for (let i = 0; i < raw.wordList.length; i++) {
    if (raw.wordList[i] === raw.typed[i]) {
      correct++;
    }
  }
  const accuracy = Math.round(correct / raw.wordList.length) * 100;

  const words = raw.wordList.length / 5;
  const minutes = raw.time / 60000;
  const WPM = Math.round((words / minutes) * (correct / raw.wordList.length));

  const result: processedResult = {
    WPM: WPM,
    accuracy: accuracy,
  };
  return result;
}
