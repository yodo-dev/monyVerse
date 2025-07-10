import Image from "next/image";
import React, { FC } from "react";

type CardProps = {
  date: string;
  title: string;
  img: string;
  onGoingCount: number;
};

const EventCard: FC<CardProps> = ({ date, title, img, onGoingCount }) => {
  return (
    <div className="w-[673px] h-[206px] border border-gray-400 my-4 rounded-2xl p-1 flex gap-4">
      <Image
        src="/images/event.png"
        alt="event-Image"
        width={215}
        height={196}
      />
      <div className="flex-1 my-3 space-y-2">
        <p className="font-semibold uppercase">{date}</p>
        <h4 className="text-xl font-semibold uppercase">{title}</h4>
        <div className="my-4 border-t py-3 border-t-gray-400">
          <div className="flex items-center gap-2">
            <Image src="/svgs/zoom.svg" alt="zoom" width={29} height={29} />
            <p className="font-semibold">Zoom meeting</p>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex items-center space-x-2 mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((_, index) => (
                  <Image
                    key={index}
                    className=" rounded-full border-2 border-dark-800"
                    src={img}
                    width={27}
                    height={27}
                    alt="User 1"
                  />
                ))}
              </div>
              <span className="text-gray-400 font-semibold">
                {onGoingCount} ongoing
              </span>
            </div>
            <button className="cursor-pointer mr-4 border border-gray-300 gap-2 rounded border-b-2 border-b-primary flex items-center px-4 py-1 pb-2 ">
              <Image src="/svgs/shine.svg" alt="shine" width={30} height={30} />
              <span>Calcdoms de santi..</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
