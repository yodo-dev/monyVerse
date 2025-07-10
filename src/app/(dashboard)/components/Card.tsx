import React, { FC, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

const Card: FC<CardProps> = ({ children, title, className = "" }) => {
  return (
    <div
      className={`px-6 py-4 border bg-secondary border-gray-300 rounded-lg ${className}`}
    >
      {title && <h2 className="text-xl font-extrabold mb-3">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
