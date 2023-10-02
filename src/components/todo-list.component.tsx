import React from "react";
import { type Todo } from "~/schemas/todo.schema";

type TodoList = {
  todos: Todo[];
};

// add handlers
export const TodoList = (props: TodoList) => {
  return (
    <ul className="todo-list mt-4">
      {props.todos.map((todo) => (
        <li className="mt-3 flex items-center justify-between" key={todo.id}>
          <div className="flex items-center">
            <input type="checkbox" name="" id="" />
            <div
              className={`ml-3 text-sm font-semibold capitalize ${
                todo.complete ? "line-through" : ""
              }`}
            >
              {todo.text}
            </div>
          </div>
          <div>
            <button>
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
