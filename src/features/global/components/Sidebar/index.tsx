import React from "react";
import { ISidebarProps } from "./types";
import { SidebarItem } from "./SidebarItem";

export const Sidebar: React.FC<ISidebarProps> = ({ items }) => {
  return (
    <div className="fixed w-64 h-screen bg-gray-50 border-r-2 border-solid border-gray-200 px-5 py-5 flex flex-col gap-5">
      {items?.map((items, index) => (
        <SidebarItem items={items.items} key={index} title={items.title} />
      ))}
    </div>
  );
};
