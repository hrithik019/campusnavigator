import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  to?: string;
  fullWidth?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  to,
  fullWidth = false,
  ...props
}) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-200 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300",
    outline: "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-2",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-6 py-3",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const buttonClass = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyle,
    className
  );

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
