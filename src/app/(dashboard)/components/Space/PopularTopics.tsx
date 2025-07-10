"use client";

import React, { useState } from "react";
import Image from "next/image";
import { actions } from "@/data";
import Card from "../Card";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { usePathname } from "next/navigation";
import TopicsCard from "../TopicsCard";

const PopularTopics: React.FC = () => {
  const [selected, setSelected] = useState<Date>();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname == "/dashboard/space/events" ? (
        <DayPicker
          mode="single"
          className="border rounded border-gray-300 p-3"
          selected={selected}
          onSelect={setSelected}
        />
      ) : (
        <Card title="Popular topics">
          <TopicsCard
            title="#finance"
            description="87 peoples are interacting"
            bg="#69CCE1"
          />
          <TopicsCard
            title="#lifeofmind together"
            description="87 peoples are interacting"
            bg="#D8C357"
          />
          <TopicsCard
            title="#slight"
            description="87 peoples are interacting"
            bg="#B07CFF"
          />
          <TopicsCard
            title="#topinsights areready"
            description="87 peoples are interacting"
            bg="#E169CE"
          />
        </Card>
      )}

      <div className="my-4"></div>

      {pathname == "/dashboard/space/events" ? (
        <Card title="Popular topics">
          <TopicsCard
            title="#finance"
            description="87 peoples are interacting"
            bg="#69CCE1"
          />
          <TopicsCard
            title="#lifeofmind together"
            description="87 peoples are interacting"
            bg="#D8C357"
          />
          <TopicsCard
            title="#slight"
            description="87 peoples are interacting"
            bg="#B07CFF"
          />
          <TopicsCard
            title="#topinsights areready"
            description="87 peoples are interacting"
            bg="#E169CE"
          />
        </Card>
      ) : (
        <Card title="Quick Action">
          {actions.map((item) => (
            <div className="flex items-center gap-4 my-4" key={item.id}>
              <Image src={item.icon} alt={item.name} width={34} height={34} />
              <p className="font-bold">{item.name}</p>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};

export default PopularTopics;
