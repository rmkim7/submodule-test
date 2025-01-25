export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

type CreatePostDTO = Pick<Post, "title" | "content" | "author">;
type UpdatePostDTO = Partial<CreatePostDTO>;

const BASE_URL = "http://localhost:3000/api";

// 모든 게시글 조회
export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts`, {
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

// 새 게시글 작성
export const createPost = async (post: CreatePostDTO): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: post.title,
      content: post.content,
      author: post.author,
    }),
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
};

// 특정 게시글 조회
export const searchPost = async (id: string): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
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

// 게시글 수정

// 게시글 삭제
