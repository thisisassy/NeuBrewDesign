module.exports = {
  siteMetadata: {
    siteUrl: "https://www.neubrewdesign.com",
    title: "Neu Brew Design",
    author: "Haruka Ashley",
    description: "デザインとコーディングのメモを中心に生活と読書、考えたことを記録しています",
    lang: "ja",
    locale: "ja_JP",
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
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-twitter",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-2330Z1HN6E",
        head: true,
        respectDNT: true,
        exclude: [`/category/**`, `/tag/**`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        excludes: [`/success`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Neu Brew Design`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#A0D8EF`,
        display: `standalone`,
        icon: `./src/images/favicon.png`,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-remark-related-posts`,
      options: {
        posts_dir: `${__dirname}/src/posts`,
        doc_lang: "ja",
      },
    },
  ],
};
