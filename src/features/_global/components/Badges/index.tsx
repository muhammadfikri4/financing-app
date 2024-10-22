import React from "react";

interface IBadgesProps {
  text: string;
  variant?: "primary" | "secondary" | "danger" | 'success';
  size?: 'sm' | 'md' | 'lg'
}

const generateVariant = (variant: IBadgesProps["variant"]) => {
  switch (variant) {
    case "primary":
      return {
        bg: "bg-blue-200",
        border: "border-blue-500",
        text: "text-blue-600",
      };
    case "secondary":
      return {
        bg: "bg-gray-200",
        border: "border-gray-500",
        text: "text-gray-600",
      };
    case "danger":
      return {
        bg: "bg-red-200",
        border: "border-red-500",
        text: "text-red-600",
      };
    case "success":
      return {
        bg: "bg-green-200",
        border: "border-green-500",
        text: "text-green-600",
      };
    default:
      return {
        bg: "bg-blue-200",
        border: "border-blue-500",
        text: "text-blue-600",
      };
  }
};

const generatedSize = (size: IBadgesProps['size']) => {
  switch(size) {
    case 'lg':
      return 'py-1.5 px-3'
    case 'md':
      return 'py-1 px-2'
    case 'sm':
      return 'py-0.5 px-1.5'
    default:
      return'py-1 px-2'
  }
}

export const Badges: React.FC<IBadgesProps> = ({
  text,
  variant = "primary",
  size = 'md'
}) => {
  return (
    <div
      className={`${
        generateVariant(variant).bg
      } w-max ${generatedSize(size)} rounded-md border border-solid ${
        generateVariant(variant).border
      } duration-300`}
    >
      <p className={`text-xs ${generateVariant(variant).text}`}>{text}</p>
    </div>
  );
};
