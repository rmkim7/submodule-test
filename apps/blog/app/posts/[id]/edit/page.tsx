import { searchPost, updatePost } from "@/apis/posts";
import { formatToLocaleDate } from "@/utils/formatDate";
import Button from "@repo/ui/components/button";
import { redirect } from "next/navigation";
import Link from "next/link";
import Form from "next/form";
import EditForm from "@/app/_components/EditForm";

export default async function page({ params }: { params: { id: string } }) {
  const id = (await params).id;

  // 수정할 게시글 조회
  const blogPost = await searchPost(id);
  console.log(blogPost);

  // 게시글 작성일 현지화
  const localeCreatedAt = formatToLocaleDate(blogPost.createdAt);

  async function updatePostAction(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const author = formData.get("author") as string;

    // 업데이트된 댓글 저장
    await updatePost(id, { title, content, author });

    redirect(`/posts/${id}`);
  }

  return (
    <>
      <div className="flex mx-8 justify-between">
        <Button
          divClassName="text-right mr-8"
          buttonClassName="flex flex-row border border-gray-400 bg-white text-black font-semibold text-base p-2 rounded"
        >
          <Link href={`/`}>나가기</Link>
        </Button>
        <div className="flex gap-2">
          <Button
            divClassName="text-right"
            buttonClassName="border border-gray-400 bg-white text-black font-semibold text-base p-2 rounded"
          >
            <Link href={`/posts/${blogPost.id}`}>수정 취소</Link>
          </Button>
        </div>
      </div>
      <Form action={updatePostAction}>
        <EditForm blogPost={blogPost} />
      </Form>
      ;
    </>
  );
}
