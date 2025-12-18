export interface rawResult {
  time: number;
  typed: string;
  wordList: string;
}

export function calculateWPM (result: rawResult) {
    const words = result.wordList.length / 5;
    const minutes = result.time / 60000;
    return Math.round(words / minutes);
}

export function calculateAccuracy (result: rawResult) {
    let correct = 0;

    for (let i=0; i<result.wordList.length; i++) {
        if (result.wordList[i] === result.typed[i]) {
            correct++;
        }
    }

    return (Math.round(correct / result.wordList.length)) * 100;
}
