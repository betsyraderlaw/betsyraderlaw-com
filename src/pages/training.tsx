import React, { FC } from "react";
import { graphql } from "gatsby";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Work from "../components/Work";

type PageProps = {
  data: any;
};

const Training: FC<PageProps> = ({ data }) => {
  return (
    <Box>
      <SEO title="Training &amp; Seminars" />
      <Navbar />
      <Flex justifyContent="center" px="2rem" py="3rem">
        <VStack alignItems="left" maxWidth="64rem" spacing="3rem">
          <Heading
            color="primary"
            fontWeight="semibold"
            fontSize={{ base: "3xl", lg: "4xl" }}
            mr="auto"
          >
            Training &amp; Seminars
          </Heading>
          <VStack alignItems="left" spacing="2rem" width="100%">
            {data.seminars.nodes.map((work: any) => (
              <Work
                key={work.id}
                title={work.title}
                location={work.location}
                date={work.date}
              />
            ))}
          </VStack>
          <Heading
            color="primary"
            fontWeight="semibold"
            fontSize={{ base: "3xl", lg: "4xl" }}
            mr="auto"
          >
            Publications
          </Heading>
          <VStack alignItems="left" spacing="2rem" width="100%">
            {data.publications.nodes.map((work: any) => (
              <Work
                key={work.id}
                title={work.title}
                location={work.location}
                url={work.url}
                date={work.date}
              />
            ))}
          </VStack>
        </VStack>
      </Flex>
      <Contact />
      <Footer />
    </Box>
  );
};

export const pageQuery = graphql`
  query Training {
    seminars: allContentfulWork(
      sort: { fields: date, order: DESC }
      filter: { type: { eq: "seminar" } }
    ) {
      nodes {
        id
        title
        location
        url
        date
      }
    }
    publications: allContentfulWork(
      sort: { fields: date, order: DESC }
      filter: { type: { eq: "publication" } }
    ) {
      nodes {
        id
        title
        location
        url
        date
      }
    }
  }
`;

export default Training;
