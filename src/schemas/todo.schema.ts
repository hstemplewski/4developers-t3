import { z } from "zod";

export const todoSchema = z.object({
  id: z.number(),
  text: z.string(),
  complete: z.boolean(),
});

export const todoCreateSchema = z.object({ text: z.string() });

export const todoDeleteSchema = z.object({ id: z.number() });

export const todoCompleteSchema = z.object({
  id: z.number(),
  complete: z.boolean(),
});

export type Todo = z.infer<typeof todoSchema>;

export type CreateTodo = z.infer<typeof todoCreateSchema>;
