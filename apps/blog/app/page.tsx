import { fetchPosts } from "@/apis/posts";
import Link from "next/link";

export default async function Home() {
  const fetchList = await fetchPosts();
  console.log(fetchList);
  console.log(fetchList[0].title);

  return (
    <>
      <div className="text-right mr-8">
        <Link href="/posts/write">
          <button className="bg-black text-white text-semibold text-base p-3 rounded-lg">
            새 글 작성
          </button>
        </Link>
      </div>
      <div className="border-gray-400 w-80 h-96"></div>
    </>
  );
}
