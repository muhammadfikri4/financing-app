import { ReactNode } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "disabled";
  rounded?: "sm" | "md" | "lg" | "full";
}

export const Button: React.FC<IButtonProps> = ({
  children,
  variant = "primary",
  rounded = "md",
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={(e) => variant === "disabled" ? e.preventDefault() :  rest?.onClick?.(e)}
      className={`
    ${
      variant == "danger"
        ? "bg-red-500"
        : variant == "secondary"
        ? "bg-gray-50"
        : variant == "primary"
        ? "bg-blue-500"
        : "bg-gray-300"
    }
    ${
      variant == "secondary" || variant == "disabled"
        ? "text-gray-500"
        : "text-white"
    }
        ${
      variant == "disabled"
        ? "cursor-not-allowed"
        : "cursor-pointer"
    }
    ${
      rounded == "sm"
        ? "rounded-sm"
        : rounded == "full"
        ? "rounded-full"
        : rounded == "lg"
        ? "rounded-lg"
        : "rounded-md"
    }
    font-semibold
    font-poppins
    px-4
    py-2.5
    w-full
    duration-300
    ${
      variant == "secondary" || variant == "disabled"
        ? "border border-solid border-gray-300"
        : ""
    }
     ${
       variant == "danger"
         ? "hover:bg-red-600"
         : variant == "secondary"
         ? "hover:bg-gray-100"
         : variant == "primary"
         ? "hover:bg-blue-600"
         : ""
     }
    `}
    >
      {children}
    </button>
  );
};
