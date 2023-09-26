"use client";
import { User } from "@/interfaces/user";
import React, { createContext, useState } from "react";

export const AuthContext = createContext<{ email: string } | undefined>(
  undefined
);
export const AuthDispatch = createContext<{ setUser: (user: User) => void }>({
  setUser: () => {},
});

export const AuthProvider = async ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: { email: string };
}) => {
  const [currentUser, setCurrentUser] = useState<{ email: string } | undefined>(
    initialState
  );
  const setUser = (user: User) => {
    setCurrentUser(user);
  };
  return (
    <AuthContext.Provider value={currentUser}>
      <AuthDispatch.Provider value={{ setUser }}>
        {children}
      </AuthDispatch.Provider>
    </AuthContext.Provider>
  );
};

AuthProvider.getInitialProps = async () => {
  return { initialState: { email: "pardodavid10@gmail.com" } };
};
