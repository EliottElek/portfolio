import React from "react";
import Navigation from "./Navigation";
import Particles from "./Particules";
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Particles />
      {children}
    </div>
  );
};

export default Layout;
