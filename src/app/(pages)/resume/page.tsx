"use client";

import ResumeItems from "@/app/components/ResumeItems";
import React from "react";

export default function ResumePage() {
  return (
    <div className="md:max-w-screen-xl flex flex-col mx-auto p-5">
      <h1 className="text-4xl my-10 font-bold">Resume</h1>
      <ResumeItems heading="Education" />
      <div className="w-full bg-white border-b" />
      <ResumeItems heading="Skills & Experties" />
    </div>
  );
}
