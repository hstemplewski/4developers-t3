import React, { type DetailedHTMLProps, type InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = React.forwardRef(function Input(
  props: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <input
      className="mt-4 w-full rounded-sm border border-gray-200 px-4 py-2 shadow-sm"
      ref={ref}
      {...props}
    />
  );
});
