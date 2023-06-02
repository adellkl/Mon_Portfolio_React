import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import { ThemeProvider } from "next-themes";
import Projeàct from "../components/Project";

const ProjectPage = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <ContainerBlock title="Projets - Loukal Adel">
        <Projeàct />
      </ContainerBlock>
    </ThemeProvider>
  );
};

export default ProjectPage;
