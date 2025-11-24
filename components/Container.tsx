import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ className = "", children }: ContainerProps) {
  return (
    <div
      className={
        "mx-auto w-full " +
        "max-w-[1920px] px-0 " +   
        "lg:max-w-[1280px] lg:px-12 " +
        "md:max-w-[980px] md:px-6 " +
        className
      }
    >
      {children}
    </div>
  );
}
