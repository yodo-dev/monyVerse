"use client";

import React from "react";

type TopicsProps = {
  title: string;
  description: string;
  bg?: string;
};

const TopicsCard: React.FC<TopicsProps> = ({ title, description, bg }) => {
  return (
    <div
      className="px-4 py-4 rounded-lg my-3"
      style={{ backgroundColor: bg || "#f9f9f9" }} 
    >
      <h2 className="text-black text-xl font-bold">{title}</h2>
      <p className="text-[#0F141C] text-sm">{description}</p>
    </div>
  );
};

export default TopicsCard;
