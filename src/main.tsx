import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/variables.css";

import App from "./App.tsx";
import Options from "./components/Options/Options.tsx";

import { TestOptionsContext } from "./context/TestOptionsContext.ts";

const router = createBrowserRouter([
  { path: "/typing-speed-test/", element: <App /> },
  {
    path: "/typing-speed-test/options",
    element: <Options onSave={(data) => {}} />,
  },
]);

const Root = () => {
  const [testOptions, setTestOptions] = useState({
    /* Default Test Settings */
    wordCount: 25,
    style: {
      backGroundColor: "--default-pagebg",
      textBoxColor: "--default-boxbg",
      backColor: "--default-black-back-text",
      frontCorrColor: "--default-correctly-typed-text",
      frontIncColor: "--default-incorrectly-typed-text",
    },
  });

  return (
    <TestOptionsContext.Provider value={{ testOptions, setTestOptions }}>
      <RouterProvider router={router} />
    </TestOptionsContext.Provider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
