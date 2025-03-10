"use client";
import InputField from "@/app/components/InputField";
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
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof ProjectModel>>({
    resolver: zodResolver(ProjectModel),
  });
  const onSubmit = async (data: z.infer<typeof ProjectModel>) => {
    try {
      const response = await axios.post("/api/upload-projects", data);
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
    }
  };
  return (
    <div className="min-h-[80vh] my-10 flex items-center justify-center">
      <div className="shadow-lg w-full md:max-w-screen-md mx-4 px-2 py-10 md:py-20 rounded-lg flex justify-center items-center">
        <div className="md:max-w-[500px] w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={isSubmitting} className="space-y-5 px-5">
              <InputField
                register={register("title")}
                type="text"
                label="Project Title"
                error={errors.title}
              />

              <InputField
                register={register("description")}
                type="text"
                label="Description"
                error={errors.description}
              />

              <InputField
                register={register("githubUrl")}
                type="text"
                label="GithubUrl"
                error={errors.githubUrl}
              />

              <InputField
                register={register("liveUrl")}
                type="text"
                label="LiveUrl"
                error={errors.liveUrl}
              />

              <InputField
                register={register("imageUrl")}
                type="text"
                label="imageUrl"
                error={errors.imageUrl}
              />

              <div>
                <button
                  type="submit"
                  className="w-full btn btn-primary rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <TbLoader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {!isSubmitting && "Add Project"}
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
