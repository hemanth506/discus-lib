import React, { createContext, useState, ReactNode } from "react";
import { CommentContextType, CommentType } from "../utils";

export const CommentContext = createContext<CommentContextType>([
  undefined,
  () => {},
]);

interface CommentProviderProps {
  children: ReactNode;
}

export const CommentProvider: React.FC<CommentProviderProps> = ({
  children,
}) => {
  const [comments, setComments] = useState<CommentType[] | undefined>([
    {
      id: "1",
      userName: "UserA",
      comment: "This is a comment by UserA",
      timestamp: new Date(),
      reply: [
        {
          id: "1.1",
          userName: "UserB",
          comment: "This is a reply to UserA by UserB",
          timestamp: new Date(),
          reply: [
            {
              id: "1.1.1",
              userName: "UserC",
              comment: "This is a nested reply to UserB by UserC",
              timestamp: new Date(),
              reply: [],
              likeCount: 3,
              dislikeCount: 1,
              parentId: "1.1"
            },
          ],
          likeCount: 10,
          dislikeCount: 2,
          parentId: "1"
        },
      ],
      likeCount: 20,
      dislikeCount: 5,
      parentId: null
    },
    {
      id: "2",
      userName: "UserD",
      comment: "This is a comment by UserD",
      timestamp: new Date(),
      reply: [
        {
          id: "2.1",
          userName: "UserE",
          comment: "This is a reply to UserD by UserE",
          timestamp: new Date(),
          reply: [],
          likeCount: 8,
          dislikeCount: 0,
          parentId: "2"
        },
      ],
      likeCount: 15,
      dislikeCount: 3,
      parentId: null
    },
  ]);

  return (
    <CommentContext.Provider value={[comments, setComments]}>
      {children}
    </CommentContext.Provider>
  );
};
