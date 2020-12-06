import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './menu.css'

const query = graphql`
{
  allWordpressPage {
    edges {
      node {
        title
        slug
        acf {
          order
        }
      }
    }
  }
}
`

const Menu = () => {
  return (
    <StaticQuery
      query={query}
      render={
        data => {
          const edges = data.allWordpressPage.edges ?? []
          return (
            <Navbar id="kk-navbar" expand="lg" variant="light" bg="light" fixed="top">
              <Container>
                <Navbar.Brand as={Link} to="/">Kaffe &amp; Kode</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link as={Link} to="/projekter">Projekter</Nav.Link>
                  </Nav>
                  <Nav className="mr-auto">
                    {edges.sort((a, b) => parseInt( a.node.acf.order ?? 0 ) - parseInt( b.node.acf.order ?? 0)).map(p =>
                      <Nav.Link as={Link} to={`/${p.node.slug}`}><span dangerouslySetInnerHTML={{ __html: p.node.title }} /></Nav.Link>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )
        }
      }/>

  )
}

export default Menu
