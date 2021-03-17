import React from "react";

import Navbar from "./navigation/Navbar";
import Footer from "./footer/Footer";

export default function fun(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
