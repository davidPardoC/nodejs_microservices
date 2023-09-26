import { User } from "@/interfaces/user";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const AuthContext = createContext<{ email: string } | undefined>(
  undefined
);
export const AuthDispatch = createContext<{ setUser: (user: User) => void }>({
  setUser: () => {},
});

export const AuthProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: Pick<User, "email">;
}) => {
  const [currentUser, setCurrentUser] = useState<{ email: string } | undefined>(
    initialState
  );
  const setUser = (user: User) => {
    console.log({ user });
    setCurrentUser(user);
  };
  return (
    <AuthDispatch.Provider value={{ setUser }}>
      <AuthContext.Provider value={currentUser}>
        {children}
      </AuthContext.Provider>
    </AuthDispatch.Provider>
  );
};
