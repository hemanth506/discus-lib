import { useContext } from "react";
import { CommentContext } from "../contexts/CommentContext";
import { CommentContextType } from "../utils";

export const useComments = (): CommentContextType => {
  return useContext(CommentContext);
};
