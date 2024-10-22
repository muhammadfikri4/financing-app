import { AuthLoginModel } from "@core/model/auth";
import { Button } from "@features/_global/components/Button";
import { Input } from "@features/_global/components/Input";
import { useState } from "react";

import { BsEye, BsEyeSlash } from "react-icons/bs";
import { IoKeyOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuthLoginCreation } from "../hooks/useAuth";

export const FormLogin = () => {
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<AuthLoginModel>({
    email: "",
    password: "",
  });
  const mutation = useAuthLoginCreation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutation.mutateAsync(data);
  };

  return (
    <>
      <form className="w-full flex flex-col gap-4 py-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-poppins">Email</p>
          <Input
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
            LeftIcon={<MdAlternateEmail className="text-md text-gray-500" />}
            placeholder="Enter your email"
            rounded="lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-poppins">Password</p>
          <Input
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
            LeftIcon={<IoKeyOutline className="text-md text-gray-500" />}
            RightIcon={
              show ? (
                <BsEye className="text-xl text-gray-500 cursor-pointer" />
              ) : (
                <BsEyeSlash className="text-xl text-gray-500 cursor-pointer" />
              )
            }
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            rounded="lg"
            onClickRightIcon={() => setShow((prev) => !prev)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Button
            rounded="lg"
            variant={mutation.isPending ? "disabled" : "primary"}
          >
            {mutation.isPending ? "Loading..." : "Sign In"}
          </Button>
          <Link to="/sign-up">
            <Button type="button" rounded="lg" variant="secondary">
              Sign Up
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
};
