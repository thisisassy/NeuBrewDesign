const path = require("path")

exports.createPages = async gatsbyNodeHelpers => {
  const { graphql, actions, reporter } = gatsbyNodeHelpers
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve('./src/templates/tags.js')

  const result = await graphql(`
  {
    posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
  `)
  if (result.errors) {
    reporter.paniOnBuild(`Error while running GraphQL query`)
    return
  }

  const posts = result.data.posts.edges

  // blog posts
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPost,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  // tags page

  const tags = result.data.tags.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}