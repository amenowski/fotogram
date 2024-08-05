import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  to?: string;
  disabled?: boolean;
  className?: string;
};

const buttonVariants = cva(
  "outline-none focus:ring-2 border rounded-md px-4 py-2 text-sm  transition font-semibold",
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary focus:bg-primary/80 text-white hover:bg-primary/80 ring-secondary",
        secondary:
          "bg-secondary border-secondary focus:bg-secondary/80 text-white hover:bg-secondary/80 ring-primary",
        outline:
          " border-primary ring-primary focus:bg-primary/5 hover:bg-primary/5",
        ghost: " ring-primary hover:bg-primary/5 border-none",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  }
);

export default function Button({
  children,
  disabled,
  variant,
  to,
  onClick,
  className,
}: ButtonProps) {
  if (to) {
    return (
      <Link
        to={!disabled ? to : "/home"}
        className={`${disabled ? "cursor-not-allowed" : ""} ${className} ${cn(
          buttonVariants({ variant })
        )}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? "cursor-not-allowed" : ""} ${className} ${cn(
        buttonVariants({ variant })
      )}`}
    >
      {children}
    </button>
  );
}
