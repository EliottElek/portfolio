import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { Tooltip } from "@material-tailwind/react";
import useDarkMode from "../hooks/useDarkMode";
const CustomButton = ({ children, link, title }) => (
  <Tooltip content={title}>
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex items-center text-2xl gap-2 dark:text-gray-100 px-3 py-2 rounded-lg cursor-pointer dark:hover:text-green-500 hover:text-green-500 ease-in duration-100">
        {children}
      </div>
    </a>
  </Tooltip>
);
const Navigation = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div
      className={
        "fixed z-10 right-0 left-0 top-0 pt-4 pl-4 pr-4 flex m-auto items-center md:justify-between justify-center gap-4 transition-all delay-50"
      }
    >
      <a href="#contact" className="dark:text-gray-100 px-2 hidden md:flex">
        Want to get in touch ? Contact me !
      </a>
      <div className="flex items-center gap-4">
        <CustomButton
          link={"https://github.com/EliottElek"}
          title={"EliottElek"}
        >
          <FaGithub />
        </CustomButton>
        <CustomButton
          link={"https://www.linkedin.com/in/eliott-morcillo-4384101b9/"}
          title={"Eliott Morcillo (LinkedIn)"}
        >
          <FaLinkedinIn />
        </CustomButton>
        <CustomButton
          link={"https://eliottmorcillo.netlify.app/"}
          title={"My resume"}
        >
          <IoIosPaper />
        </CustomButton>
        <CustomButton
          link={"mailto:eliott.morcillo@gmail.com"}
          title={"eliott.morcillo@gmail.com"}
        >
          <AiOutlineMail />
        </CustomButton>
        {colorTheme === "light" ? (
          <button
            onClick={() => setTheme("light")}
            className="flex items-center text-2xl gap-2 dark:text-gray-100 px-3 py-2 rounded-lg cursor-pointer dark:hover:text-green-500 hover:text-green-500 ease-in duration-100"
          >
            <BsSun />
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="flex items-center text-2xl gap-2 dark:text-gray-100 px-3 py-2 rounded-lg cursor-pointer dark:hover:text-green-500 hover:text-green-500 ease-in duration-100"
          >
            <FiMoon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
