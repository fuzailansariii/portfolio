"use client";
import { SignUpModel } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import axios from "axios";
import { toast } from "sonner";
import { TbLoader2 } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof SignUpModel>>({
    resolver: zodResolver(SignUpModel),
  });

  const onSubmit = async (data: z.infer<typeof SignUpModel>) => {
    // console.log("FormData: ", data);
    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/auth/sign-up", data);
      // console.log("Response data: ", response);

      if (response.status === 201) {
        toast.success("User Created Successfully");
        router.push("/sign-in");
        reset();
      }
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          toast.error("User already exist with this email");
        } else if (error.response.status === 400) {
          toast.error("Invalid Inputs");
        } else {
          toast.error("Internal server error");
        }
      } else {
        toast.error("Something went wrong");
      }
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:max-w-screen-lg min-h-[80vh] items-center justify-center flex mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-4 md:p-20 p-4 flex flex-col gap-5 w-full md:w-1/2 shadow-md rounded-lg"
      >
        <input
          {...register("fullName")}
          type="text"
          placeholder="Full Name"
          className="input w-full input-secondary rounded-lg"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="input w-full input-secondary rounded-lg"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="password"
          className="input w-full input-secondary rounded-lg"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="w-full btn btn-primary rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <TbLoader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "Sign up"
          )}
        </button>
        <p className="text-center">
          Already a member{" "}
          <span className="text-blue-600 underline">
            <Link href={"/sign-in"}>sign-in</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
