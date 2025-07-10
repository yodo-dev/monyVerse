"use client";

import React from "react";
import Image from "next/image";
import ActionButton from "@/app/(dashboard)/Components/Space/ActionButtons";

const ShareThoughts: React.FC = () => {
  return (
    <div className="bg-secondary border-b border-r  border-gray-300 h-30 flex items-center px-20 gap-4">
      <Image
        src="/images/profile.png"
        alt="Profile"
        className="h-10 w-10 rounded-full object-cover"
        width={40}
        height={40}
      />
      <input
        type="text"
        className="w-96 bg-[#9CA6B617] py-2 px-4 rounded outline-none"
        placeholder="Share your thoughts..."
      />
      <div className="flex gap-4">
        <ActionButton icon="/svgs/media.svg" label="Media" bgColor="#36395D" />
        <ActionButton icon="/svgs/poll.svg" label="Poll" bgColor="#5C365D" />
        <ActionButton icon="/svgs/add-gif.svg" label="GIF" bgColor="#2D5776" />
      </div>
    </div>
  );
};

export default ShareThoughts;
