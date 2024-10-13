import React, { ReactElement } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rounded?: "sm" | "md" | "lg";
  error?: boolean;
  LeftIcon?: ReactElement;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
  RightIcon?: ReactElement;
}

export const Input: React.FC<InputProps> = ({
  rounded = "md",
  LeftIcon,
  RightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  error = false,
  ...rest
}) => {
  return (
    <div className="flex items-center justify-between">
      {LeftIcon && (
        <div className="absolute p-4" onClick={onClickLeftIcon}>
          {LeftIcon}
        </div>
      )}
      <input
        {...rest}
        className={`
          border
          px-4
          py-3
          ${LeftIcon ? "pl-10" : ""}
          ${RightIcon ? "pr-10" : ""}
          ${error ? "border-red-500" : "border-[#DADADA]"}
          focus:border
          placeholder:text-sm
          placeholder:font-poppins
          placeholder:text-[#87898E]
          ${error ? "focus:border-red-500" : "focus:border-blue-500"}
          duration-300
          font-poppins
          text-sm
          focus:outline-none
          w-full
          ${error ? "text-red-500" : ""}
          ${
            rounded == "sm"
              ? "rounded-sm"
              : rounded == "md"
              ? "rounded-md"
              : "rounded-lg"
          }
          `}
      />
      {RightIcon && (
        <div className="absolute right-10 p-4" onClick={onClickRightIcon}>
          <div>{RightIcon}</div>
        </div>
      )}
    </div>
  );
};
