import z from "zod";

export const NoteSchema = z.object({
  slug: z.string(),
  title: z.string().optional(),
  content: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Note = z.infer<typeof NoteSchema>;
