// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CommentProvider } from "./contexts/CommentContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
    <CommentProvider>
      <App />
    </CommentProvider>
  // </React.StrictMode>
);
