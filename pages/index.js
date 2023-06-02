import ContainerBlock from "../components/ContainerBlock";
import HomePage from "../components/HomePage";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class">
        <ContainerBlock title="Loukal Adel - Portfolio" description=" ">
          <HomePage />
        </ContainerBlock>
      </ThemeProvider>
    </>
  );
}
