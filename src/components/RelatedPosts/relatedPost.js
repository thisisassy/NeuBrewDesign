import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export const RelatedPosts = ({ category, title }) => {
  // 全記事のデータを取得
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              category
            }
          }
        }
      }
    }
  `);

  // 条件に一致する関連記事のみを絞り込む
  const relatedPosts = data.allMarkdownRemark.edges.filter(
    (post) =>
      post.node.frontmatter.category === category
    //post.node.frontmatter.title !== title
  ).reverse().slice(0, 5)

  if (!relatedPosts.length) {
    return null;
  }
  return (
    <>
      <h2>あわせて読みたい</h2>
      <ul>
        {relatedPosts.map(post => (
          <li key={post.node.frontmatter.slug}>
            <Link to={`${post.node.frontmatter.slug}/`}>
              <h3>{post.node.frontmatter.title}</h3>
              <span>{post.node.frontmatter.category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RelatedPosts