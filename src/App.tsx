import { useEffect, useRef } from "react";
import "./App.css";
import { CommentBox } from "./components/CommentBox";
import { useComments } from "./hooks/useComments";

function App() {
  const [comments, setComments] = useComments();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <div className="App">
      <CommentBox
        comments={comments}
        setComments={setComments}
        isReply={false}
        inputRef={inputRef}
      />
    </div>
  );
}

export default App;
