import { Post } from "@/interfaces/post";
import axios from "axios";

export class PostsServices {
  async getAllPosts(): Promise<Post[]> {
    const { data: posts } = await axios.get("http://localhost:3000/api/posts");
    return posts;
  }

  async createPosts(data: Post) {
    const { data: posts } = await axios.post(
      "http://localhost:3000/api/posts",
      data
    );
    return posts;
  }
}
