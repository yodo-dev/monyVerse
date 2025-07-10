"use client";

import React from "react";
import type { IconType } from "react-icons";
import { FaSpinner } from "react-icons/fa";

interface ButtonProps {
  label: string;
  icon?: IconType;
  iconElement?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  tooltip?: string;
  ariaLabel?: string;
  labelColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon,
  iconElement,
  iconPosition = "left",
  onClick,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
  tooltip,
  ariaLabel,
  labelColor = "text-white",
}) => {
  const renderIcon = () => {
    if (Icon) return <Icon />;
    if (iconElement) return iconElement;
    return null;
  };

  return (
    <div className={`relative group inline-block ${fullWidth ? "w-full" : ""}`}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        aria-label={ariaLabel || label}
        className={`
          flex items-center justify-center gap-2 px-4 py-3 rounded font-medium 
          bg-gradient-to-r from-purple-500 to-purple-700 
          transition duration-200
          ${fullWidth ? "w-full" : ""}
          ${
            disabled || loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:from-purple-600 hover:to-purple-800"
          } 
          ${className}
        `}
      >
        {loading ? (
          <FaSpinner className={`animate-spin ${labelColor}`} />
        ) : (
          <>
            {iconPosition === "left" && renderIcon()}
            <span className={labelColor}>{label}</span>
            {iconPosition === "right" && renderIcon()}
          </>
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

export default Button;
