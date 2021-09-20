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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-remark-images",
    "gatsby-remark-prismjs",
    "gatsby-remark-autolink-headers",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
      __key: "posts",
    },
  ],
};
