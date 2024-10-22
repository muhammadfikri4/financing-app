import { config } from "@core/libs/config";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { menus } from "../config/menu";
import { cookie } from "../utils/cookies";
import { useProfile } from "@features/profile/hooks/useProfile";
import { useAtom } from "jotai";
import { sidebarAtom } from "../components/Sidebar/store";

export const Wrapper = () => {
  const token = cookie.get(config.storage);
  const [show] = useAtom(sidebarAtom)
  const { data: profile } = useProfile();
  if (!token) {
    return <Navigate to={"/sign-in"} />;
  }

  return (
    <>
      <Sidebar
        items={menus}
        user={{
          name: profile?.data?.name ?? "waiting...",
          email: profile?.data?.email ?? "waiting...",

        }}
      />
      <div className={`${show ? "md:pl-72" : "md:pl-10 pl-0"} pt-12`}>
        <Outlet />
      </div>
    </>
  );
};
