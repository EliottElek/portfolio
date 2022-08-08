import React from "react";
import Navigation from "./Navigation";
import Particles from "./Particules";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        //animation of component appearence
        animate={{ opacity: 1 }}
        // how your element will appears f.e(duration in seconds)
        transition={{ delay: 0.2 }}
        // your exit animation
        exit={{ opacity: 0 }}
        key={router.asPath}
      >
        <Particles />
        <Navigation />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
