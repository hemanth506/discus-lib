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
  discussion = [],
}) => {
  const [userName] = useState<string>(name);
  const [comments, setComments] = useState<CommentType[] | undefined>(
    discussion
  );
  const [expandNestedComments, ] = useState(true);

  useEffect(() => {
    setDiscussion(comments);
  }, [comments, setDiscussion]);

  return (
    <div className="App">
      <UserNameContext.Provider value={userName}>
        <CommentContext.Provider value={[comments, setComments]}>
          <CommentBox
            comments={comments}
            setComments={setComments}
            isReply={false}
            expandNestedComments={expandNestedComments}
            parentId={null}
          />
        </CommentContext.Provider>
      </UserNameContext.Provider>
    </div>
  );
};

export default Discus;
