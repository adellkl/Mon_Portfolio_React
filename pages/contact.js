import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import { ThemeProvider } from "next-themes";
import Contact from "../components/contact";

const ContactPage = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <ContainerBlock title="Contact - Loukal Adel">
        <Contact />
      </ContainerBlock>
    </ThemeProvider>
  );
};

export default ContactPage;
