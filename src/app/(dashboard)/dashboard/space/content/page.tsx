"use client";
import Button from "@/components/Button";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Content = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="mr-20">
      <div>
        <h4 className="font-bold">Select All</h4>
        <div
          onClick={() => setChecked(!checked)}
          className="flex border border-gray-300 h-16 items-center px-4 rounded-lg my-3 space-x-2 "
        >
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <p className="fon-bold">Overview</p>
          {checked ? (
            <Eye color="gray" width={16} height={16} />
          ) : (
            <EyeOff color="gray" width={16} height={16} />
          )}
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
      </div>
    </div>
  );
};

export default Content;
