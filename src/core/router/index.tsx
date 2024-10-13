import { createBrowserRouter } from "react-router-dom";
import { Wrapper } from "../../features/global/views/Wrapper";
import { Auth } from "../../features/global/views/Auth";
import { LoginViews } from "@features/authentication/views/Login";
import { RegisterViews } from "@features/authentication/views/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
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
