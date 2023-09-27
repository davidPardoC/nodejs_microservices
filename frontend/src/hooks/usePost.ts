import { Post } from "@/interfaces/post";
import { PostsServices } from "@/services/posts.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const postServices = new PostsServices();

const formSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(10),
});

export const usePost = () => {
  const router = useRouter();
  const [isOpenDialog, setOpenDialog] = useState(false);
  const form = useForm<Post>({ resolver: zodResolver(formSchema) });
  const { handleSubmit } = form;

  const onCreatePost = async (data: Post) => {
    await postServices.createPosts(data);
    router.refresh();
    setOpenDialog(false);
    form.resetField("title");
    form.resetField("content");
  };

  const openDialog = () => {
    setOpenDialog(true);
  };

  return { form, handleSubmit, onCreatePost, openDialog, isOpenDialog };
};
