import { ToastContainer } from "@features/global/components/Toast";
import { useToast } from "@features/global/components/Toast/hooks/useToast";

export const HomeViews = () => {
  const toast = useToast();
  return (
    <>
      <ToastContainer />
      <p onClick={() => toast.success("tes")}>tes</p>
    </>
  );
};
