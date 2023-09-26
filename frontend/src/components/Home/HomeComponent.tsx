"use client";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import NavBar from "../NavBar/NavBar";
import { AuthContext, AuthProvider } from "@/context/AuthContext";

const HomeComponent = ({
  loggedInUser,
}: {
  loggedInUser: { email: string } | undefined;
}) => {
  return (
    <AuthProvider initialState={loggedInUser}>
      <HomeWrapper />
    </AuthProvider>
  );
};

const HomeWrapper = () => {
  const user = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <main>
        {user && (
          <Button className="rounded-full fixed bottom-5 right-5 md:hidden">
            New Post +
          </Button>
        )}
      </main>
    </>
  );
};

export default HomeComponent;
