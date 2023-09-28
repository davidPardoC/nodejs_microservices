import { Post } from "@/interfaces/post";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";

const PostList = ({ posts = [] }: { posts: Post[] }) => {
  return (
    <section>
      {posts.map(({ title, content, authorName }) => (
        <Card key={title} className="mt-5 overflow-x-hidden mb-5">
          <CardHeader>
            {title}
            <Link className="underline" href={`/users/${authorName}/posts`}>{authorName}</Link>
          </CardHeader>
          <CardContent>
            <div>{content}</div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default PostList;
