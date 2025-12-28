import { createContext, useContext } from "react";
import type { testOptions } from "../types/testOptions";

export const TestOptionsContext = createContext<testOptions>({
  wordCount: 25,
  style: {
    // Default theme
    backGroundColor: "--default-pagebg",
    textBoxColor: "--default-boxbg",
    backColor: "--default-black-back-text",
    frontCorrColor: "--default-correctly-typed-text",
    frontIncColor: "--default-incorrectly-typed-text",
  },
});

export function useTestOptionsContext() {
  const testOptions = useContext(TestOptionsContext);
  return testOptions;
}
