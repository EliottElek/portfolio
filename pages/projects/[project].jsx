import React from "react";
import Layout from "../../layout";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { projects, paths } from "../../content";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Carousel from "../../components/Slider";
const LogoItemProject = ({ item }) => {
  return (
    <li className="flex rounded-full items-center gap-3 pl-2 m-2">
      <span className="h-8 w-8">
        <Image src={item.logo} alt={item.title} className="rounded-xl" />
      </span>
      <p>{item.name}</p>
    </li>
  );
};
const Project = ({ project }) => {
  return (
    <Layout>
      <div className="p-2 pt-14 md:p-14 z-10">
        <div className="font-semibold p-8 z-10 cursor-pointer">
          <Link href="/#projects">
            <a className="flex items-center gap-2 text-green-500 cursor-pointer">
              <AiOutlineArrowLeft />
              View other projects
            </a>
          </Link>
        </div>
        <div className="flex mt-4 items-center gap-3">
          <h2 className=" dark:text-gray-100">{project.name}</h2>
          <h6 className=" dark:text-gray-100 font-normal">
            about {project.hours} hours
          </h6>
        </div>
        <div className="flex mb-4 mt-4 lg:flex-row flex-col justify-between gap-6">
          <div className="lg:max-w-[70%] w-full relative flex items-center justify-center group rounded-lg hover:bg-gradient-to-r from-green-700 to-gray-800 bg-transparent delay-150 transition-all">
            <Image
              alt={project.image}
              src={project.image}
              className="rounded-lg border object-contain group-hover:opacity-10"
            />
            <div className="opacity-0 flex flex-col items-center delay-75 transition-all justify-center group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="flex items-center gap-4">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <p className="text-center mt-2 flex items-center gap-2 p-2 md:p-3 group rounded-lg text-green-500 bg-white font-bold text-sm cursor-pointer">
                      <FiExternalLink className="h-6 w-6" /> Live demo
                    </p>
                  </a>
                )}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.github}
                  className="text-center mt-2 flex items-center gap-2 p-2 md:p-3 group rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold text-sm cursor-pointer"
                >
                  <FaGithub className="h-6 w-6" />
                  View in GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 w-full dark:text-gray-100">
            <h4 className="mt-4 md:mt-0">Stack</h4>
            <p>Here is the stack I used for this project :</p>
            <h6 className="font-normal mt-3 underline text-gray-500 dark:text-gray-100">
              Backend
            </h6>
            <ul className="gap-4 mt-2">
              {project?.backTechs?.map((item, i) => (
                <LogoItemProject key={i} item={item} />
              ))}
            </ul>
            <h6 className="font-normal mt-3 underline text-gray-500 dark:text-gray-100">
              Frontend
            </h6>
            <ul className="gap-4 mt-2">
              {project?.frontTechs?.map((item, i) => (
                <LogoItemProject key={i} item={item} />
              ))}
            </ul>
          </div>
        </div>
        <Carousel images={[project.image, project.image, project.image]} />
        <h2 className="text-xl dark:text-gray-100">Motivation</h2>
        <p className="dark:text-gray-100">{project.description}</p>
      </div>
    </Layout>
  );
};

export default Project;

export async function getStaticProps({ params }) {
  const project = projects.find((pr) => pr.slug === params.project);
  if (!project) {
    return { notFound: true };
  }
  return {
    props: {
      project: project,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  };
}
