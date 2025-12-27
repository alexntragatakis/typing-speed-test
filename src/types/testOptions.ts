export interface testOptions {
  wordCount: number;
  style: style;
}

export interface style {
  backGroundColor: string;
  textBoxColor: string;
  backColor: string;
  frontCorrColor: string;
  frontIncColor: string;
}

// TODO: Create a "theme" type for background and textbox color. Then pass just text color styles to TextBox.
