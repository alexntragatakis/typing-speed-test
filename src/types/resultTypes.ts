export interface rawResult {
  time: number;
  typed: string;
  wordList: string;
}

export interface processedResult {
  WPM: number;
  accuracy: number;
}

export interface Score {
  id: number;
  username: string;
  wpm: number;
  accuracy: number;
  wordCount: number;
  createdAt: Date;
}
