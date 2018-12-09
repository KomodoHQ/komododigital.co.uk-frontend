module.exports = {
  siteMetadata: {
    name: 'Komodo Digital',
    title: 'Web Design | App Development | Newcastle',
    description: 'Home of Komodo Digital',
  },
  plugins: [
    { 
      resolve: 'gatsby-plugin-typescript', 
      options: { 
        transpileOnly: true, // default 
        compilerOptions: { 
          target: 'esnext', 
          experimentalDecorators: true, 
          jsx: 'react', 
        }, 
      } 
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Komodo Digital',
        short_name: 'Komodo',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/content/images/monogram.svg',
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        /*
       * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
       * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
       */
        baseUrl: 'blog.komododigital.co.uk',
        // The protocol. This can be http or https.
        protocol: 'https',
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com.
        // Defaults to true.
        useACF: false,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          // htaccess_user: 'your-htaccess-username',
          // htaccess_pass: 'your-htaccess-password',
          // htaccess_sendImmediately: false,
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // wpcom_app_clientSecret:
          //   'NMPnXYFtj2gKas7V1kZyMxr7oLry9V5ZxIyBQGu2txjVHg0GhFz6RYcKopkHICYg',
          // wpcom_app_clientId: '54793',
          // wpcom_user: 'gatsbyjswpexample@gmail.com',
          // wpcom_pass: 'very-secured-password',
        },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: 'https://blog.komododigital.co.uk',
        //   replacementUrl: 'https://blog.komododigital.co.uk',
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Exclude specific routes using glob parameters
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]` will exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        excludedRoutes: [
          '/*/*/comments',
          '/yoast/**',
          '/oembed/**',
          '/**/users/**',
          '/**/comments/**',
        ],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities;
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://314dbec933e44245ae35b28fcb15bc96@sentry.io/1289118'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-1236119-5",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    }
  ],
};
