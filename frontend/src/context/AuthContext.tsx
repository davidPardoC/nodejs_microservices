import { User } from "@/interfaces/user";
import React, { createContext, useState } from "react";

interface AuthProviderState {
  user: User | undefined;
  setUser: (usr: User) => void;
}

const defaultState = { user: undefined, setUser: () => {} };

export const AuthContext = createContext<AuthProviderState>(defaultState);

export const AuthProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: User;
}) => {
  const [currentUser, setCurrentUser] = useState(initialState);
  const setUser = (user: User) => {
    setCurrentUser(user);
  };
  return (
    <AuthContext.Provider value={{ user: currentUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
