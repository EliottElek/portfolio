import Head from "next/head";
import Layout from "../layout";
import Hero from "../layout/Hero";
import Projects from "../layout/Projects";
import Skills from "../layout/Skills";
import Contact from "../layout/Contact";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Eliott | Web Developer</title>
        <meta
          name="description"
          content="I'm a web developer, who's familiar with all kind of technologies related to web."
        />
      </Head>
      <Layout>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </div>
  );
}
