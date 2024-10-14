import { config } from "@core/libs/config";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { menus } from "../config/menu";

export const Wrapper = () => {
  const token = localStorage.getItem(config.storage);
  if (!token) {
    return <Navigate to={"/sign-in"} />;
  }
  return (
    <>
      <Sidebar items={menus} />
      <div className="pl-72 pt-8">
      <Outlet />
      </div>
    </>
  );
};
