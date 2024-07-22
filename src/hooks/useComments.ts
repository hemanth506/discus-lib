import { useContext } from "react";
import { CommentContextType } from "../utils";
import { CommentContext } from "../Discus";

export const useComments = (): CommentContextType => {
  return useContext(CommentContext);
};
