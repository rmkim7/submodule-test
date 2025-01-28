"use client";

import { Post } from "@/types";
import Button from "@repo/ui/components/button";
import { useState } from "react";

export default function EditForm({ blogPost }: { blogPost: Post }) {
  const [updatedTitle, setUpdatedTitle] = useState(blogPost.title);
  const [updatedContent, setUpdatedContent] = useState(blogPost.content);
  const [updatedAuthor, setUpdatedAuthor] = useState(blogPost.author);

  return (
    <>
      <div className="border border-gray-400 mx-8 my-8 rounded p-2 grid">
        <input
          name="title"
          required={true}
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          className="border border-gray-400 mx-2 my-3 rounded p-2 overflow-auto"
          type="text"
        />
        <hr className="mx-1" />
        <textarea
          name="content"
          required={true}
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
          rows={1}
          className="border border-gray-400 mx-2 my-3 rounded p-2 min-h-40 overflow-auto"
        />
        <input
          name="author"
          required={true}
          value={updatedAuthor}
          onChange={(e) => setUpdatedAuthor(e.target.value)}
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
    </>
  );
}
