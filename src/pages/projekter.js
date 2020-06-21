import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projekter = () => (
  <Layout>
    <SEO title="Projekter" />
    <h1>Projekter</h1>
    <p>Her kommer der mere om vores projekter, både overståede og kommende.</p>
    <p>Indtil videre kan du følge med på <a href="https://github.com/kaffeogkode">GitHub</a>.</p>

    <h2>Projekt #1 - Vores egen hjemmeside</h2>
    <p><em>Streamet live 15. juni + 21. juni 2020.</em></p>
    <p>Vores første projekt var at lave vores egen hjemmeside! Du kan se koden til den <a href="https://github.com/kaffeogkode/kaffeogkode.dk/">på GitHub</a>.</p>
    <p>Siden er lavet med <a href="https://www.gatsbyjs.org">GatsbyJS</a>, koden bliver automagisk bygget fra <a href="https://github.com/">GitHub</a> og hostet på <a href="https://www.netlify.com/">Netlify</a>.</p>
  </Layout>
)

export default Projekter
