import { config } from "@core/libs/config";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { menus } from "../config/menu";
import { cookie } from "../utils/cookies";

export const Wrapper = () => {
  const token = cookie.get(config.storage);
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
