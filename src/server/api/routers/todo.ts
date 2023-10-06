import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import {
  todoSchema,
  todoCreateSchema,
  todoDeleteSchema,
  todoCompleteSchema,
} from "~/schemas/todo.schema";
import { z } from "zod";

export const todoRouter = createTRPCRouter({
  getAll: publicProcedure.output(z.array(todoSchema)).query(({ ctx }) => {
    return ctx.db.todo.findMany();
  }),
  create: publicProcedure
    .input(todoCreateSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.todo.create({
        data: {
          text: input.text,
          complete: false,
        },
      });
    }),
  delete: publicProcedure
    .input(todoDeleteSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.todo.delete({
        where: {
          id: input.id,
        },
      });
    }),
  complete: publicProcedure
    .input(todoCompleteSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.todo.update({
        where: {
          id: input.id,
        },
        data: {
          complete: input.complete,
        },
      });
    }),
});
