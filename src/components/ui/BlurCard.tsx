
import React from "react";
import { cn } from "@/lib/utils";

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const BlurCard: React.FC<BlurCardProps> = ({
  children,
  className,
  hoverEffect = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300 overflow-hidden relative",
        hoverEffect && "hover:shadow-xl hover:shadow-blue-500/10 hover:translate-y-[-2px]",
        className
      )}
      {...props}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur opacity-30"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BlurCard;
