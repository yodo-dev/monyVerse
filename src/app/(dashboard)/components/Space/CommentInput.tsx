"use client";

import React from "react";
import Image from "next/image";

interface CommentInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  avatar?: string;
}

const CommentInput: React.FC<CommentInputProps> = ({
  value,
  onChange,
  placeholder = "Share your thoughts...",
  avatar,
}) => {
  return (
    <div className="flex gap-4 items-center mt-3 relative">
      {avatar && (
        <Image
          src={avatar}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      )}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-[#9CA6B617] py-3 px-4 rounded-lg text-black outline-none"
      />
      <button className="cursor-pointer absolute right-3">
        <Image
          src="/svgs/add-media.svg"
          alt="Add media"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default CommentInput;
