import React from "react";
import Kifekoi from "../public/assets/projects/kifekoi/kifekoi1.png";
import Chateex from "../public/assets/projects/chateex/chateex1.png";
import Wazzup from "../public/assets/projects/wazzup/wazzup1.png";
import Cds from "../public/assets/projects/couteaux-du-sud/cds1.png";
import Alliage from "../public/assets/projects/alliage/alliage1.png";
import MuiLogo from "../public/assets/logos/mui.png";
import ReactLogo from "../public/assets/logos/react.png";
import Babylon from "../public/assets/logos/babylon.png";
import SocketIoLogo from "../public/assets/logos/socketio.png";
import Trpc from "../public/assets/logos/trpc.png";
import GraphQl from "../public/assets/logos/graphql.png";
import Commercejs from "../public/assets/logos/commercejs.png";
import Apollo from "../public/assets/logos/apollo.png";
import NextJs from "../public/assets/logos/nextjs.png";
import Tailwind from "../public/assets/logos/tailwind.png";
import Typescript from "../public/assets/logos/typescript.png";
import Node from "../public/assets/logos/node.png";
import Prisma from "../public/assets/logos/prisma.png";
import { FaGithub } from "react-icons/fa";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full z-10">
      <div className="max-w-[1240px] mx-auto px-2  z-10">
        <p className="text-xl tracking-widest uppercase text-green-500">
          Projects
        </p>
        <h2 className="py-4 dark:text-gray-100">What I&apos;ve Built</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <ProjectItem
            title="Kifekoi"
            backgroundImg={Kifekoi}
            seeMoreUrl="/projects/kifekoi"
            demoUrl="https://kifekoi.netlify.app"
            description="A projects management app. Features drag'n'drop, just like Trello."
            stack={[
              { name: "ReactJS", logo: ReactLogo },
              { name: "Material UI", logo: MuiLogo },
              { name: "GraphQL", logo: GraphQl },
              { name: "Apollo Server", logo: Apollo },
            ]}
          />
          <ProjectItem
            title="Wazzup"
            backgroundImg={Wazzup}
            seeMoreUrl="/projects/wazzup"
            demoUrl={null}
            description="Chat app made with recent T3 stack."
            stack={[
              { name: "NextJS", logo: NextJs },
              { name: "TRPC", logo: Trpc },
              { name: "Tailwindcss", logo: Tailwind },
              { name: "Typescript", logo: Typescript },
              { name: "Prisma", logo: Prisma },
            ]}
          />
          <ProjectItem
            title="Chateex"
            backgroundImg={Chateex}
            seeMoreUrl="/projects/chateex"
            demoUrl="https://chateex.netlify.app/"
            description="First ever chat application, built for a school project."
            stack={[
              { name: "ReactJS", logo: ReactLogo },
              { name: "Material UI", logo: MuiLogo },
              { name: "Socket.io", logo: SocketIoLogo },
              { name: "NodeJS", logo: Node },
            ]}
          />

          <ProjectItem
            title="Couteaux du sud"
            backgroundImg={Cds}
            demoUrl="https://couteaux-du-sud.netlify.app/"
            seeMoreUrl="/projects/couteaux-du-sud"
            description="A react e-commerce with custom 3D product builder."
            stack={[
              { name: "ReactJS", logo: ReactLogo },
              { name: "Material UI", logo: MuiLogo },
              { name: "BabylonJS", logo: Babylon },
              { name: "CommerceJS", logo: Commercejs },
            ]}
          />
          <ProjectItem
            title="Alliage"
            backgroundImg={Alliage}
            demoUrl="https://alliage.io/"
            seeMoreUrl="/projects/alliage"
            description="A NextJS/TailwindCSS documentation plateform for Alliage."
            stack={[
              { name: "NextJS", logo: NextJs },
              { name: "Tailwindcss", logo: Tailwind },
            ]}
          />
        </div>
        <div className="flex items-center justify-center mt-12">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/EliottElek"
            className="text-center mt-2 flex items-center gap-2 p-2 md:p-3 group rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold text-sm cursor-pointer"
          >
            <FaGithub className="h-6 w-6" /> View all my projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
