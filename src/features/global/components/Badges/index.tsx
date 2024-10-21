import React from "react";

interface IBadgesProps {
  text: string;
  variant?: "primary" | "secondary" | "danger";
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
    default:
      return {
        bg: "bg-blue-200",
        border: "border-blue-500",
        text: "text-blue-600",
      };
  }
};

export const Badges: React.FC<IBadgesProps> = ({
  text,
  variant = "primary",
}) => {
  return (
    <div
      className={`${
        generateVariant(variant).bg
      } w-max px-3 py-1 rounded-md border border-solid ${
        generateVariant(variant).border
      }`}
    >
      <p className={`text-xs ${generateVariant(variant).text}`}>{text}</p>
    </div>
  );
};
