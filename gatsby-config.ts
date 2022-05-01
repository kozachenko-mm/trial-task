import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: "https://api-ca-central-1.graphcms.com/v2/cl2kmw2o40ni501z46usg4te0/master",
      },
    },
  ],
}

export default config
