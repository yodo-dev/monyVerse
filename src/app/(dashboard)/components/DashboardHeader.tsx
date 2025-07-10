"use client";

import Image from "next/image";
import React from "react";
import DashboardTabsBar from "./DashboardTabsBar";

interface TabProps {
  name: string;
  link: string;
}
interface HeaderProps {
  title?: string;
  tabs?: TabProps[];
  showTabs?: boolean;
}

const DashboardHeader: React.FC<HeaderProps> = ({
  title = "Dev’s Space",
  tabs = [],
  showTabs = false,
}) => {
  return (
    <header className="w-full  bg-gradient-to-b from-primary to-secondary py-4 border-b border-b-gray-300 px-20">
      <div className="flex justify-between items-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search the Monyverse Academy"
            className="w-full text-white py-2 pl-12 pr-4 bg-[#0F141C3D] rounded placeholder:text-sm outline-none"
            aria-label="Search"
          />
          <div className="absolute top-2 left-3 w-5 h-5">
            <Image src="/svgs/search.svg" alt="Search" width={20} height={20} />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-6">
          <button aria-label="Add user">
            <Image
              src="/svgs/add-user.svg"
              alt="Add user"
              width={24}
              height={24}
            />
          </button>
          <button aria-label="Messages">
            <Image
              src="/svgs/message.svg"
              alt="Messages"
              width={24}
              height={24}
            />
          </button>
          <button aria-label="Notifications">
            <Image
              src="/svgs/notification.svg"
              alt="Notifications"
              width={24}
              height={24}
            />
          </button>
          <Image
            src="/images/profile.png"
            alt="User Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {title && (
        <div className="my-8 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/svgs/space-profile.svg"
              alt="Space Icon"
              width={28}
              height={28}
            />
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <button className="cursor-pointer">
            <Image
              src="/svgs/setting.svg"
              alt="Settings"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}

      {showTabs && tabs.length > 0 && <DashboardTabsBar tabs={tabs} />}
    </header>
  );
};

export default DashboardHeader;
