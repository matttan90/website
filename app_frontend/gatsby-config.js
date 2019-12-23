module.exports = {
  siteMetadata: {
    title: `matt tan`,
    description: `Matthew Tan's personal website`,
    author: `Matthew Tan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#24716d`,
        theme_color: `#24716d`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-smoothscroll`,
    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   // If you want to use styled components, in conjunction to Material-UI, you should:
    //   // - Change the injection order
    //   // - Add the plugin
    //   options: {
    //     // stylesProvider: {
    //     //   injectFirst: true,
    //     // },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
  proxy: {
    prefix: "/api",
    url: "http://localhost:9000",
  },
}
