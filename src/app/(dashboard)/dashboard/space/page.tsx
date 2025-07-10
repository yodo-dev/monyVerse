"use client";

import { useState } from "react";
import PostCard from "../../components/Space/PostCard";

import { tabs } from "@/data";
import Tabs from "../../components/Space/Tabs";

const Profile = "/images/profile.png";
const Post = "/images/post.png";
const LockSvg = "/svgs/lock.svg";
const MenuSvg = "/svgs/menu.svg";
const SpaceProfileSvg = "/svgs/space-profile.svg";
const LikeSvg = "/svgs/like.svg";
const CommentSvg = "/svgs/comment.svg";

const Space = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div>
      <Tabs selected={selected} setSelected={setSelected} data={tabs} />
      <div className="my-8 mr-8">
        {[1, 2].map((i) => (
          <PostCard
            key={i}
            userName="Gerald Bell"
            userRole="Moderator"
            userAvatar={Profile}
            postImage={Post}
            spaceName="Dev’s Test Space"
            timeAgo="1w ago"
            lockIcon={LockSvg}
            menuIcon={MenuSvg}
            devIcon={SpaceProfileSvg}
            likeIcon={LikeSvg}
            commentIcon={CommentSvg}
          />
        ))}
      </div>
    </div>
  );
};

export default Space;
