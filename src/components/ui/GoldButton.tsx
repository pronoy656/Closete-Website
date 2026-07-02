"use client";

import React from "react";

const GOLD_GRADIENT =
  "linear-gradient(99.37deg, #AF7413 4.77%, #C98C28 19.33%, #E2B744 38.93%, #FFED81 50.54%, #E1C24E 62.1%, #A06008 90.74%)";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export function GoldButton({
  children,
  variant = "filled",
  size = "md",
  href,
  className = "",
  style,
  ...props
}: GoldButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 ease-out cursor-pointer whitespace-nowrap select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

  const sizeStyles: Record<string, string> = {
    sm: "h-8 px-4 text-xs rounded-full gap-1.5",
    md: "h-10 px-6 text-sm rounded-full gap-2",
    lg: "h-12 px-8 text-base rounded-full gap-2.5",
  };

  const variantStyles: Record<string, string> = {
    filled:
      "border border-[#E2B744] text-black shadow-[0_0_20px_rgba(175,116,19,0.4)] hover:shadow-[0_0_32px_rgba(175,116,19,0.65)] hover:-translate-y-0.5",
    outline:
      "border border-[#C98C28]/60 text-[#E2B744] bg-[#AF7413]/5 hover:bg-[#AF7413]/15 hover:border-[#E2B744] hover:text-[#FFED81] hover:-translate-y-0.5",
  };

  const combinedClassName = [
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const filledStyle =
    variant === "filled"
      ? { background: GOLD_GRADIENT, ...style }
      : style;

  if (href) {
    return (
      <a href={href} className={combinedClassName} style={filledStyle}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} style={filledStyle} {...props}>
      {children}
    </button>
  );
}
