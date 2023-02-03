import z from "zod";
import { NoteSchema } from "./note";

export const BlogPostSchema = NoteSchema;

export type BlogPost = z.infer<typeof BlogPostSchema>;
