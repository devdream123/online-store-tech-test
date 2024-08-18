import React from "react";
import classnames from "classnames";

export type ButtonType = "primary" | "secondary" | "danger";

interface ButtonProps {
  label: string;
  onClick: () => void;
  buttonType: ButtonType;
  className?: string;
}

const Button = ({ label, onClick, buttonType, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classnames(className, {
        "bg-harvey-primary text-white py-3 rounded-harvey-radius-0":
          buttonType === "primary",
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
