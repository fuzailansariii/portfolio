"use client";
import { SignUpModel } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import axios from "axios";
import { toast } from "sonner";
import { TbLoader2 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/InputField";

export default function SignUp() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof SignUpModel>>({
    resolver: zodResolver(SignUpModel),
  });

  const onSubmit = async (data: z.infer<typeof SignUpModel>) => {
    try {
      const response = await axios.post("/api/auth/sign-up", data);
      if (response.status === 201) {
        toast.success("User Created Successfully");
        reset();
        router.push("/sign-in");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(
          error.response.status === 409
            ? "User already exist with this email"
            : error.response.status === 400
            ? "Invalid Inputs"
            : "Internal server error"
        );
      } else {
        toast.error("Something went wrong");
      }
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
            register={register("fullName")}
            type="text"
            label="Full Name"
            error={errors.fullName}
          />
          <InputField
            type="email"
            label="Email"
            register={register("email")}
            error={errors.email}
          />

          <InputField
            type="password"
            label="Password"
            register={register("password")}
            error={errors.password}
          />
          <button
            type="submit"
            className="w-full btn btn-primary rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <TbLoader2 className="mr-2 h-4 w-4 animate-spin" />
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
        </fieldset>
      </form>
    </div>
  );
}
