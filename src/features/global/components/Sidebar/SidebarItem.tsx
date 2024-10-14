import React from "react";
import { ISidebarItemProps } from "./types";
import { Link, useLocation } from "react-router-dom";

export const SidebarItem: React.FC<ISidebarItemProps> = ({ items, title }) => {
    const location = useLocation()
  return (
    <>
      <div className="flex flex-col gap-2">
        <div>{title && <p className="text-sm font-poppins">{title}</p>}</div>
        <div className="flex flex-col gap-5">
          {items?.map((item, index) => (
            <Link to={item.path}>
              <div key={index} className={`${location.pathname === item.path ? "bg-blue-500 text-white" : ""} p-4 rounded-md text-md`}>
                <p className="font-poppins text-sm">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};