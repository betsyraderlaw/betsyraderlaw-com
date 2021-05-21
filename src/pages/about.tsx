import React, { FC } from "react";
import { graphql } from "gatsby";
import { Box, Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import RichText from "../components/RichText";
import { GatsbyImage } from "gatsby-plugin-image";

type PageProps = {
  data: any;
};

const About: FC<PageProps> = ({ data }) => {
  return (
    <Box>
      <SEO title={data.about.title} />
      <Navbar />
      <Flex justifyContent="center" px="2rem" py="3rem">
        <Stack maxWidth="64rem" spacing="3rem">
          <Heading
            color="primary"
            fontWeight="semibold"
            fontSize={{ base: '4xl', lg: '5xl' }}
            mr="auto"
          >
            {data.about.title}
          </Heading>
          <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center" spacing="2rem">
            <Box
              flexShrink={0}
              borderRadius="full"
              overflow="hidden"
              width="18rem"
              height="18rem"
            >
              <GatsbyImage
                alt={data.about.photo.title}
                image={data.about.photo.gatsbyImageData}
              />
            </Box>
            <RichText content={JSON.parse(data.about.header.raw)} />
          </Stack>
          <RichText content={JSON.parse(data.about.content.raw)} />
        </Stack>
      </Flex>
      <Contact />
      <Footer />
    </Box>
  );
};

export const pageQuery = graphql`
  query About {
    about: contentfulAbout {
      title
      photo {
        title
        gatsbyImageData
      }
      header {
        raw
      }
      content {
        raw
      }
    }
  }
`;

export default About;
