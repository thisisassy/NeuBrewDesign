import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        lang
        description
        author
      }
    }
  }
  `)
  const title = props.pagetitle
    ? `${props.pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title
  const desc = props.pagedesc || data.site.siteMetadata.description
  const url = props.pagepath
    ? `${data.site.siteMetadata.siteUrl}${props.pagepath}`
    : data.site.siteMetadata.siteUrl

  return (
    < Helmet >
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={data.site.siteMetadata.locale} />

      <meta property="og:image" content="" />
      <meta property="og:image:width" content="" />
      <meta property="og:image:height" content="" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet >
  )
}