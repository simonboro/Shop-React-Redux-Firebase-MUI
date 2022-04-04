import React from "react";
import Footer from "../components/molecules/navigations/Footer";
import Navbar from "../components/molecules/navigations/Navbar";
import { StyledChildrenWrapper } from "./StyledChildrenWrapper";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
      <Footer />
    </>
  );
};

export default MainTemplate;
