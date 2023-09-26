import { Post } from "@/interfaces/post";
import { PostsServices } from "@/services/posts.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const postServices = new PostsServices()

const formSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(50),
});

export const usePost = () => {
  const form = useForm<Post>({ resolver: zodResolver(formSchema) });
  const { handleSubmit } = form;

  const onCreatePost = async (data: Post) => {
    await postServices.createPosts(data)
  };

  return { form, handleSubmit, onCreatePost };
};
