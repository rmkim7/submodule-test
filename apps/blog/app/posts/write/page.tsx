import { createPost } from "@/apis/posts";
import Link from "next/link";
import Button from "@repo/ui/components/button";
import Form from "next/form";
import { redirect } from "next/navigation";

export default function PostMakingPage() {
  async function createPostAction(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const author = formData.get("author") as string;

    const postDetail = await createPost({ title, content, author });

    const postId = postDetail.id;

    redirect(`/posts/${postId}`);
  }

  return (
    <>
      <Button
        divClassName="text-left ml-8 mt-8"
        buttonClassName="border border-gray-400 bg-white text-black font-semibold text-base p-2 rounded"
      >
        <Link href={`/`}>나가기</Link>
      </Button>

      <Form action={createPostAction}>
        <div className="border border-gray-400 mx-8 my-8 rounded p-2 grid">
          <input
            name="title"
            required={true}
            placeholder="제목을 입력하세요"
            className="border border-gray-400 mx-2 my-3 rounded p-2 overflow-auto"
            type="text"
          />
          <hr className="mx-1" />
          <textarea
            name="content"
            required={true}
            placeholder="내용을 입력하세요"
            rows={1}
            className="border border-gray-400 mx-2 my-3 rounded p-2 min-h-40 overflow-auto"
          />
          <input
            name="author"
            required={true}
            placeholder="작성자"
            maxLength={30}
            className="border border-gray-300 bg-gray-300 mx-2 mb-2 p-0.5 rounded italic"
          />
        </div>
        <Button
          divClassName="text-right mr-8 mt-4"
          buttonClassName="bg-black text-white font-semibold text-base p-2 rounded-lg"
        >
          완료
        </Button>
      </Form>
    </>
  );
}
