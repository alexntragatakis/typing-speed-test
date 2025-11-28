import words from "./commonEnglishWords.ts";

interface textOptions {
  wordCount: number;
}

const generateText = ({ wordCount }: textOptions) => {
  const wordList: string[] = [];
  for (let i = 0; i < wordCount; i++) {
    wordList.push(words[Math.floor(words.length * Math.random())]);
  }
  return wordList;
};

export default generateText;
