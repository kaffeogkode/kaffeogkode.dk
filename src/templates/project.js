import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const page = ({ data: { wordpressPost }}) => (
  <Layout>
    <SEO title={wordpressPost.title} />
    <h1>{wordpressPost.title}</h1>
    {wordpressPost.acf.streams ? <p><i><strong>Streamet:</strong> {wordpressPost.acf.streams}</i></p> : null}
    <div dangerouslySetInnerHTML={{ __html: wordpressPost.content }} />
    {wordpressPost.acf.youtube ?
        <p>Se sammendrag <a href={wordpressPost.acf.youtube}>på YouTube</a></p>
    :null}
    {wordpressPost.acf.github ?
        <p>Se koden <a href={wordpressPost.acf.github}>på GitHub</a></p>
    :null}
    {wordpressPost.acf.github_2 ?
        <p>Mere kode <a href={wordpressPost.acf.github_2}>på GitHub</a></p>
    :null}
    <p><Link to="/projekter">Tilbage til projekter</Link></p>
  </Layout>
)

export default page

export const pageQuery = graphql`
query ($slug: String!) {
    wordpressPost(slug: {eq: $slug}) {
      id
      slug
      title
      content
      acf {
        github
        streams
        youtube
        github_2
      }
    }
  }
`  