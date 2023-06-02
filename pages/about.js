import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import { ThemeProvider } from "next-themes";
import About from "../components/About";

const AboutPage = () => {
  return (
    <ThemeProvider attribute="class">
      <ContainerBlock title="About - Loukal Adel">
        <About />
      </ContainerBlock>
    </ThemeProvider>
  );
};

export default AboutPage;
