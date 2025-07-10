import Image from "next/image";
import React, { FC } from "react";

type cardProps = {
  title: string;
  description: string;
  btnTitle: string;
  members?: boolean;
  top?: boolean;
};

const DiscoveryCard: FC<cardProps> = ({
  title,
  description,
  btnTitle,
  members,
  top,
}) => {
  return (
    <div className="mb-6">
      <h4 className="font-bold">{title}</h4>
      <p className="text-gray-500">{description}</p>
      <div className="mt-3">
        <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex-shrink-0">
              {top ? (
                <Image
                  src="/images/profile.png"
                  alt="User Profile"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              ) : (
                <button
                  key={index}
                  className={`border-2 flex flex-col justify-center items-center rounded-2xl border-gray-300 cursor-pointer ${
                    members ? "h-20 w-20 rounded-full" : "h-45 w-50 space-y-2"
                  }`}
                >
                  {index === 0 && (
                    <>
                      <Image
                        src="/svgs/add.svg"
                        alt="create post"
                        width={20}
                        height={20}
                      />
                      <p>{btnTitle}</p>
                    </>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCard;
