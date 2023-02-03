import { PageProps } from 'gatsby'
import React from 'react'
import Layout from '@components/Layout'

export const ProjectContent = () => {
  return (<div>Test</div >)
}

const ProjectTemplate: React.FC<PageProps> = (context) => {
  return (
    <Layout>
      <ProjectContent />
    </Layout>
  )
}

export default ProjectTemplate