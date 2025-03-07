import React, { ReactNode } from "react";
import HeroImage from "@/assets/avatar.jpg";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import Image from "next/image";

interface SkillsIconsProps {
  icon: ReactNode;
  title: string;
}

export default function HeroSection() {
  const skillsIcons: SkillsIconsProps[] = [
    {
      title: "Next.js",
      icon: <RiNextjsFill className="text-5xl text-black dark:text-white" />,
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql className="text-5xl text-blue-500" />,
    },
    {
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-5xl text-cyan-400" />,
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 text-white gap-10">
      {/* Title, description and skill icons shows on the mobile view and hidden on md screen size */}
      <div className="text-center md:text-left mt-6 md:mt-0 md:hidden">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m <span className="text-cyan-400">Fuzail</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
          Passionate full-stack developer specializing in building
          high-performance web applications.
        </p>

        {/* Skills Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          {skillsIcons.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-700 rounded-lg shadow-md hover:scale-110 transition-transform"
              title={item.title}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      {/* Left: Image */}
      <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          width={300}
          height={300}
          src={HeroImage.src}
          alt="Hero Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Content */}
      {/* Title, description and skill icons hidden on the mobile view and visible on md screen size */}
      {/*  */}
      <div className="text-center md:text-left mt-6 md:mt-0 hidden md:block">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m <span className="text-cyan-400">Fuzail</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
          Passionate full-stack developer specializing in building
          high-performance web applications.
        </p>

        {/* Skills Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          {skillsIcons.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-700 rounded-lg shadow-md hover:scale-110 transition-transform"
              title={item.title}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
