import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../shared/components/Layout"
import HeroBanner from "../sections/HeroBanner"



const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location.hash} title="Home">
      <HeroBanner />
      <section id="about" className="min-h-screen">About</section>
      <section id="projects" className="min-h-screen">projects</section>
      <section id="services" className="min-h-screen">services</section>
      <section id="contact" className="min-h-screen">Contact</section>
    </Layout>
  )
}

export default IndexPage
