import React from "react";
import { type Todo } from "~/schemas/todo.schema";
import { api } from "~/utils/api";

type TodoList = {
  todos: Todo[];
};

// add handlers
export const TodoList = (props: TodoList) => {
  const utils = api.useContext();

  const todoCompleteMutation = api.todo.complete.useMutation({
    async onSuccess() {
      await utils.todo.getAll.invalidate();
    },
  });

  const todoDeleteMutation = api.todo.delete.useMutation({
    async onSuccess() {
      await utils.todo.getAll.invalidate();
    },
  });
  return (
    <ul className="todo-list mt-4">
      {props.todos.map((todo) => (
        <li className="mt-3 flex items-center justify-between" key={todo.id}>
          <div className="flex items-center">
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(event) => {
                todoCompleteMutation.mutate({
                  id: todo.id,
                  complete: event.target.checked,
                });
              }}
            />
            <div
              className={`ml-3 text-sm font-semibold capitalize ${
                todo.complete ? "line-through" : ""
              }`}
            >
              {todo.text}
            </div>
          </div>
          <div>
            <button onClick={() => todoDeleteMutation.mutate({ id: todo.id })}>
              <svg
                className=" h-4 w-4 fill-current text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
