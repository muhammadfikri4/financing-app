import { config } from "@core/libs/config";
import { AuthLoginModel } from "@core/model/auth";
import { authService } from "@core/service/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useAuthLoginCreation = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: AuthLoginModel) =>
      authService.signin({
        email: data.email,
        password: btoa(data.password),
      }),
    onSuccess: (res) => {
      localStorage.setItem(config.storage, res.data?.accessToken ?? "");
      navigate("/");
      toast.success(res.message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "colored",
      });
    },
    onError: (err) =>
      toast.error(err.message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "colored",
      }),
  });
  return mutation;
};
