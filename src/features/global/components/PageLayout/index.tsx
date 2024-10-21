import React from "react";

interface IPageLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export const PageLayout: React.FC<IPageLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5 px-5">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="w-full">{children}</div>
    </div>
  );
};
