module.exports = {
  siteMetadata: {
    name: "Komodo Digital",
    title: "Web Design | App Development | Newcastle",
    description: "Home of Komodo Digital",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "KomodoDigital-Template",
        short_name: "KomodoDigital-Template",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        display: "minimal-ui",
        icon: "src/images/monogram.svg",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    }
  ],
}