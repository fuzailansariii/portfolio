"use client";
import { SignInModel } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export default function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof SignInModel>>({
    resolver: zodResolver(SignInModel),
  });

  const onSubmit = (data: z.infer<typeof SignInModel>) => {
    console.log("FormData: ", data);
  };

  return (
    <div className="md:max-w-screen-lg min-h-[80vh] items-center justify-center flex mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-4 md:p-20 p-4 flex flex-col gap-5 w-full md:w-1/2 shadow-md rounded-lg"
      >
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="input w-full input-secondary rounded-lg"
        />
        <input
          {...register("password")}
          type="Password"
          placeholder="password"
          className="input w-full input-secondary rounded-lg"
        />
        <button type="submit" className="w-full btn btn-primary rounded-lg">
          Sign up
        </button>
        <p className="text-center">
          If you are new{" "}
          <span className="text-blue-600 underline">
            <Link href={"/sign-up"}>sign-up</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
