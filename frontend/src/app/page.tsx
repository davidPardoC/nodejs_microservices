import HomeComponent from "@/components/Home/HomeComponent";
import { PostsServices } from "@/services/posts.services";
import { getLogedinUser } from "@/utils/getLogedinUser";


export const dynamic = 'force-dynamic'

const postServices = new PostsServices()

export default function Home() {
  const logedInUser = getLogedinUser()
  const posts = postServices.getAllPosts()
  return <HomeComponent loggedInUser={logedInUser} />;
}
