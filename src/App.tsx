import { useEffect, useState } from "react";
import "./App.css";
import { CommentBox } from "./components/CommentBox";
import { useComments } from "./hooks/useComments";

function App() {
  const [comments, setComments] = useComments();
  const [expandNestedComments, ] = useState(true);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <div className="App">
      <CommentBox
        comments={comments}
        setComments={setComments}
        isReply={false}
        expandNestedComments={expandNestedComments}
        parentId={null}
      />
    </div>
  );
}

export default App;
