import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/variables.css";

import App from "./App.tsx";
import Options from "./components/Options/Options.tsx";
import Leaderboard from "./components/Leaderboard/Leaderboard.tsx";

import { TestOptionsContext } from "./context/TestOptionsContext.ts";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/options",
    element: <Options />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

const Root = () => {
  const [testOptions, setTestOptions] = useState({
    /* Default Test Settings */
    username: "Anonymous",
    wordCount: 25,
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
  </StrictMode>,
);
