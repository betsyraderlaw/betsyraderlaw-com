import React, { FC } from "react";
import { graphql } from "gatsby";
import { Box, Flex } from "@chakra-ui/react";
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import RichText from '../components/RichText';

type PageProps = {
  data: any;
};

const Page: FC<PageProps> = ({ data }) => {
  console.log(data);
  return (
    <Box>
      <SEO title={data.page.title} />
      <Navbar />
      <Flex justifyContent="center" px="2rem" py="3rem">
        <RichText maxWidth="64rem" content={JSON.parse(data.page.content.raw)} references={data.page.content.references} />
      </Flex>
      <Contact />
      <Footer />
    </Box>
  );
};

export const pageQuery = graphql`
  query Page($id: String!) {
    page: contentfulPage(id: { eq: $id }) {
      title
      content {
        raw
        references {
          contentful_id
          title
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Page;
