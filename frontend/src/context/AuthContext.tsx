import { User } from "@/interfaces/user";
import React, { createContext, createServerContext, useState } from "react";

export const AuthContext = createServerContext<{ email?: string }>(
  "auth_provider",
  {}
);

export const AuthProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: { email?: string };
}) => {
  const [currentUser, setCurrentUser] = useState<{ email?: string }>(
    initialState
  );
  const setUser = (user: User) => {
    setCurrentUser(user);
  };
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
