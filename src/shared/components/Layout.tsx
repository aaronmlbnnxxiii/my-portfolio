/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState, useRef, useLayoutEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import '../../styles/global.css'
import { useGlobal } from "../../contexts/GlobalContext"
import MobileMenu from "./MobileMenu"
import useWindowSize from '../../utils/WindowSize'

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { mobileMenuActive } = useGlobal()
  const HeaderRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const { width } = useWindowSize()

  useLayoutEffect(() => {
    return setHeaderHeight(HeaderRef.current?.clientHeight)
  }, [width])



  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} ref={HeaderRef} />
      <div>
        <main className="h-[200vh]">
          {mobileMenuActive && <MobileMenu style={{ marginTop: headerHeight }} />}
          {children}</main>
        <footer className="max-w-[1024px] px-4 flex justify-center mx-auto py-5">
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
