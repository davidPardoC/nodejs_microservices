import { Post } from "@/interfaces/post";
import axios from "axios";

export class PostsServices {
  async getAllPosts(): Promise<Post[]> {
    const { data: posts } = await axios.get("http://localhost/api/posts");
    return posts;
  }

  async getPpostByUsername(username: string) {
    const { data: posts } = await axios.get(
      `http://localhost/api/posts/username/${username}`
    );
    console.log(posts)
    return posts;
  }

  async createPosts(data: Post) {
    const { data: posts } = await axios.post(
      "http://localhost/api/posts",
      data
    );
    return posts;
  }
}
