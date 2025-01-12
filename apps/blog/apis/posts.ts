interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

type CreatePostDTO = Pick<Post, "title" | "content" | "author">;
type UpdatePostDTO = Partial<CreatePostDTO>;

const baseUrl = "http://localhost:3000/api";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${baseUrl}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json() as Promise<Post[]>;
};
