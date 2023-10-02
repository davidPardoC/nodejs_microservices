import HomeComponent from "@/components/Home/HomeComponent";
import { PostsServices } from "@/services/posts.services";

const postServices = new PostsServices();

export const dynamic = 'force-dynamic'
export default async function Home() {
  const posts = await postServices.getAllPosts();
  return <HomeComponent posts={posts} />;
}
