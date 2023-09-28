import NavBar from "@/components/NavBar/NavBar";
import PostList from "@/components/PostList/PostList";
import { PostsServices } from "@/services/posts.services";
import { useRouter } from "next/navigation";
import React from "react";

const postServices = new PostsServices();

export default async function UserPostsPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const posts = await postServices.getPpostByUsername(username);
  return (
    <main>
      <NavBar />
      <PostList posts={posts} />
    </main>
  );
}
