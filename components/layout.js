import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header></Header>
      {children} <Footer></Footer>
    </>
  );
}

export default Layout;
