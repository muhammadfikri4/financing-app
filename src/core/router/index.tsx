import { createBrowserRouter } from "react-router-dom";
import { Wrapper } from "../../features/global/views/Wrapper";
import { Auth } from "../../features/global/views/Auth";
import { LoginViews } from "@features/authentication/views/Login";
import { RegisterViews } from "@features/authentication/views/Register";
import { HomeViews } from "@features/home/views/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <HomeViews />,
      },
      {
        path: "/department",
        element: <HomeViews />,
      },
      {
        path: "/",
        element: <HomeViews />,
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
