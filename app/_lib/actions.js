"use server";

import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function signInActionGoogle() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signInActionGitHub() {
  await signIn("github", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(newData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to perform this action");

  const nationalID = newData.get("nationalID");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please, provide a valid national ID");

  const [nationality, countryFlag] = newData.get("nationality").split("%");

  const updateData = { nationalID, nationality, countryFlag };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
  return data;
}
