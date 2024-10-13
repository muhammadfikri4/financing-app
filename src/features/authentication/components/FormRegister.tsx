import { Button } from "@features/global/components/Button";
import { Dropdown } from "@features/global/components/Dropdown";
import { Input } from "@features/global/components/Input";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { HiOutlineQrCode } from "react-icons/hi2";
import { IoKeyOutline, IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const FormRegister = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <form className="w-full flex flex-col gap-4 py-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-poppins">Name</p>
          <Input
            LeftIcon={<IoPersonOutline className="text-md text-gray-500" />}
            placeholder="Enter your email"
            rounded="lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-poppins">Email</p>
          <Input
            LeftIcon={<MdAlternateEmail className="text-md text-gray-500" />}
            placeholder="Enter your email"
            rounded="lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-poppins">Code</p>
          <Input
            LeftIcon={<HiOutlineQrCode className="text-md text-gray-500" />}
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
        <div className="flex flex-col gap-1">
          <p className="text-sm font-poppins">Role</p>
          <Dropdown
          searchInput
            placeholder="Select Role"
            list={[
              {
                label: "Admin",
                value: "Admin",
              },
              {
                label: "Managing Director",
                value: "Managing Director",
              },
              {
                label: "Finance",
                value: "Finance",
              },
              {
                label: "HOD",
                value: "HOD",
              },
              {
                label: "Manager",
                value: "Manager",
              },
            ]}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Button rounded="lg">Sign Up</Button>
          <Link to="/sign-in">
            <Button type="button" rounded="lg" variant="secondary">
              Sign In
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
};
