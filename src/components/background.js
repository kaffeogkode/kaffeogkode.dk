import React from "react"
import './background.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Background = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "covers/04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="background">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  )
}

export default Background
