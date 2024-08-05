import { useMutation, useQueryClient } from "@tanstack/react-query";

import { TLogin } from "../../lib/types";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: TLogin) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { login, isPending };
}
