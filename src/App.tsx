import React from "react";
import { CommentBox } from "./components/Comment-Box/CommentBox";
import { CommentThread } from "./components/Comment-Thread/CommentThread";
import { CommentProvider } from "./contexts/CommentContext";

function App() {
  return (
    <div className="App">
      <CommentProvider>
        <CommentBox />
        <CommentThread />
      </CommentProvider>
    </div>
  );
}

export default App;
