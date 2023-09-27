import { cookies } from "next/headers";
import jwt_decode from "jwt-decode";
import { User } from "@/interfaces/user";

export const getLogedinUser = (): User | undefined => {
  const cookieStore = cookies();
  const { value } = cookieStore.get("token") || {};
  if (!value) {
    return undefined;
  }
  return jwt_decode(value);
};
