import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../shared/components/Layout"
import HeroBanner from "../sections/HeroBanner"
import HTMLImage from "@images/html5-logo.png"
import { FastAverageColor } from "fast-average-color"

const IndexPage: React.FC<PageProps> = ({ location }) => {

  const containerRef = React.useRef<HTMLElement>(null)
  const [averageColor, setAverageColor] = React.useState(null)

  console.log(averageColor)

  React.useEffect(() => {
    const fac = new FastAverageColor()

    const container = containerRef.current
    const img = container.querySelector("img")

    //img.crossOrigin = "anonymous"

    img.addEventListener("load", () => {
      const color = fac.getColor(img)

      container.style.backgroundColor = color.rgba
      //container.style.color = color.isDark ? "#fff" : "#000"

      setAverageColor(color)
    })

    // return () => {
    //     window.removeEventListener('load', handleLoad);
    // }
  }, [])


  return (
    <Layout location={location.hash} title="Home">
      <HeroBanner />
      <div className="p-32 w-96" ref={containerRef}>
        <img src={HTMLImage} className="block mx-auto w-full h-auto" />
      </div>
      <section id="about" className="min-h-screen">About</section>
      <section id="projects" className="min-h-screen">projects</section>
      <section id="services" className="min-h-screen">services</section>
      <section id="contact" className="min-h-screen">Contact</section>
    </Layout>
  )
}

export default IndexPage
