import LoginForm from "../features/auth/LoginForm";

export default function Signup() {
  return (
    <section className="w-full h-screen flex justify-center py-[8rem]">
      <div className="max-w-[30rem] w-full px-4 mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8">Login</h1>
        <LoginForm />
      </div>
    </section>
  );
}
