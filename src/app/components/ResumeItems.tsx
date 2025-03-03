"use client";
import React from "react";
import ResumeTemplate from "./ResumeTemplate";
interface ResumeItemsProp {
  heading?: string;
  //   year?: string;
  //   title: string;
  //   description: string;
}

export default function ResumeItems({ heading }: ResumeItemsProp) {
  return (
    <div className="w-full md:max-w-screen-xl grid md:grid-cols-2 mx-auto md:p-5">
      <div className="">
        <h1 className="py-5 md:py-0 text-2xl md:text-3xl font-medium">
          {heading}
        </h1>
      </div>
      <div className="space-y-10">
        <ResumeTemplate
          year="2021"
          title="B.Tech"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente
      expedita pariatur laborum! Expedita sunt quae quia similique, iusto
      reiciendis enim, voluptatem perferendis accusantium quo, possimus corrupti
      impedit quos sed?"
        />
        <ResumeTemplate
          year="2015"
          title="Intermediate"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente
      expedita pariatur laborum! Expedita sunt quae quia similique, iusto
      reiciendis enim, voluptatem perferendis accusantium quo, possimus corrupti
      impedit quos sed?"
        />
        <ResumeTemplate
          year="2013"
          title="High School"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente
      expedita pariatur laborum! Expedita sunt quae quia similique, iusto
      reiciendis enim, voluptatem perferendis accusantium quo, possimus corrupti
      impedit quos sed?"
        />
      </div>
    </div>
  );
}
