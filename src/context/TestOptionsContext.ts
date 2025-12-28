import { createContext, useContext } from "react";
import type { TestOptionsContextType } from "../types/testOptions";

export const TestOptionsContext = createContext<
  TestOptionsContextType | undefined
>(undefined);

export function useTestOptionsContext() {
  const testOptions = useContext(TestOptionsContext);
  if (!testOptions) {
    throw new Error(
      "useTestOptionsContext must be within TestOptionsContext.Provider"
    );
  }
  return testOptions;
}
