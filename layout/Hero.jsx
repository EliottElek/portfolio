import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="z-10">
          <h1 className="py-4 text-gray-700 dark:text-white">
            Hi, I&#39;m{" "}
            <span className="animate-waving-hand text-green-500"> Eliott.</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-white">
            A Web Developer
          </h1>
          <p className="py-4 text-gray-600 dark:text-white sm:max-w-[70%] m-auto">
            I love to build all kind of web projects, going from simple websites
            to full-stack web applications. I'm based in France.
          </p>
          <a
            href="#projects"
            className=" mt-12 flex flex-col gap-2 text-green-500 max-w-[300px] m-auto items-center justify-center"
          >
            <span className="animate-waving-arrow">
              Discover what I've created !
            </span>
            <AiOutlineArrowDown className="animate-sliding-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
