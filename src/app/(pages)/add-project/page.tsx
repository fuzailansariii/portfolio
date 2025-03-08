"use client";
import { ProjectModel } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TbLoader2 } from "react-icons/tb";
import { toast } from "sonner";
import { z } from "zod";

export default function AddProject() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof ProjectModel>>({
    resolver: zodResolver(ProjectModel),
  });
  const onSubmit = async (data: z.infer<typeof ProjectModel>) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post("/api/upload-projects", data);
      //   console.log(response);
      if (response.status === 201) {
        toast.success("Project added successfully");
        reset();
        router.push("/projects");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-[80vh] my-10 flex items-center justify-center">
      <div className="shadow-lg w-full md:max-w-screen-md mx-4 px-2 py-10 md:py-20 rounded-lg flex justify-center items-center">
        <div className="md:max-w-[500px] w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={isSubmitting} className="space-y-5 px-5">
              <input
                {...register("title")}
                type="text"
                placeholder="Project Title"
                className="input input-primary w-full rounded-lg"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
              <input
                {...register("description")}
                type="text"
                placeholder="Description"
                className="input input-primary w-full rounded-lg"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
              <input
                {...register("githubUrl")}
                type="text"
                placeholder="GithubUrl"
                className="input input-primary w-full rounded-lg"
              />
              {errors.githubUrl && (
                <p className="text-red-500 text-sm">
                  {errors.githubUrl.message}
                </p>
              )}
              <input
                {...register("liveUrl")}
                type="text"
                placeholder="LiveUrl"
                className="input input-primary w-full rounded-lg"
              />
              {errors.liveUrl && (
                <p className="text-red-500 text-sm">{errors.liveUrl.message}</p>
              )}
              <input
                {...register("imageUrl")}
                type="text"
                placeholder="imageUrl"
                className="input input-primary w-full rounded-lg"
              />
              {errors.imageUrl && (
                <p className="text-red-500 text-sm">
                  {errors.imageUrl.message}
                </p>
              )}
              <div>
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
                    "Add Project"
                  )}
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
