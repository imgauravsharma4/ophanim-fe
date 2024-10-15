import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainSecure = ({ children }) => {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default MainSecure;
