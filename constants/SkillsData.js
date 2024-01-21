import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  // SiChakraui,
  SiFirebase,
  SiTypescript,
  SiJquery,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import {
  FaBootstrap,
  FaCss3Alt,
  FaAngular,
  FaPhp,
  FaShopify,
  FaJava,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export const TechStackData = [
  {
    FrontEnd: [
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
      },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />
        ),
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "JavaScript",
        icon: (
          <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />
        ),
      },
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "Angular",
        icon: <FaAngular className="md:text-4xl text-2xl" color="#c50836" />,
      },
      {
        name: "Redux-toolkit",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
      },
      {
        name: "NextJS",
        icon: (
          <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
        ),
      },
      {
        name: "React Native",
        icon: (
          <TbBrandReactNative
            className="md:text-4xl text-2xl"
            color="#66dbfb"
          />
        ),
      },
    ],
    BackEnd: [
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="md:text-4xl text-2xl" color="#555555" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="md:text-4xl text-2xl" color="#08668e" />,
      },
      {
        name: "jQuery",
        icon: <SiJquery className="md:text-4xl text-2xsl" color="#106dae" />,
      },
    ],
    Other: [
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />,
      },
      {
        name: "netlify",
        icon: <SiNetlify className="md:text-4xl text-2xl" color={"#31b5ba"} />,
      },
      {
        name: "Vercel",
        icon: (
          <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
        ),
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />,
      },
    ],
  },
];
