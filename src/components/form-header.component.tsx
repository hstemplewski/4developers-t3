import React from "react";

type FormHeaderProps = {
  text: string;
};

export const FormHeader = ({ text }: FormHeaderProps) => {
  return <div className="title text-lg font-bold">{text}</div>;
};
