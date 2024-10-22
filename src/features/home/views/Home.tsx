import { ToastContainer } from "@features/_global/components/Toast";
import { useToast } from "@features/_global/components/Toast/hooks/useToast";

export const HomeViews = () => {
  const toast = useToast();
  return (
    <>
      <ToastContainer />
      <p onClick={() => toast.success("tes")}>tes</p>
    </>
  );
};
