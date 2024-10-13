import { AuthLoginModel } from "@core/model/auth";
import { authService } from "@core/service/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAuthCreation = () => {
  const mutation = useMutation({
    mutationFn: (data: AuthLoginModel) =>
      authService.signin({
        email: data.email,
        password: btoa(data.password),
      }),
    onSuccess: (res) =>
      toast.success(res.message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "colored",
      }),

    onError: (err) => {
        console.log({
            err
        })
        toast.error(err.message, {
            position: "top-right",
            autoClose: 3000,
            pauseOnHover: true,
            theme: "colored",
          })
    },
  });
  return mutation;
};
