import { cookies } from "next/headers";
import jwt_decode from "jwt-decode";

export const getLogedinUser = (): { email: string } | undefined => {
  const cookieStore = cookies();
  const { value } = cookieStore.get("token") || {};
  if (!value) {
    return undefined;
  }
  return jwt_decode(value);
};
