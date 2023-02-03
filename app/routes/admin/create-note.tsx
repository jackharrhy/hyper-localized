import type { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Editor } from "~/components/Editor";
import { NoteSchema } from "~/models/note";

export const action: ActionFunction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData()) as any;
  const result = NoteSchema.safeParse({
    ...formData,
    createdAt:
      formData.createdAt !== "" ? new Date(formData.createdAt) : undefined,
    updatedAt:
      formData.updatedAt !== "" ? new Date(formData.updatedAt) : undefined,
  });
  if (!result.success) {
    console.log(JSON.stringify(result.error, null, 2));
    return null;
  }
  const data = result.data;
  console.log({ data });
  return null;
};

export default function CreateNote() {
  return (
    <Form className="flex flex-col gap-y-4" method="post">
      <h1 className="text-white text-xl">Create Note</h1>

      <div className="flex gap-x-2">
        <label htmlFor="type-select" className="text-white">
          Type:
        </label>
        <select name="type" id="type-select">
          <option value="blogPost">Blog Post</option>
          <option value="project">Project</option>
        </select>
      </div>

      <div className="flex gap-x-2">
        <label htmlFor="slug" className="text-white">
          Slug:
        </label>
        <input name="slug" id="slug" />
      </div>

      <div className="flex gap-x-2">
        <label htmlFor="title" className="text-white">
          Title:
        </label>
        <input name="title" id="title" />
      </div>

      <div className="flex gap-x-2">
        <label htmlFor="createdAt" className="text-white">
          Created At:
        </label>
        <input name="createdAt" id="createdAt" type="date" />
      </div>

      <div className="flex gap-x-2">
        <label htmlFor="updatedAt" className="text-white">
          Updated At:
        </label>
        <input name="updatedAt" id="updatedAt" type="date" />
      </div>

      <Editor />

      <input
        type="submit"
        value="Create"
        className="text-black bg-white w-32"
      />
    </Form>
  );
}
