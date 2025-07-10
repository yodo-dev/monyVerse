"use client";

import Image from "next/image";
import React from "react";

interface ActionButtonProps {
  icon: string; 
  label: string;
  bgColor?: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  bgColor = "#36395D",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 py-2 px-4 rounded-lg cursor-pointer"
      style={{ backgroundColor: bgColor }}
    >
      <Image src={icon} alt={label} width={16} height={16} />
      <span className="text-sm text-white">{label}</span>
    </button>
  );
};

export default ActionButton;
