import { ISidebarItemProps } from "../components/Sidebar/types";

export const menus: ISidebarItemProps[] = [
  {
    title: "System",
    items: [
      {
        id: 1,
        name: "User",
        path: "/",
      },
      {
        id: 2,
        name: "Department",
        path: "/department",
      }
    ],
  },
  {
    title: "Budgets",
    items: [
      {
        id: 4,
        name: "Budget",
        path: "/budgets",
      },
      {
        id: 5,
        name: "Progress",
        path: "/progress",
      }
    ],
  },
];
