import React, { createContext, useEffect, useState } from "react";
import { CommentBox } from "./components/CommentBox";
import { CommentContextType, CommentType, DiscusProps } from "./utils";

export const UserNameContext = createContext<string>("");
export const CommentContext = createContext<CommentContextType>([
  undefined,
  () => {},
]);

const Discus: React.FC<DiscusProps> = ({
  name = "Unknown User",
  setDiscussion,
}) => {
  const [userName] = useState<string>(name);
  const [comments, setComments] = useState<CommentType[] | undefined>([]);

  useEffect(() => {
    setDiscussion(comments);
    // console.log("SetDiscussion triggered", comments);
  }, [comments, setDiscussion]);

  // useEffect(() => {
  //   console.log(comments);
  // }, [comments]);

  return (
    <div className="App">
      <UserNameContext.Provider value={userName}>
        <CommentContext.Provider value={[comments, setComments]}>
          <CommentBox
            comments={comments}
            setComments={setComments}
            isReply={false}
          />
        </CommentContext.Provider>
      </UserNameContext.Provider>
    </div>
  );
};

export default Discus;
