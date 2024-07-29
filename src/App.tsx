import { useEffect } from "react";
import "./App.css";
import {CommentBox} from "./components/CommentBox";
import { useComments } from "./hooks/useComments";

function App() {
  const [comments, setComments] = useComments();

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <div className="App">
      <CommentBox
        comments={comments}
        setComments={setComments}
        isReply={false}
      />
    </div>
  );
}

export default App;
