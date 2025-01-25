import { Post } from "@/apis/posts";

interface Comment {
  id: string;
  postId: string;
  content: string;
  author: string;
  createdAt: string;
}

type CreateCommentDTO = Pick<Comment, "content" | "author">;

const BASE_URL = "http://localhost:3000/api";

// 댓글 목록 조회
export const fetchComments = async (postId: string): Promise<Comment[]> => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
};

// 댓글 작성
export const createComment = async (
  postId: string,
  comment: CreateCommentDTO,
): Promise<Comment> => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: comment.content,
      author: comment.author,
    }),
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
};
