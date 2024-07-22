import supabase from "./supabase";

//mordern software developement its common not to pass in multiple parameters in function but pass in an object
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

//refetch the user from supabase if reload

export async function getCurrentUser() {
  //check if there is an active session from local storage and get it
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  console.log(data);

  if (error) throw new Error(error.message);

  return data?.user;
}
