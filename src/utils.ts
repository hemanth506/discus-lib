export type DiscusProps = {
  name: string;
  setDiscussion: React.Dispatch<React.SetStateAction<CommentType[] | undefined>>
  discussion: CommentType[]
}

export type CommentType = {
  id: string;
  userName: string;
  comment: string;
  timestamp: Date;
  reply: CommentType[];
  likeCount: number;
  dislikeCount: number;
  parentId: string | null;
};

export type CommentContextType = [
  CommentType[] | undefined,
  React.Dispatch<React.SetStateAction<CommentType[] | undefined>>
];

export type CommentBoxCompType = {
  comments: CommentType[] | undefined;
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | undefined>>;
  isReply: boolean;
  setShowCommentBox?: React.Dispatch<React.SetStateAction<boolean>>;
  showCommentBox?: boolean;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  setHasNestedComments?: React.Dispatch<React.SetStateAction<boolean>>;
  expandNestedComments?: boolean;
  parentId: string | null;
};

export type CommentCompType = {
  cmt: CommentType;
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | undefined>>;
};