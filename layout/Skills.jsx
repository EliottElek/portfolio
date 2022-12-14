import Image from "next/image";
import React from "react";
import Graphql from "../public/assets/logos/graphql.png";
import Apollo from "../public/assets/logos/apollo.png";
import Prisma from "../public/assets/logos/prisma.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Trpc from "../public/assets/logos/trpc.png";
import NextJS from "../public/assets/skills/nextjs.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 mt-20 dark:text-gray-100">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-lg tracking-widest uppercase text-green-500">
          Skills
        </p>
        <h2 className="py-4">My favorite tools</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border border-gray-300 border-opacity-40 rounded-xl ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300 border-opacity-40 rounded-xl ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Graphql} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GraphQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300 border-opacity-40 rounded-xl ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Apollo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Apollo</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300 border-opacity-40 rounded-xl ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300 border-opacity-40 rounded-xl ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300 border-opacity-40 rounded-xl ease-in duration-300">
            <div className="gap-4 flex flex-col justify-center items-center">
              <div className="m-auto">
                <Image src={Prisma} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Prisma</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300 border-opacity-40 rounded-xl ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 border border-gray-300 border-opacity-40 rounded-xl ease-in duration-300">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Trpc} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TRPC</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
