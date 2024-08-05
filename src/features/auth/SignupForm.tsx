import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../components/ui/Button";
import FormRow from "./FormRow";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";
import Spinner from "../../components/ui/Spinner";
import { useSignup } from "../../hooks/auth/useSignup";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z
  .object({
    username: z.string().min(5, "Username must have at least 5 characters"),
    email: z.string().email(),
    password: z.string().min(8, "Password must have at least 8 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const { signUp, isPending } = useSignup();
  const [errorSignup, setErrorSignup] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = ({
    username,
    email,
    password,
  }) => {
    setErrorSignup(null);
    signUp(
      { username, email, password },
      {
        onSuccess: () => {
          reset();
        },
        onError: () => {
          setErrorSignup(
            "Signup failed, check your email and password. Try again."
          );
        },
      }
    );
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <label className="font-semibold" htmlFor="username">
          Username:
        </label>
        <Input id="username" placeholder="Username" {...register("username")} />
        <p className="text-sm font-semibold text-red-700">
          {errors?.username?.message}
        </p>
      </FormRow>
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
      <FormRow>
        <label className="font-semibold" htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <Input
          id="username"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p className="text-sm font-semibold text-red-700">
          {errors?.confirmPassword?.message}
        </p>
      </FormRow>
      <p className="text-sm font-semibold text-red-700">{errorSignup}</p>
      <Button variant="primary">
        {isPending ? <Spinner size={16} color="white" /> : "Signup"}
      </Button>

      <p className="text-sm text-center">
        Have you already signup?
        <Link
          className="underline transition hover:underline-none px-1"
          to="/login"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
