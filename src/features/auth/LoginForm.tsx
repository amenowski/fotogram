import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../components/ui/Button";
import FormRow from "./FormRow";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";
import Spinner from "../../components/ui/Spinner";
import { useLogin } from "../../hooks/auth/useLogin";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must have at least 8 characters."),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { login, isPending } = useLogin();
  const [errorLogin, setErrorLogin] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = ({ email, password }) => {
    setErrorLogin(null);
    login(
      { email, password },
      {
        onSuccess: () => {
          reset();
        },
        onError: () => {
          setErrorLogin(
            "Login failed, check your email and password. Try again."
          );
        },
      }
    );
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <label className="font-semibold" htmlFor="email">
          Email:
        </label>
        <Input id="username" placeholder="Email" {...register("email")} />
        <p className="text-sm font-semibold text-red-700">
          {errors?.email?.message}
        </p>
      </FormRow>
      <FormRow>
        <label className="font-semibold" htmlFor="password">
          Password:
        </label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
        <p className="text-sm font-semibold text-red-700">
          {errors?.password?.message}
        </p>
      </FormRow>

      <p className="text-sm font-semibold text-red-700">{errorLogin}</p>
      <Button variant="primary">
        {isPending ? <Spinner size={16} color="white" /> : "Login"}
      </Button>

      <p className="text-sm text-center">
        Don't have account yet?
        <Link className="px-1 underline hover:no-underline" to="/signup">
          Create
        </Link>
      </p>
    </form>
  );
}
