import { fetchPosts } from "@/apis/posts";
import Link from "next/link";
import Button from "@repo/ui/components/button";

export default async function Home() {
  const fetchList = await fetchPosts();
  console.log(fetchList);
  console.log(fetchList[0].title);

  return (
    <>
      <Button
        divClassName="text-right mr-8"
        buttonClassName="bg-black text-white font-semibold text-base p-3 rounded-lg"
      >
        <Link href="/posts/write">새 글 작성</Link>
      </Button>

      <div className="border-gray-400 w-80 h-96"></div>
    </>
  );
}
