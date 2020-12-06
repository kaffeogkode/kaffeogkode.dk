import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const page = ({ data: { wordpressPage }}) => (
  <Layout>
    <SEO title={wordpressPage.title} />
    <div dangerouslySetInnerHTML={{ __html: wordpressPage.content }} />
  </Layout>
)

export default page

export const pageQuery = graphql`
query ($slug: String!) {
    wordpressPage(slug: {eq: $slug}) {
      id
      slug
      title
      content
    }
  }
`  