import { cn } from "../../lib/utils";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <h1
      className={cn("font-dosis text-3xl font-semibold text-center", className)}
    >
      Fotog <span className="text-primary -ml-1.5">ram</span>
    </h1>
  );
}
