import React, { FC } from "react";
import { graphql } from "gatsby";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import RichText from "../components/RichText";
import Header from "../components/Header";
import LandingSection from "../components/LandingSection";

type PageProps = {
  data: any;
};

const Page: FC<PageProps> = ({ data }) => {
  return (
    <Box>
      <SEO title="Betsy Rader Consulting" />
      <Header
        headline={data.text.headline}
        subtitle={data.text.subtitle}
        header={data.text.header}
      />
      <Box>
        {data.sections.nodes
          .map((section: any) => (
            <LandingSection
              key={section.id}
              title={section.title}
              overline={section.overline}
              direction={section.direction}
              backgroundColor={section.backgroundColor}
              backgroundImage={section.background.gatsbyImageData}
              content={JSON.parse(section.content.raw)}
            />
          ))}
      </Box>
      <Contact />
      <Footer />
    </Box>
  );
};

export const pageQuery = graphql`
  query Consulting {
    sections: allContentfulLandingSection(
      sort: { fields: order, order: ASC }
      filter: { page: { eq: "/consulting" } }
    ) {
      nodes {
        id
        title
        overline
        primary
        content {
          raw
        }
        direction
        backgroundColor
        background {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
    text: contentfulPageHeader(page: { eq: "/consulting" }) {
      headline
      subtitle
      header
    }
  }
`;

export default Page;
