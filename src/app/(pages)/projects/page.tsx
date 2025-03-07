import Projects from "@/app/components/Projects";
import React from "react";
// import DevJourney from "@/assets/DevJourney.png";
// import LinkedInUIClone from "@/assets/LinkedInUIClone.png";
// import MyKitchenImage from "@/assets/MyKitchenImage.png";

const projectData = [
  {
    title: "DevJourney",
    description:
      "A portfolio site crafted with Next.js and TailwindCSS.A portfolio site crafted with Next.js and TailwindCSS.A portfolio site crafted with Next.js and TailwindCSS.A portfolio site crafted with Next.js and TailwindCSS.",
    githubLink: "https://github.com/fuzailansariii/dev-journey",
    liveLink: "https://dev-journey-three.vercel.app",
    projectImage: "/assets/DevJourney.png",
  },
  {
    title: "LinkedIn UI Clone",
    description:
      "A functional clone of the LinkedIn interface with features such as login, signup, posting, and profile management. Built using ReactJS, TailwindCSS, and Firebase",
    githubLink: "https://github.com/fuzailansariii/linkedin-clone",
    liveLink: "https://linkedin-clone-beryl-five.vercel.app/",
    projectImage: "/assets/LinkedInUIClone.png",
  },
  {
    title: "My Kitchen Recipes",
    description:
      "Discover a variety of delicious recipes from around the world. Easily search by ingredients or dietary preferences. Perfect for all cooking levels, from beginners to experts",
    githubLink: "https://github.com/fuzailansariii/MyKitchenRecipes",
    liveLink: "https://my-kitchen-recipes.vercel.app/",
    projectImage: "/assets/MyKitchenImage.png",
  },

  // Add more projects here
];

export default function ProjectList() {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <h1 className="text-4xl my-10 font-bold">Projects</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
        {projectData.map((project, index) => (
          <Projects key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
