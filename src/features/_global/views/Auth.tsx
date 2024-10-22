import Money from "@core/assets/money.svg";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <>
      <div className="flex">
        <img src={Money} className="w-[50vw] h-screen object-cover" />
        <div className="flex items-center w-full h-screen px-10">
          <Outlet/>
        </div>
      </div>
    </>
  );
};
