// components/SignInForm.js
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import {useAuthState} from "react-firebase-hooks/auth";

let dashboard_route = "/dashboard";

const FormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function SignInForm() {
  // const user = auth.currentUser;
  const router = useRouter();
  const [user] = useAuthState(auth); 
  
  const [showError, setShowError] = useState<string>("")

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  console.log(user);
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await signInWithEmailAndPassword(auth, data.email,data.password).then((userCredential)=>{
      const user = userCredential.user;
      console.log(user);
      router.push(dashboard_route)
    }).catch((error)=>{
      const errorCode = error.code;
    const errorMessage = error.message;
    setShowError(errorCode.slice(5).replaceAll("-"," "))
    console.log(errorCode);
    })
  }
  if(user){
    router.push(dashboard_route)
  }
  else{
    console.log(user);
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-center">Sign In</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormMessage>
                {showError}
              </FormMessage>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="jamil@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="*****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
  
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </Form>
  
          <p className="text-center">
            {`Don't`} have an account 
            <Link href={"/auth/signup"} className="underline ms-2 text-indigo-500">Sign Up</Link>
          </p>
          <div className="text-center">Or</div>
  
          <Button className="w-full flex gap-4" variant={"secondary"}>
            <FaGoogle className="text-xl" />
            <p>Sign In With Google</p>
          </Button>
        </div>
      </div>
    );
  }
}
