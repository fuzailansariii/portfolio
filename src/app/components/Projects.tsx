"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: {
    url: string;
    label: string;
  };
  liveUrl?: {
    url: string;
    label: string;
  };
}

export default function Projects({
  title,
  description = "No description available.",
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  // Limit the description to 120 characters with "..."
  const truncatedDescription =
    description && description.length > 120
      ? description.slice(0, 120) + "..."
      : description;

  return (
    <div className="w-[380px] h-[420px] shadow-md rounded-lg overflow-hidden border-gray-300 flex flex-col">
      {/* Project Image */}
      <div className="w-full h-[200px] overflow-hidden">
        {imageUrl ? (
          <Image
            height={420}
            width={380}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="mt-2 text-sm leading-5">{truncatedDescription}</p>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          {githubUrl && (
            <Link
              href={githubUrl.url}
              className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {githubUrl.label}
            </Link>
          )}

          {liveUrl && (
            <Link
              href={liveUrl.url}
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {liveUrl.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
