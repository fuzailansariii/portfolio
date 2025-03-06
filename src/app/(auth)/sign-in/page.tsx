"use client";
import { SignInModel } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TbLoader2 } from "react-icons/tb";
import z from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignIn() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof SignInModel>>({
    resolver: zodResolver(SignInModel),
  });

  const onSubmit = async (data: z.infer<typeof SignInModel>) => {
    // console.log("FormData: ", data);
    try {
      setIsSubmitting(true);
      const response = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      // console.log("Response data: ", response);

      if (response?.error) {
        const errorMessage = response.error.split(
          "Error: "[1] || "An error occurred"
        );

        if (errorMessage.includes("Incorrect Email")) {
          toast.error("Invalid Email");
          // console.error("Login Failed");
        } else if (errorMessage.includes("Incorrect Password")) {
          toast.error("Incorrect Password");
        } else {
          toast.error(errorMessage);
          // console.error("An error occured");
        }
      } else {
        toast.success("Login Successful");
        router.push("/");
        reset();
      }
    } catch (error: any) {
      toast.error("Something went wrong");
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
          type="Password"
          placeholder="password"
          className="input w-full input-secondary rounded-lg"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full btn btn-primary rounded-lg"
        >
          {isSubmitting ? (
            <>
              <TbLoader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "Sign in"
          )}
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
