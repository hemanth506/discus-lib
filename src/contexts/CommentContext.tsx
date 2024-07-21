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
  const [comments, setComments] = useState<CommentType[] | undefined>([]);

  return (
    <CommentContext.Provider value={[comments, setComments]}>
      {children}
    </CommentContext.Provider>
  );
};
