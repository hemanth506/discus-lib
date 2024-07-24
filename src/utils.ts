export type DiscusProps = {
  name: string;
  setDiscussion: React.Dispatch<React.SetStateAction<CommentType[] | undefined>>
}

export type CommentType = {
  id: string;
  userName: string;
  comment: string;
  timestamp: Date;
  reply: CommentType[];
  likeCount: number;
  dislikeCount: number;
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
};

export type CommentCompType = {
  cmt: CommentType;
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | undefined>>;
};