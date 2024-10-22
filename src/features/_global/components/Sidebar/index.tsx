import { useAtom } from "jotai";
import React from "react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Poppins } from "../Text/Poppins";
import { SidebarItem } from "./SidebarItem";
import { sidebarAtom } from "./store";
import { ISidebarProps } from "./types";

export const Sidebar: React.FC<ISidebarProps> = ({ items, user }) => {
  const [show, setShow] = useAtom(sidebarAtom);
  const handleShow = () => setShow((prev) => !prev);
  return (
    <>
      <div
        className={`flex items-center justify-center cursor-pointer duration-300 bg-gray-200 p-2 z-[999] rounded-full w-10 h-10 absolute top-1 left-1`}
        onClick={handleShow}
      >
        <HiOutlineMenuAlt3 className="text-xl text-gray-600" />
      </div>
      <div
        className={`fixed h-screen duration-300 ${
          show ? "left-0" : "-left-64"
        } bg-gray-50 border-r-2 border-solid border-gray-200 flex flex-col gap-5 justify-between`}
      >
        <div className="pt-14 px-5 overflow-y-auto flex flex-col gap-4">
          {items?.map((items, index) => (
            <SidebarItem items={items.items} key={index} title={items.title} />
          ))}
        </div>
        {user && (
          <div className="w-full px-5 h-24 border-t border-solid border-gray-300 flex items-center gap-4">
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
    </>
  );
};
