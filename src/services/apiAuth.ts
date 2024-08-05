import supabase from "./supabase";

export async function signup({
  email,
  password,
  username,
}: {
  email: string;
  password: string;
  username: string;
}) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (error) throw Error(error.message);
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data: user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw Error(error.message);

  return user;
}
