"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300",
                    "hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black",
                    {
                        "bg-primary text-black hover:bg-primary/90": variant === "primary",
                        "bg-secondary text-black hover:bg-secondary/90": variant === "secondary",
                        "border border-white/20 text-white hover:bg-white/10": variant === "outline",
                        "text-white hover:bg-white/10": variant === "ghost",
                        "px-4 py-2 text-sm": size === "sm",
                        "px-6 py-3 text-base": size === "md",
                        "px-8 py-4 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                <span className="relative z-10">{props.children}</span>
                {variant === "primary" && (
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 transition-opacity duration-300 hover:opacity-100" />
                )}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
