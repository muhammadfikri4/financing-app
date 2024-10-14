import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

interface ToastItem {
  message: string;
  type: "success" | "error";
}

export const ToastItem: React.FC<ToastItem> = ({ message, type}) => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false); // Set langsung ke false setelah 4 detik
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
  //   ${
  //     type === "success" ? "bg-green-500" : "bg-red-500"
  //   }
  return (
    <>
      {show && (
        <div
          className={`w-60 min-h-16 bg-black border-[3px] border-solid ${
            type === "success" ? "border-green-500" : "border-red-500"
          } px-5 py-2 rounded-md flex items-center justify-between ${
            show ? "opacity-100" : "opacity-0"
          } duration-300`}
        >
          <p className="font-poppins text-white">{message}</p>
          <div className="p-2 cursor-pointer" onClick={() => setShow(false)}>
            <CgClose className="text-lg text-white" />
          </div>
        </div>
      )}
    </>
  );
};
