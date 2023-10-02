"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePost } from "@/hooks/usePost";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useLayoutEffect } from "react";
import { setupClientSideAxiosClient } from "@/utils/axios.client";

export function NewPost() {
  const { form, handleSubmit, onCreatePost, setOpenDialog, isOpenDialog } =
    usePost();

    useLayoutEffect(()=>{
      setupClientSideAxiosClient()
    },[])

    return (
    <Dialog open={isOpenDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button>New Post +</Button>
      </DialogTrigger>
      <DialogContent 
       className="sm:max-w-[425px]">
        <DialogHeader >
          <DialogTitle>Add new post</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="grid gap-4 py-4"
            onSubmit={handleSubmit(onCreatePost)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Post</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
