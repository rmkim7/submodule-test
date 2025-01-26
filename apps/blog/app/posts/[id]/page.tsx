import { createComment, fetchComments } from "@/apis/comments";
import { searchPost } from "@/apis/posts";
import { formatToLocaleDate } from "@/functions/formatDate";
import Button from "@repo/ui/components/button";
import Form from "next/form";
import Link from "next/link";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = (await params).id;

  const blogPost = await searchPost(id);
  console.log(blogPost);

  // 게시글 작성일자 현지화
  const localeCreatedAt = formatToLocaleDate(blogPost.createdAt);

  async function createCommentAction(formData: FormData) {
    "use server";
    const content = formData.get("content") as string;
    const author = formData.get("author") as string;

    await createComment(id, { content, author });
  }

  const commentList = await fetchComments(id);
  console.log(commentList);

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
            buttonClassName="bg-black text-white font-semibold text-base p-2 rounded"
          >
            삭제
          </Button>
          <Button
            divClassName="text-right"
            buttonClassName="border border-gray-400 bg-white text-black font-semibold text-base p-2 rounded"
          >
            수정
          </Button>
        </div>
      </div>

      <div
        key={blogPost.id}
        className="border border-gray-400 mx-8 my-4 rounded p-4"
      >
        <h3 className="font-semibold pb-4">{blogPost.title}</h3>
        <hr />
        <p className="pt-4">{blogPost.content}</p>
        <br></br>
        <div className="flex flex-col gap-2">
          <span className="border border-gray-300 bg-gray-300 px-2 py-0.5 rounded italic">
            {blogPost.author}
          </span>
          <span>{localeCreatedAt}</span>
        </div>
      </div>
      <Form
        action={createCommentAction}
        className="flex flex-col gap-2 mx-8 mt-6 mb-8"
      >
        <textarea
          name="content"
          required={true}
          placeholder="댓글을 입력해주세요"
          rows={1}
          className="border border-gray-400 rounded p-2 min-h-40 overflow-auto"
        />
        <input
          name="author"
          required={true}
          placeholder="작성자"
          maxLength={30}
          className="border border-gray-300 bg-gray-300 my-1 p-0.5 rounded italic"
        />
        <Button
          divClassName="text-right"
          buttonClassName="border border-gray-400 bg-white text-black font-semibold text-base p-2 rounded"
        >
          댓글 작성
        </Button>
      </Form>
      {/*조건부 렌더링 - 댓글이 없는 경우 / 댓글이 있는 경우*/}
      {commentList.length === 0 ? null : (
        <h2 className="mx-8 mt-8 mb-4 font-semibold">댓글 목록</h2>
      )}

      {commentList.map(({ id, content, author, createdAt }) => {
        {
          /*댓글 작성일자 현지화*/
        }
        const localeCreatedAt = formatToLocaleDate(createdAt);

        return (
          <li
            key={id}
            className="border border-gray-200 mx-8 my-4 p-1 rounded italic flex flex-col"
          >
            <h3 className="border rounded bg-gray-300 w-fit">{author}</h3>
            <hr />
            <p className="mt-2">{content}</p>
            <time>{localeCreatedAt}</time>
          </li>
        );
      })}
    </>
  );
}
