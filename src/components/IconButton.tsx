'use client';

import React from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaSpinner } from "react-icons/fa";

interface IconButtonProps {
  icon: IconType | string; // string = public SVG path, IconType = react-icon
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  tooltip?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className = "",
  ariaLabel = "icon button",
  tooltip,
  loading = false,
  disabled = false,
  type = "button",
}) => {
  const isString = typeof icon === "string";
  const IconComponent = isString ? null : icon;

  return (
    <div className="relative group inline-block">
      <button
        type={type}
        aria-label={ariaLabel}
        onClick={onClick}
        disabled={disabled || loading}
        className={`
          w-10 h-10 border border-white rounded-lg 
          flex items-center justify-center text-xl 
          transition duration-200
          ${
            disabled || loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-white/20"
          } 
          ${className}
        `}
      >
        {loading ? (
          <FaSpinner className="animate-spin" />
        ) : isString ? (
          <Image
            src={icon as string}
            alt="icon"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
        ) : (
          IconComponent && <IconComponent />
        )}
      </button>

      {tooltip && (
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default IconButton;
