import React, { FC } from "react";

interface Data {
  id: number;
  name: string;
}

type TabsProps = {
  selected: number;
  setSelected: (id: number) => void;
  data: Data[];
};

const Tabs: FC<TabsProps> = ({ data, selected, setSelected }) => {
  return (
    <div className="flex gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelected(item.id)}
          className={`px-6 py-3 border  rounded-full cursor-pointer ${
            selected === item.id
              ? "bg-[#8A87F04A] border-primary border-2"
              : "border-gray-300"
          }`}
        >
          <p className="font-bold">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
