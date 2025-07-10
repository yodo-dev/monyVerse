"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/app/(dashboard)/components/Sidebar";
import DashboardHeader from "@/app/(dashboard)/components/DashboardHeader";

interface TabProps {
  name: string;
  link: string;
}

interface LayoutConfig {
  title?: string;
  tabs?: TabProps[];
  showTabs?: boolean;
}

const layoutConfig: Record<string, LayoutConfig> = {
  "/dashboard/space": {
    title: "Dev's Space",
    tabs: [
      { name: "Feed", link: "/dashboard/space" },
      { name: "Table of Contents", link: "/dashboard/space/content" },
      { name: "Discovery", link: "/dashboard/space/discovery" },
      { name: "Events", link: "/dashboard/space/events" },
      { name: "Chat", link: "/dashboard/space/chat" },
    ],
    showTabs: true,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const getCurrentConfig = () => {
    if (pathname.startsWith("/dashboard/space")) {
      return layoutConfig["/dashboard/space"];
    }
    return {
      title: "",
      tabs: [],
      showTabs: false,
    };
  };
  const currentConfig = getCurrentConfig();
  return (
    <div className="flex min-h-screen bg-secondary">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <DashboardHeader
          title={currentConfig.title}
          tabs={currentConfig.tabs || []}
          showTabs={currentConfig.showTabs || false}
        />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
