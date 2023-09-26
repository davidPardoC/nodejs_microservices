"use client";
import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { AuthContext, AuthProvider } from "@/context/AuthContext";
import { NewPost } from "../NewPost/NewPost";

const HomeComponent = ({ posts }: { posts: any[] }) => {
  const user = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <main>
        <pre>
          {JSON.stringify(posts)}
        </pre>
        {user.email && (
          <div className="fixed bottom-5 right-5 md:hidden">
            <NewPost />
          </div>
        )}
      </main>
    </>
  );
};

const HomeWrapper = ({
  posts,
  logedInUser,
}: {
  posts: any[];
  logedInUser: { email: string };
}) => {
  return (
    <AuthProvider initialState={logedInUser}>
      <HomeComponent posts={posts} />
    </AuthProvider>
  );
};
export default HomeWrapper;
