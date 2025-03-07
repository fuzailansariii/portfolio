import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  projectImage: string;
  githubLink: string;
  liveLink?: string;
}

export default function Projects({
  title,
  description,
  projectImage,
  githubLink,
  liveLink,
}: ProjectProps) {
  // Limit the description to 120 characters with "..."
  const truncatedDescription =
    description.length > 120 ? description.slice(0, 120) + "..." : description;

  return (
    <div className="w-[380px] h-[420px] shadow-md rounded-lg overflow-hidden border-gray-300 flex flex-col">
      {/* Project Image */}
      <div className="w-full h-[200px] overflow-hidden">
        <Image
          height={420}
          width={380}
          src={projectImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="mt-2 text-sm leading-5">{truncatedDescription}</p>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <Link
            href={githubLink}
            className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          {liveLink && (
            <Link
              href={liveLink}
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
