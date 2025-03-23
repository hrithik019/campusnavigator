
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "gleam" | "neuro";
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
  const baseStyles = "font-medium rounded-xl transition-all duration-200 flex items-center justify-center relative overflow-hidden";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 active:bg-gray-300 shadow-sm",
    outline: "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50 shadow-sm",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
    gradient: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white hover:shadow-lg hover:shadow-blue-500/25 active:opacity-90",
    gleam: "bg-white text-blue-600 border border-white/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]",
    neuro: "bg-gray-50 text-gray-800 shadow-[5px_5px_10px_#d4d4d4,-5px_-5px_10px_#ffffff] hover:shadow-[7px_7px_12px_#d4d4d4,-7px_-7px_12px_#ffffff] active:shadow-[inset_5px_5px_10px_#d4d4d4,inset_-5px_-5px_10px_#ffffff]"
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

  // Special styles for gleam effect
  const gleamEffect = variant === "gleam" ? (
    <span className="absolute inset-0 overflow-hidden rounded-xl">
      <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
    </span>
  ) : null;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {gleamEffect}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {gleamEffect}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default CustomButton;
