"use client";

import Projects from "@/app/components/Projects";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectList() {
  const [project, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/projects");
        if (response.data && Array.isArray(response.data.projects)) {
          const fetchedProject: Project[] = response.data.projects;
          if (fetchedProject.length > 0) {
            setProjects(fetchedProject);
          } else {
            toast.info("No projects exist");
          }
        }
      } catch (error) {
        toast.error("Failed to fetch projects");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProject();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-5 mb-10">
      <h1 className="text-4xl my-10 font-bold">Projects</h1>
      {isLoading ? (
        <div className="min-h-[50vh] flex justify-center items-center w-full">
          <p className="font-quicksand font-semibold text-2xl">Loading...</p>
        </div>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
        {project.length === 0 && !isLoading ? (
          <p className="text-gray-500 min-h-[30vh]">No projects available.</p>
        ) : null}
        {project.map((item, index) => (
          <Projects
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            githubUrl={
              item.githubUrl
                ? { url: item.githubUrl, label: "GitHub" }
                : undefined
            }
            liveUrl={
              item.liveUrl
                ? { url: item.liveUrl, label: "Live Demo" }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
