
import React from "react";
import { cn } from "@/lib/utils";

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: "gleam" | "neuro" | "glass" | "default";
}

const BlurCard: React.FC<BlurCardProps> = ({
  children,
  className,
  hoverEffect = false,
  variant = "default",
  ...props
}) => {
  const baseStyles = "rounded-2xl p-6 transition-all duration-300 overflow-hidden relative";
  
  const variantStyles = {
    default: "glass",
    glass: "glass",
    gleam: "bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg",
    neuro: "bg-gray-50 shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] dark:bg-gray-800 dark:shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#2c2c2c]"
  };

  const hoverStyles = hoverEffect ? 
    variant === "neuro" 
      ? "hover:shadow-[12px_12px_20px_#d1d1d1,-12px_-12px_20px_#ffffff] hover:translate-y-[-2px]" 
      : "hover:shadow-xl hover:shadow-blue-600/15 hover:translate-y-[-2px]" 
    : "";

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        className
      )}
      {...props}
    >
      {variant !== "neuro" && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BlurCard;
