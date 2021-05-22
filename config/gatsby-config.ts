require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

type ContentfulConfig = {
  spaceId?: string;
  accessToken?: string;
  host?: string;
};

const contentfulConfig: ContentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Betsy Rader Law LLC",
    titleTemplate: "%s - Betsy Rader Law LLC",
    description: "Representing workers in Northeast Ohio",
    url: "https://betsyraderlaw.com",
    image: "/icon.png",
  },
  pathPrefix: "/betsyraderlaw-com",
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Betsy Rader Law LLC",
        short_name: "Betsy Rader Law",
        start_url: "/",
        background_color: "#F8F8F8",
        theme_color: "#731E18",
        display: "standalone",
        icon: "static/icon.png",
        crossOrigin: `use-credentials`
      },
    },
  ],
};
