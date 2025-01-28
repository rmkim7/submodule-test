"use client";

import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  divClassName?: string;
  buttonClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  divClassName = "",
  buttonClassName = "",
  onClick,
  children,
}) => {
  return (
    <div className={divClassName}>
      <button onClick={onClick} className={buttonClassName}>
        {children}
      </button>
    </div>
  );
};

export default Button;
