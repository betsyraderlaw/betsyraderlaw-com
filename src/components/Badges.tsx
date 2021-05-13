import React, { FC } from "react";
import { Box, Flex, FlexProps, HStack } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

export type BadgesProps = FlexProps;

const Badges: FC<BadgesProps> = (props) => {
  const data = useStaticQuery(graphql`
    query Badges {
      badges: allContentfulBadge {
        nodes {
          id
          name
          image {
            fluid(maxHeight: 300, maxWidth: 300, toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `);
  return (
    <Flex justifyContent="center" px="2rem" pt="3rem" pb="1rem" bg="background" {...props}>
      <HStack>{data.badges.nodes.map((badge: any) => (
        <Box height="10rem" width="10rem">
          <Img fluid={badge.image.fluid} />
        </Box>
      ))}</HStack>
    </Flex>
  );
};

export default Badges;
