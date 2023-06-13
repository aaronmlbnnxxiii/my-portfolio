/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react";
import Header from "@components/Header";
import "../../styles/global.css";
import { useGlobal } from "@contexts/GlobalContext";
import Announcement from "@components/Announcement";
import MobileMenu from "@components/MobileMenu";
import Seo from "@components/Seo";
import { Slice, graphql, useStaticQuery } from "gatsby";
import Footer from "./Footer";

const Layout = ({ children, title, description, activeDocMeta, links }: any) => {
  const { mobileMenuActive } = useGlobal();


  return (
    <>
      <Seo title={title} description={description} />
      <div className="w-full min-h-screen flex flex-col">
        <Announcement />
        <Header activeDocMeta={activeDocMeta} links={links} />
        <main>
          {mobileMenuActive && <MobileMenu />}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

