import { createContext, useContext } from "react";
import type { testOptions } from "../types/testOptions";

export const TestOptionsContext = createContext<testOptions | undefined>(
  undefined
);

export function useTestOptionsContext() {
  const testOptions = useContext(TestOptionsContext);
  if (!testOptions) {
    throw new Error(
      "useTestOptionsContext must be within TestOptionsContext.Provider"
    );
  }
  return testOptions;
}
