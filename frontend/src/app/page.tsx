import HomeComponent from "@/components/Home/HomeComponent";
import { PostsServices } from "@/services/posts.services";
import { getLogedinUser } from "@/utils/getLogedinUser";

const postServices = new PostsServices();

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = 0;
export const fetchCache = "force-no-store";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 0;

export default async function Home() {
  const user = getLogedinUser();
  const posts = await postServices.getAllPosts();
  console.log(posts)
  return <HomeComponent posts={posts} logedInUser={user} />;
}
