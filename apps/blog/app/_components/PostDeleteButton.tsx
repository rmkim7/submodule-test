"use client";

import { deletePost } from "@/apis/posts";
import Button from "@repo/ui/components/button";
import { useRouter } from "next/navigation";

export default function PostDeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const response = await deletePost(id);
    try {
      router.push("/");
      console.log("게시글 삭제 완료");
    } catch {
      console.error("게시글 삭제 실패");
    }
  };

  return (
    <div>
      <Button
        divClassName="text-right"
        onClick={handleDelete}
        buttonClassName="border border-gray-400 bg-white text-black font-semibold text-base p-2 rounded"
      >
        삭제
      </Button>
    </div>
  );
}
