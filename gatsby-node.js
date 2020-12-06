/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`)
  const projectTemplate = path.resolve(`src/templates/project.js`)

  const pages = graphql(`
  {
    allWordpressPage(sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          content
          date
          slug
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allWordpressPage.edges.forEach(({ node }) => {
      if (!node.slug) {
        return
      }
      createPage({
        path: `/${node.slug}`,
        component: pageTemplate,
        context: {
          slug: node.slug
        }, // additional data can be passed via context
      })
    })
  })


  const projectPages = graphql(`
  {
    allWordpressPost {
      edges {
        node {
          title
          content
          date
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allWordpressPost.edges.forEach(({ node }) => {
      if (!node.slug) {
        return
      }
      createPage({
        path: `/projekt/${node.slug}`,
        component: projectTemplate,
        context: {
          slug: node.slug
        }, // additional data can be passed via context
      })
    })
  })

  return Promise.all([pages, projectPages]); 
}
