"use client";

import Link from "next/link";
import React from "react";

interface TabProps {
  name: string;
  link: string;
}

interface TabsBarProps {
  tabs: TabProps[];
}

const DashboardTabsBar: React.FC<TabsBarProps> = ({ tabs }) => {
  return (
    <nav className="mt-4">
      <ul className="flex gap-6">
        {tabs.map((tab, index) => (
          <li key={index}>
            <Link
              href={tab.link}
              className="text-sm font-medium  hover:text-purple-800 hover:border-b border-primary transition-colors"
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashboardTabsBar;
