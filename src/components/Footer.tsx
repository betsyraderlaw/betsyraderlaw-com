import React, { FC } from "react";
import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";

export type FooterProps = FlexProps;

const Footer: FC<FooterProps> = (props) => {
  const data = useStaticQuery(graphql`
    query Footer {
      site {
        buildTime
      }
      disclaimer: contentfulDisclaimer {
        text {
          text
        }
      }
    }
  `);

  return (
    <Flex
      alignItems="center"
      direction="column"
      bg="backdrop"
      px="1rem"
      py="4rem"
      color="white"
      {...props}
    >
      <Text textAlign="center" maxWidth="64rem">{data.disclaimer.text.text}</Text>
      <Text mt="2rem">Copyright &copy; {data.site.buildTime.slice(0, 4)} Betsy Rader Law LLC</Text>
    </Flex>
  );
};

export default Footer;
