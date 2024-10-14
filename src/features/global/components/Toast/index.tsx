import { useAtom } from "jotai";
import { toastAtom } from "./store/toast";
import { ToastItem } from "./ToastItem";

export const ToastContainer = () => {
  const [toast] = useAtom(toastAtom);

  return (
    <div className="fixed right-8 flex flex-col gap-2">
      {toast.map((item, index) => (
        <ToastItem key={index} message={item.message} type={item.type} />
      ))}
    </div>
  );
};
