"use client";
import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { AuthContext } from "@/context/AuthContext";
import { NewPost } from "../NewPost/NewPost";
import { User } from "@/interfaces/user";

const HomeComponent = ({
  posts,
  logedInUser,
}: {
  posts: any[];
  logedInUser: User;
}) => {
  const user = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <main>
        {user && (
          <div className="fixed bottom-5 right-5 md:hidden">
            <NewPost />
          </div>
        )}
      </main>
    </>
  );
};

export default HomeComponent;
