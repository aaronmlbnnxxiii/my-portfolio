import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../shared/components/Layout"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>content</div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
