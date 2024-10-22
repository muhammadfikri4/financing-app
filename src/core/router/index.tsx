import { LoginViews } from "@features/authentication/views/Login";
import { RegisterViews } from "@features/authentication/views/Register";
import { DepartmentsViews } from "@features/departments/views/Departments";
import { UsersViews } from "@features/users/views/Users";
import { createBrowserRouter } from "react-router-dom";
import { Auth } from "../../features/_global/views/Auth";
import { Wrapper } from "../../features/_global/views/Wrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <UsersViews />,
      },
      {
        path: "/department",
        element: <DepartmentsViews />,
      },
      {
        path: "/users",
        element: <UsersViews />,
      },
      {
        path: "/budgets",
        element: <DepartmentsViews />,
      },
      {
        path: "/progress",
        element: <UsersViews />,
      },
    ],
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "/sign-in",
        element: <LoginViews />,
      },
      {
        path: "/sign-up",
        element: <RegisterViews />,
      },
    ],
  },
]);
