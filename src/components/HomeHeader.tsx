import React, { FC } from "react";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import Navbar from "./Navbar";

const ImageTint = styled(Box)({
  position: "relative",
  height: '36rem',
  ":after": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "rgba(255, 255, 255, 0.8)",
  },
});

const HomeHeader: FC = () => {
  const data = useStaticQuery(graphql`
    query HeaderContent {
      header: contentfulAsset(
        file: { fileName: { eq: "header-skyline.jpeg" } }
      ) {
        id
        fluid(resizingBehavior: FILL, cropFocus: TOP, maxWidth: 2048, toFormat: WEBP) {
          ...GatsbyContentfulFluid
        }
      }
      headshot: contentfulAsset(file: { fileName: { eq: "betsyrader.png" } }) {
        id
        fluid(toFormat: WEBP, quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
      text: contentfulPageHeader(page: { eq: "/" }) {
        headline
        subtitle
      }
      headline: contentfulHeadline {
        headline
      }
    }
  `);
  return (
    <Box>
      <Box pos="relative">
        <Navbar
          pos="absolute"
          top={0}
          left={0}
          right={0}
          width="100%"
          zIndex={10}
        />
        <ImageTint>
          <Img
            style={{ height: "100%" }}
            imgStyle={{ filter: "grayscale(100%)" }}
            durationFadeIn={1000}
            fluid={data.header.fluid}
          />
        </ImageTint>
        <Flex
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          top={0}
          px={{ xl: '10rem', lg: '4rem', base: '1rem' }}
          alignItems="center"
          justifyContent="center"
        >
          <VStack maxWidth="45rem" alignItems="left" mt="4rem">
            <Heading
              fontWeight="semibold"
              fontSize={{ xl: "6xl", sm: "5xl", base: "4xl" }}
              textTransform="uppercase"
              color="primary"
              textAlign={{ lg: 'left', base: 'center' }}
            >
              {data.text.headline}
            </Heading>
            <Heading
              fontWeight="medium"
              fontSize={{ xl: "5xl", sm: "4xl", base: "3xl" }}
              textAlign={{ lg: 'left', base: 'center' }}
            >
              {data.text.subtitle}
            </Heading>
          </VStack>
          <Box mt="auto" display={{ lg: 'block', base: 'none' }}>
            <Img
              style={{ width: 300, marginLeft: "auto" }}
              fadeIn={false}
              fluid={data.headshot.fluid}
            />
          </Box>
        </Flex>
      </Box>
      <Flex bg="primary" py="2rem" justifyContent="center" px="2rem">
        <Heading color="white" fontWeight="medium" textAlign="center">
          {data.headline.headline}
        </Heading>
      </Flex>
    </Box>
  );
};

export default HomeHeader;
