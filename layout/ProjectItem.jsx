import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip } from "@material-tailwind/react";

const LogoItem = ({ item }) => (
  <span className="h-8 w-8 flex items-center rounded-full">
    <Tooltip content={item.name} className="bg-black">
      <span>
        <Image src={item.logo} alt={item.title} className="rounded-xl" />
      </span>
    </Tooltip>
  </span>
);
const ProjectItem = ({
  title,
  backgroundImg,
  description,
  seeMoreUrl,
  demoUrl,
  stack,
}) => {
  return (
    <div className="relative flex items-center justify-center group rounded-lg hover:bg-gradient-to-r from-green-700 to-gray-800 bg-transparent delay-150 transition-all">
      <Image
        className="object-cover w-full h-full border rounded-lg group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="opacity-0 flex flex-col items-center delay-75 transition-all justify-center group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 hidden md:block w-full pt-2 text-white text-center">{description}</p>
        <div className="flex items-center justify-center m-3 gap-4">
          {stack?.map((item, i) => (
            <LogoItem key={i} item={item} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer">
              <p className="text-center mt-2 flex items-center gap-2 p-2 md:p-3 group rounded-lg bg-green-500 text-white font-bold text-sm cursor-pointer">
                Live demo
              </p>
            </a>
          )}
          <Link href={seeMoreUrl}>
            <p className="text-center mt-2 flex items-center gap-2 p-2 md:p-3 group rounded-lg bg-white text-gray-700 font-bold text-sm cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
