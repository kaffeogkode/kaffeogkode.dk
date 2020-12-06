// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })


require("dotenv").config()
// import dotenv from 'dotenv'
// dotenv.config()

module.exports = {
  siteMetadata: {
    title: `Kaffe & Kode`,
    description: `Vi hygger med kaffe imens vi koder`,
    author: `@kaffeogkode`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/k-og-k-icon.png`, // This path is relative to the root of the site.
      },
    },
		{
			resolve: `gatsby-source-wordpress`,
			options: {
			  baseUrl: process.env.WP_API_BASE,
			  protocol: `https`,
			  hostingWPCOM: false,
			  useACF: true,
			  plugins: [
				{
				  resolve: `gatsby-wordpress-inline-images`,
				//   options:
				//   {
				// 	baseUrl: `localhost:8888/wordpress`,
				// 	protocol: `http`
				//   }
				}
			  ]
			},
		  },
  ],
}
