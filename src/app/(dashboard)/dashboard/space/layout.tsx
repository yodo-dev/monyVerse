"use client";
import React, { FC } from "react";
import ShareThoughts from "../../components/ShareThoughts";
import PopularTopics from "../../components/Space/PopularTopics";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const SpaceLayout: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      {pathname == "/dashboard/space" && <ShareThoughts />}
      <div className="flex flex-1 px-20 my-10">
        <div className="w-full">{children}</div>
        <div className="w-130">
          <PopularTopics />
        </div>
      </div>
    </div>
  );
};

export default SpaceLayout;
