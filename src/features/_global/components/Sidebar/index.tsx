import React from "react";
import { ISidebarProps } from "./types";
import { SidebarItem } from "./SidebarItem";
import { Poppins } from "../Text/Poppins";
import { BsFillPersonVcardFill } from "react-icons/bs";

export const Sidebar: React.FC<ISidebarProps> = ({ items, user }) => {
  return (
    <div className="fixed w-64 h-screen bg-gray-50 border-r-2 border-solid border-gray-200 flex flex-col gap-5 justify-between">
      <div className="pt-7 px-5 overflow-y-auto flex flex-col gap-4">
        {items?.map((items, index) => (
          <SidebarItem items={items.items} key={index} title={items.title} />
        ))}
      </div>
      {user && (
        <div className="w-full px-5 h-32 border-t border-solid border-gray-300 flex items-center gap-4">
          <div>
            {user.icon ? (
              user.icon
            ) : (
              <BsFillPersonVcardFill className="text-2xl" />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <Poppins className="text-gray-700 md:text-md text-sm font-medium">
              {user.name}
            </Poppins>
            <Poppins className="text-gray-500 md:text-sm text-xs">
              {user.email}
            </Poppins>
          </div>
        </div>
      )}
    </div>
  );
};
