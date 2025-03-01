"use client";

import React from "react";

interface ResumeDetailsProp {
  year?: string;
  title: string;
  description: string;
}

export default function ResumeTemplate({
  year,
  title,
  description,
}: ResumeDetailsProp) {
  return (
    <div className="md:flex gap-10">
      <h2 className="font-thin text-lg">{year}</h2>
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="font-thin text-base">{description}</p>
      </div>
    </div>
  );
}
