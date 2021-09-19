module.exports = {
  siteMetadata: {
    siteUrl: "https://www.neubrewdesign.com",
    title: "NeuBrewDesign",
    author: "Haruka Ashley",
    description: "こんにちは。デザイン、コーディング、旅行、本のメモ、生活の向上と生き方についての話題を扱うブログです。",
    lang: "ja",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "${__dirname}/src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "${__dirname}/src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "${__dirname}/src/posts/",
      },
      __key: "posts",
    },
  ],
};
