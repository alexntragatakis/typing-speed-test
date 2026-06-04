export interface testData {
  time: number;
  wordList: string;
  typed: string;
  wordCount: number;
}

export interface newScore {
  username?: string;
  wpm: number;
  accuracy: number;
  wordCount: number;
}

export interface Score {
  id: number;
  username: string;
  wpm: number;
  accuracy: number;
  wordCount: number;
  createdAt: Date;
}
