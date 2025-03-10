"use client";
import { SignInModel } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { TbLoader2 } from "react-icons/tb";
import z from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import InputField from "@/app/components/InputField";

export default function SignIn() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof SignInModel>>({
    resolver: zodResolver(SignInModel),
  });

  const onSubmit = async (data: z.infer<typeof SignInModel>) => {
    // console.log("FormData: ", data);
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      // console.log("Response data: ", response);

      if (response?.error) {
        const errorMessage = response.error || "An error occurred";

        if (errorMessage.includes("Incorrect Email")) {
          toast.error("Invalid Email");
        } else if (errorMessage.includes("Incorrect Password")) {
          toast.error("Incorrect Password");
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.success("Login Successful");
        reset();
        router.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="md:max-w-screen-lg min-h-[80vh] items-center justify-center flex mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-4 md:p-20 p-4 flex flex-col gap-5 w-full md:w-1/2 shadow-md rounded-lg"
      >
        <fieldset disabled={isSubmitting} className="space-y-5 px-5">
          <InputField
            register={register("email")}
            type="email"
            label="Email"
            error={errors.email}
          />

          <InputField
            register={register("password")}
            type="password"
            label="Password"
            error={errors.password}
          />
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full btn btn-primary rounded-lg"
          >
            {isSubmitting ? (
              <TbLoader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Sign in"
            )}
          </button>
          <p className="text-center">
            New Here?{" "}
            <span className="text-blue-600 underline">
              <Link href={"/sign-up"}>sign-up</Link>
            </span>
          </p>
        </fieldset>
      </form>
    </div>
  );
}
