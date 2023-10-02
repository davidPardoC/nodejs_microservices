import React from "react";
import NavBar from "../NavBar/NavBar";
import { NewPost } from "../NewPost/NewPost";
import PostList from "../PostList/PostList";
import { Post } from "@/interfaces/post";
import { getLogedinUser } from "@/utils/getLogedinUser";

const user = getLogedinUser();

const HomeComponent = ({ posts }: { posts: Post[] }) => {
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

export default HomeComponent;
