module.exports = {
  siteMetadata: {
    title: `Social Scraper`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
