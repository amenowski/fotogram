import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";

type TeaxtareaProps = ComponentPropsWithoutRef<"textarea"> & {
  className?: string;
};

export default function Textarea({ className, ...rest }: TeaxtareaProps) {
  return (
    <textarea
      className={cn(
        "text-sm px-2 p-2 rounded-md resize-none outline-none border ring-primary focus:ring-1 transition",
        className
      )}
      {...rest}
    />
  );
}
