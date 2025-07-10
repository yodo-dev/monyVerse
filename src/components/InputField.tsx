"use client";

import React from "react";
import type { IconType } from "react-icons";
import Image from "next/image";

interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: IconType;
  className?: string;
  svg?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder = "",
  value,
  onChange,
  icon: Icon,
  className = "",
  svg: Svg,
}) => {
  const paddingLeft = Icon || Svg ? "pl-10" : "pl-4";

  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm text-white font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/70">
            <Icon className="w-5 h-5" />
          </div>
        )}
        {Svg && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/70">
            <Image
              src={Svg}
              alt={`${name}-icon`}
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </div>
        )}
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full ${paddingLeft} pr-4 py-3 rounded border border-white/30 bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
        />
      </div>
    </div>
  );
};

export default InputField;
