import { useAtom } from "jotai";
import { toastAtom } from "../store/toast";

export const useToast = () => {
  const [, setToast] = useAtom(toastAtom);

  const success = (message: string) => {
    setToast((prev) => [...prev, { message, type: "success" }]);
  };
  const error = (message: string) => {
    setToast((prev) => [...prev, { message, type: "error" }]);
  };
  return {
    success,
    error,
  };
};
