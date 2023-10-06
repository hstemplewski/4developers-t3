import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input.component";
import { Button } from "./button.component";
import { todoCreateSchema, type CreateTodo } from "~/schemas/todo.schema";
import { FormHeader } from "./form-header.component";
import { api } from "~/utils/api";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTodo>({
    resolver: zodResolver(todoCreateSchema),
  });
  const utils = api.useContext();

  const todoCreateMutation = api.todo.create.useMutation({
    async onSuccess() {
      await utils.todo.getAll.invalidate();
    },
  });

  const onSubmit = (data: CreateTodo) => {
    todoCreateMutation.mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader text="Lorem ipsum" />
      <Input {...register("text")} />
      <p>{errors.text?.message}</p>

      <Button type="submit">Add todo</Button>
    </form>
  );
};
