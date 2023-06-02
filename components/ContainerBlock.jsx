import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import Footer from "./Footer"



function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Loukal Adel - Portfolio",
    description: ``,
    image: "",
    type: "",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Adel Loukal" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-900 w-full h-screen justify-between">
        <Navigation />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  )

}



export default ContainerBlock;