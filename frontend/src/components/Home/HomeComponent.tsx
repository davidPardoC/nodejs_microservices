"use client";
import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { AuthContext, AuthProvider } from "@/context/AuthContext";
import { NewPost } from "../NewPost/NewPost";
import { User } from "@/interfaces/user";
import { isWindow } from "@/utils/utils";
import { setupClientSideAxiosClient } from "@/utils/axios.client";
import PostList from "../PostList/PostList";
import { Post } from "@/interfaces/post";

const HomeComponent = ({ posts }: { posts: Post[] }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <main>
        <PostList posts={posts} />
        {user && (
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
  logedInUser?: User;
}) => {
  if (isWindow()) {
    setupClientSideAxiosClient();
  }

  return (
    <AuthProvider initialState={logedInUser}>
      <HomeComponent posts={posts} />
    </AuthProvider>
  );
};
export default HomeWrapper;
