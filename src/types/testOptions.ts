export interface TestOptionsContextType {
  testOptions: testOptions;
  setTestOptions: React.Dispatch<React.SetStateAction<testOptions>>;
}

export interface testOptions {
  username: string;
  wordCount: number;
}

export interface style {
  backGroundColor: string;
  textBoxColor: string;
  backColor: string;
  frontCorrColor: string;
  frontIncColor: string;
  overlayBg: string;
  bootstrapBtnClass: string;
}
