import React from "react";
import { CommentBox } from "./components/CommentBox";
import { CommentThread } from "./components/CommentThread";
import { CommentProvider } from "./contexts/CommentContext";

function Discus() {
  return (
    <div className="App">
      <CommentProvider>
        <CommentBox />
        <CommentThread />
      </CommentProvider>
    </div>
  );
}

export default Discus;
