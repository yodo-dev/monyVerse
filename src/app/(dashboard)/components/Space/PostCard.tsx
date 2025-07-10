"use client";

import Image from "next/image";
import React from "react";
import Card from "../Card";
import CommentInput from "./CommentInput";

interface PostCardProps {
  userName: string;
  userRole: string;
  userAvatar: string;
  postImage: string;
  spaceName: string;
  timeAgo: string;
  lockIcon: string;
  menuIcon: string;
  devIcon: string;
  likeIcon: string;
  commentIcon: string;
}

const PostCard: React.FC<PostCardProps> = ({
  userName,
  userRole,
  userAvatar,
  postImage,
  spaceName,
  timeAgo,
  lockIcon,
  menuIcon,
  devIcon,
  likeIcon,
  commentIcon,
}) => {
  return (
    <Card className="mt-8">
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={userAvatar}
            alt={userName}
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="text-lg font-bold">{userName}</h4>
            <p className="text-sm opacity-50">{userRole}</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Image src={lockIcon} alt="Lock" width={16} height={16} />
            <p className="uppercase font-semibold text-sm">Secret</p>
          </div>
          <button className="cursor-pointer">
            <Image src={menuIcon} alt="Menu" width={3} height={3} />
          </button>
        </div>
      </div>

      <Image
        src={postImage}
        alt="Post"
        width={800}
        height={400}
        className="rounded-lg w-full object-cover"
      />

      <div className="flex items-center space-x-3 mt-4">
        <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg border-b border-b-[#B07CFF]">
          <Image src={devIcon} alt="Dev Space" width={16} height={16} />
          <p>{spaceName}</p>
        </div>
        <p className="opacity-50 ml-1">{timeAgo}</p>
      </div>

      <div className="mt-5 space-x-3">
        <button>
          <Image src={likeIcon} alt="Like" width={24} height={24} />
        </button>
        <button>
          <Image src={commentIcon} alt="Comment" width={20} height={20} />
        </button>
      </div>

      <CommentInput avatar={userAvatar} />
    </Card>
  );
};

export default PostCard;
