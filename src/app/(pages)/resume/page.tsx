"use client";

import ResumeTemplate from "@/app/components/ResumeTemplate";
import React from "react";

export default function ResumePage() {
  return (
    <div className="md:max-w-screen-lg flex flex-col mx-auto p-5">
      <h1 className="text-4xl my-10 font-bold">Resume</h1>
      <ResumeTemplate
        heading="Education"
        year="2021"
        title="B.Tech"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente
      expedita pariatur laborum! Expedita sunt quae quia similique, iusto
      reiciendis enim, voluptatem perferendis accusantium quo, possimus corrupti
      impedit quos sed?"
      />
    </div>
  );
}
