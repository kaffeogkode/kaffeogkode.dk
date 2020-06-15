import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OmOsPage = () => (
  <Layout>
    <SEO title="Om os" />
    <h1>Om os</h1>
    <h2>Isabella</h2>
    <p>Isabella er uddannet softwareudvikler fra ITU og bor i Frankrig.</p>
    <p><a href="https://www.isabellakarpf.com/">https://www.isabellakarpf.com/</a></p>
    <h2>Michael</h2>
    <p>Michael er uddannet ingeniør og CTO i <a href="https://abcsoftwork.com/">ABC Softwork</a>.</p>
    <p><a href="https://michaelbanzon.com/">https://michaelbanzon.com/</a></p>
  </Layout>
)

export default OmOsPage
