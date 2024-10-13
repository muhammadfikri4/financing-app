import { Navigate, Outlet } from "react-router-dom";

export const Wrapper = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/sign-in"} />;
  }
  return (
    <div>
      <h1>Wrapper</h1>
      <Outlet />
    </div>
  );
};
