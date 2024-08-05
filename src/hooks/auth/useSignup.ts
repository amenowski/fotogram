import { TSignup } from "../../lib/types";
import { signup } from "../../services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ username, email, password }: TSignup) =>
      signup({ username, email, password }),
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { signUp, isPending };
}
