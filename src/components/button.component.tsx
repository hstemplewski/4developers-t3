import React, {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
} from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      {...props}
    >
      {props.children}
    </button>
  );
};
