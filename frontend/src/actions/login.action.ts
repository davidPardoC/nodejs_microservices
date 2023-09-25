"use server";

import { User } from "@/interfaces/user";
import { AuthServices } from "@/services/auth.services";

const authServices = new AuthServices();

export const loginServerAction = async (user:User) => {
  const data = await authServices.login(user);
  return data;
};

export const signUpServerAction = async (user:User) => {
  const data = await authServices.signup(user);
  return data
};
