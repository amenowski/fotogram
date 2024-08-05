import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "px-3 py-2 text-sm rounded-sm outline-none border ring-primary focus:ring-1 transition focus:shadow-sm",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
