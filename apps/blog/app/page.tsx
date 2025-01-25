import { fetchPosts } from "@/apis/posts";
import Link from "next/link";
import Button from "@repo/ui/components/button";

export default async function Home() {
  const postList = await fetchPosts();
  console.log(postList);

  return (
    <>
      <Button
        divClassName="text-right mr-8"
        buttonClassName="bg-black text-white font-semibold text-base p-2 rounded"
      >
        <Link href="/posts/write">새 글 작성</Link>
      </Button>
      <h2 className="mx-8 mt-8 mb-8 font-semibold">목록</h2>
      {postList.map(({ id, title, content, author, createdAt }) => {
        const date = new Date(createdAt);
        const localCreatedAt = date.toLocaleString("ko-KR");

        return (
          <div
            key={id}
            className="border border-gray-400 mx-8 my-4 rounded p-4"
          >
            <Link href={`/posts/${id}`}>
              <h3 className="font-semibold pb-4">{title}</h3>
              <hr />
              <p className="pt-4">{content}</p>
              <br></br>
              <div className="flex flex-col gap-2">
                <span className="border border-gray-300 bg-gray-300 px-2 py-0.5 rounded italic">
                  {author}
                </span>
                <time>{localCreatedAt}</time>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
