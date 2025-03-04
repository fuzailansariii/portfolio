"use client";
import ResumeSection from "@/app/components/ResumeTemplate";
import { educationData, skillsData } from "@/lib/ResumeData";
import React from "react";

export default function ResumePage() {
  return (
    <div className="md:max-w-screen-xl flex flex-col mx-auto p-5">
      <h1 className="text-4xl my-10 font-bold">Resume</h1>
      <ResumeSection heading="Education" items={educationData} />
      <div className="w-full bg-white border-b my-4" />
      <ResumeSection heading="Skills & Expertise" items={skillsData} />
    </div>
  );
}
