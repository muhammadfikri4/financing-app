import { Button } from "@features/global/components/Button";
import { Input } from "@features/global/components/Input";
import { useState } from "react";

import { BsEye, BsEyeSlash } from "react-icons/bs";
import { IoKeyOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <form className="w-full flex flex-col gap-4 py-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-poppins">Email</p>
          <Input
            LeftIcon={<MdAlternateEmail className="text-md text-gray-500" />}
            placeholder="Enter your email"
            rounded="lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-poppins">Password</p>
          <Input
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
          <Button rounded="lg">Sign In</Button>
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
