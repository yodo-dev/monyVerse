"use client";
import EventCard from "@/app/(dashboard)/components/Space/EventCard";
import Tabs from "@/app/(dashboard)/components/Space/Tabs";
import { events } from "@/data";
import React, { useState } from "react";
const onGoingImg = "/images/profile.png";
const Events = () => {
  const [selected, setSelected] = useState<number>(1);
  return (
    <div>
      <Tabs selected={selected} setSelected={setSelected} data={events} />
      <div className="mt-8">
        {[1, 2, 3, 4].map((_, index) => (
          <EventCard
            key={index}
            date="MON 16 OCT 2024 21:00"
            title="THE LAVERAGE EFFECT"
            onGoingCount={4}
            img={onGoingImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
