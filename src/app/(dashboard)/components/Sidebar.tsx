"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarData } from "@/data";
import Button from "../../../components/Button";

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed h-full w-64 bg-secondary border-r border-gray-300  p-6 space-y-6">
      <div className="mb-4 flex items-center gap-2">
        <Image src="/svgs/logo.svg" alt="Logo" width={40} height={40} />
        <h3 className="text-xl font-bold">monyverse</h3>
      </div>

      <Button
        className="mt-2"
        label="Create"
        type="button"
        iconElement={
          <Image
            src="/svgs/add.svg"
            alt="Add"
            width={16}
            height={16}
            className="inline"
          />
        }
        fullWidth
      />

      <nav>
        <ul className="space-y-2 ">
          {sidebarData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`flex items-center gap-3 px-2 py-2 rounded-md transition `}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="font-bold">{item.title}</span>
              </Link>

              {item.id === 3 && item.items && (
                <ul className="ml-5 my-1 space-y-1">
                  {item.items.map((subItem) => (
                    <li key={subItem.id} className="my-3">
                      <Link
                        href={subItem.path}
                        className={`flex items-center gap-3 px-2 py-1 text-sm rounded-md transition `}
                      >
                        <Image
                          src={subItem.icon}
                          alt={subItem.title}
                          width={15}
                          height={15}
                          className="w-6 h-6"
                        />
                        <span className="mt-1 font-bold">{subItem.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
