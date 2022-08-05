import React from "react";
import Navigation from "./Navigation";
import Particles from "./Particules";
const Layout = ({ children }) => {
  return (
    <div>
      <Particles />
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
