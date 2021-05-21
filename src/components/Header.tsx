import React, { FC } from "react";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Navbar from "./Navbar";

const ImageTint = styled(Box)({
  position: "relative",
  height: "36rem",
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

export type HeaderProps = {
  headline: string;
  subtitle?: string;
  header?: string;
};

const Header: FC<HeaderProps> = ({ header, subtitle, headline }) => {
  const data = useStaticQuery(graphql`
    query HeaderContent {
      header: contentfulAsset(
        file: { fileName: { eq: "header-skyline.jpeg" } }
      ) {
        id
        title
        gatsbyImageData(
          resizingBehavior: FILL
          cropFocus: TOP
          formats: [AUTO, WEBP]
        )
      }
      headshot: contentfulAsset(file: { fileName: { eq: "betsyrader.png" } }) {
        id
        title
        gatsbyImageData(
          quality: 100
          height: 400
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP]
        )
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
          <GatsbyImage
            style={{ height: "100%", width: "100%" }}
            imgStyle={{ filter: "grayscale(100%)" }}
            alt={data.header.title}
            image={data.header.gatsbyImageData}
          />
        </ImageTint>
        <Flex
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          top={0}
          px={{ xl: "10rem", lg: "4rem", base: "1rem" }}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Flex maxW="64rem" justifyContent="center" alignItems="bottom">
            <VStack
              maxWidth="45rem"
              alignItems="left"
              mt="4rem"
              mb="8rem"
              mr={{ lg: "4rem", base: "0" }}
              flex={1}
            >
              {headline && (
                <Heading
                  fontWeight="semibold"
                  fontSize={{ xl: "6xl", sm: "5xl", base: "4xl" }}
                  textTransform="uppercase"
                  color="primary"
                  textAlign={{ lg: "left", base: "center" }}
                >
                  {headline}
                </Heading>
              )}
              {subtitle && (
                <Heading
                  fontWeight="medium"
                  fontSize={{ xl: "5xl", sm: "4xl", base: "3xl" }}
                  textAlign={{ lg: "left", base: "center" }}
                >
                  {subtitle}
                </Heading>
              )}
            </VStack>
            <Box
              mt="auto"
              ml="auto"
              height="400px"
              width="300px"
              flexShrink={0}
              display={{ lg: "block", base: "none" }}
            >
              <GatsbyImage
                alt={data.headshot.title}
                image={data.headshot.gatsbyImageData}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
      {header && (
        <Flex bg="primary" py="2rem" justifyContent="center" px="2rem">
          <Heading color="white" fontWeight="medium" textAlign="center">
            {header}
          </Heading>
        </Flex>
      )}
    </Box>
  );
};

export default Header;
