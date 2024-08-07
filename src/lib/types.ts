export type TSignup = {
  username: string;
  email: string;
  password: string;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TPost = {
  id: number;
  createdAt?: Date;
  userId: string;
  content: string;
  tags: string[];
  likes: TLike[];
  images: File[] | string[];
  comments: TComment[];
};

export type TLike = {
  id: number;
  userId: string;
  username: string;
  postId: number;
};

export type TComment = {
  id: number;
  userId: string;
  username: string;
  postId: string;
  content: string;
};
