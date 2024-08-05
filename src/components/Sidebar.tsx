import Button from "./ui/Button";
import { LogOutIcon } from "lucide-react";
import Logo from "./ui/Logo";
import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <section className="sticky top-0 left-0 flex flex-col gap-8 h-screen max-w-[5rem] sm:max-w-[12.5rem] border-r py-6 px-4 transition">
      <Logo className="hidden sm:block" />
      <Navigation />
      <div className="mt-auto">
        <Button className="flex items-center justify-center">
          <LogOutIcon size={20} />
        </Button>
      </div>
    </section>
  );
}
