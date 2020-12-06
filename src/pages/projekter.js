import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import ProjectPreview from "../components/projektpreview"
import SEO from "../components/seo"

const query = graphql`
{
  allWordpressPost(filter: {acf: {kk_type: {eq: "projekt"}}}) {
    edges {
      node {
        title
        excerpt
        slug
        acf {
          github
          streams
          youtube
          github_2
        }
      }
    }
  }
}
`

const Projekter = () => (
  <StaticQuery
      query={query}
      render={
        data => {
          const edges = data.allWordpressPost.edges ?? []
          return (
            <Layout>
              <SEO title="Projekter" />
              <h1>Projekter</h1>
              <p>Her kommer der mere om vores projekter, både overståede og kommende.</p>
              <p>Du kan også følge med på <a href="https://github.com/kaffeogkode">GitHub</a>.</p>
              <hr />
              {edges.map(p => <ProjectPreview p={p.node}/>)}
            </Layout>
          )
        }
      }
    />
)

export default Projekter
