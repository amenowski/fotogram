import { ReactNode } from "react";

type FormRow = {
  children: ReactNode;
};

export default function FormRow({ children }: FormRow) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
