"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { AuthServices } from "@/services/auth.services";
import { setCookie } from "cookies-next";
import { useContext } from "react";
import jwtDecode from "jwt-decode";
import { setupClientSideAxiosClient } from "@/utils/axios.client";

const formSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(10),
});

const authServices = new AuthServices();

export const useLogin = (isLogin = true) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit } = form;

  const onLoginSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (isLogin) {
        const { token } = await authServices.login(data);
        setCookie("token", token, { maxAge: 60 * 6 * 24 });
        router.replace("/");
        return;
      }
      await authServices.signup(data);
      router.push("/login");
    } catch (error) {
      console.log(error)
    }
  };

  return { form, handleSubmit, onLoginSubmit };
};
