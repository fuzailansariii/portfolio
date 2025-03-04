"use client";
import React from "react";
import { IconType } from "react-icons";

interface ResumeItem {
  year?: string;
  title: string;
  description?: string;
  icon?: IconType; // For skills
}

interface ResumeSectionProps {
  heading: string;
  items: ResumeItem[];
}

export default function ResumeSection({ heading, items }: ResumeSectionProps) {
  return (
    <div className="w-full md:max-w-screen-xl grid md:grid-cols-2 mx-auto md:p-5">
      <h1 className="py-5 md:py-0 text-2xl md:text-3xl font-medium">
        {heading}
      </h1>
      <div className="space-y-10">
        {items.map((item, index) => (
          <div key={index} className="md:flex gap-10 shadow-lg rounded-lg p-4">
            {item.year && <h2 className="font-thin text-lg">{item.year}</h2>}
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-xl flex items-center gap-2">
                {item.icon && <item.icon size={24} className="text-blue-500" />}
                {item.title}
              </h2>
              {item.description && (
                <p className="font-thin text-base">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
