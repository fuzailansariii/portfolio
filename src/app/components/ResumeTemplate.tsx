"use client";

import React from "react";

interface ResumeDetailsProp {
  heading?: string;
  year: string;
  title: string;
  description: string;
}

export default function ResumeTemplate({
  heading,
  year,
  title,
  description,
}: ResumeDetailsProp) {
  return (
    <div className="w-full md:max-w-screen-xl md:flex mx-auto md:p-5">
      <h1 className="w-1/2 py-5 md:py-0 text-2xl md:text-3xl font-medium">
        {heading}
      </h1>
      <div className="md:flex w-1/2 gap-10">
        <h2 className="font-thin text-lg">{year}</h2>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-xl">{title}</h2>
          <p className="font-thin text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
