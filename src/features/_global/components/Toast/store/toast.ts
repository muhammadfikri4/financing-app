import { atom } from "jotai";

interface IToast {
  message: string;
  type: "success" | "error";
}

export const toastAtom = atom<IToast[]>([]);
