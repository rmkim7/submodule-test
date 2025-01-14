"use client";

import { ReactNode } from "react";

interface ButtonProps {
  divClassName?: string;
  buttonClassName?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  divClassName = "",
  buttonClassName = "",
  children,
}) => {
  return (
    <div className={divClassName}>
      <button className={buttonClassName}>{children}</button>
    </div>
  );
};

export default Button;
