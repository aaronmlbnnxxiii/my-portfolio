/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from 'react'
import Header from "@components/Header"
import '../../styles/global.css'
import { useGlobal } from '@contexts/GlobalContext'
import Announcement from '@components/Announcement'
import MobileMenu from '@components/MobileMenu'
import Seo from "@components/Seo"

const Layout = ({ children, title, description }: any) => {
  const { mobileMenuActive } = useGlobal()

  return (
    <>
      <Seo
        title={title}
        description={description}
      />
      <div className='w-full min-h-screen flex flex-col'>
        <Announcement />
        <Header />
        <main>
          {mobileMenuActive && <MobileMenu />}
          {children}
        </main>
        <footer className="px-4 flex justify-center mx-auto py-5">
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>

  )
}

export default Layout



