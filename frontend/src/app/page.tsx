import HomeComponent from "@/components/Home/HomeComponent";
import { PostsServices } from "@/services/posts.services";
import { getLogedinUser } from "@/utils/getLogedinUser";

const postServices = new PostsServices();

export default async function Home() {
  const logedInUser = getLogedinUser();
  const posts = await postServices.getAllPosts();
  return <HomeComponent posts={posts} logedInUser={logedInUser} />;
}
