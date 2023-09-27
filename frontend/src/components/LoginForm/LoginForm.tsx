"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import Link from "next/link";
import React from "react";

const LoginForm = ({ isLogin = true }: { isLogin: boolean }) => {
  const { form, onLoginSubmit, handleSubmit } = useLogin(isLogin);
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onLoginSubmit)}
        className="sm:w-2/4 md:w-1/4 mx-auto mt-10"
      >
        <h1 className="text-4xl text-center mb-5">Blog Microservices</h1>
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display username.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-5">{isLogin ? "Login" : "Signup"}</Button>
        <Link
          className="ml-3 hover:underline"
          href={isLogin ? "/signup" : "/login"}
        >
          {isLogin ? "Signup" : "Login"}
        </Link>
      </form>
    </Form>
  );
};

export default LoginForm;
