import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTransition } from "react";
import { signUpServerAction } from "@/actions/login.action";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(10),
});

export const useLogin = (isLogin = true) => {
  const [isPendig, startTransition] = useTransition();
  const router = useRouter();

  console.log({ isPendig });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit } = form;

  const onLoginSubmit = (data: z.infer<typeof formSchema>) => {
    console.log({ isLogin });
    if (isLogin) {
      return;
    }
    startTransition(() => {
      signUpServerAction(data);
    });
  };

  return { form, handleSubmit, onLoginSubmit };
};
