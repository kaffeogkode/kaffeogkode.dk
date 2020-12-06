import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Menu from "./menu"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Menu />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <footer>
        
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
