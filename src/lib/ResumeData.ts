import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const educationData = [
  {
    year: "2021",
    title: "B.Tech in Computer Science & Engineering",
    description: "Kanpur Institute Of Technology",
  },
  {
    year: "2015",
    title: "Intermediate in Science",
    description: "SDIC Prayagraj",
  },
  { year: "2013", title: "High School", description: "SDIC Prayagraj" },
];

const skillsData = [
  { title: "Next.js", icon: RiNextjsFill },
  { title: "React.js", icon: FaReact },
  { title: "TailwindCSS", icon: RiTailwindCssFill },
  { title: "Node.js", icon: FaNodeJs },
  { title: "PostgreSQL", icon: SiPostgresql },
];

export { educationData, skillsData };
