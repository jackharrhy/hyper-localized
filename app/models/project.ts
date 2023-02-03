import z from "zod";
import { NoteSchema } from "./note";

export const ProjectSchema = NoteSchema;

export type Project = z.infer<typeof ProjectSchema>;
