import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import * as styles from "../RelatedPosts/index.module.scss"

export const RelatedPosts = ({ title }) => {
  // 全記事のデータを取得
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___category})  {
        edges {
          node {
            frontmatter {
              slug
              title
              category
              date(formatString: "MMM DD YYYY")
            }
          }
        }
      }
    }
  `);

  // 条件に一致する関連記事のみを絞り込む
  const relatedPosts = data.allMarkdownRemark.edges.filter(
    (post) =>
      post.node.frontmatter.title !== title
  ).reverse().slice(0, 5)

  if (!relatedPosts.length) {
    return null;
  }
  return (
    <div className={styles.relatedPosts}>
      <h2 className={styles.heading}>あわせて読みたい</h2>
      <ul className={styles.relatedPostsList}>
        {relatedPosts.map((post) => (
          <li key={post.node.frontmatter.slug}>
            <Link to={`/${post.node.frontmatter.slug}/`}>
              <h4>{post.node.frontmatter.title}</h4>
              <p><time dateTime={post.node.frontmatter.date}>{post.node.frontmatter.date}</time></p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedPosts