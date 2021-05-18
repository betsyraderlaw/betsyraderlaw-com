import React, { FC } from "react";
import { Box, Flex, FlexProps, HStack } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';

export type BadgesProps = FlexProps;

const Badges: FC<BadgesProps> = (props) => {
  const data = useStaticQuery(graphql`
    query Badges {
      badges: allContentfulBadge {
        nodes {
          id
          name
          image {
            gatsbyImageData(height: 300, width: 300, placeholder: TRACED_SVG, formats: [AUTO, WEBP])
          }
        }
      }
    }
  `);
  return (
    <Flex justifyContent="center" px="2rem" pt="3rem" pb="1rem" bg="background" {...props}>
      <HStack>{data.badges.nodes.map((badge: any) => (
        <Box key={badge.id} height="10rem" width="10rem">
          <GatsbyImage alt={badge.name} image={badge.image.gatsbyImageData} />
        </Box>
      ))}</HStack>
    </Flex>
  );
};

export default Badges;
