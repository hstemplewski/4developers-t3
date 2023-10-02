import React from "react";

type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded bg-white px-4 py-4 shadow" x-data="app()">
      {children}
    </div>
  );
};
