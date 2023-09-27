import { Post } from "@/interfaces/post";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

const PostList = ({ posts = [] }: { posts: Post[] }) => {
  return (
    <section>
      {posts.map(({ title, content }) => (
        <Card key={title} className="mt-5 overflow-x-hidden">
          <CardHeader>{title}</CardHeader>
          <CardContent>{content}</CardContent>
        </Card>
      ))}
    </section>
  );
};

export default PostList;
