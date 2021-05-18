import React, { FC } from "react";
import { Flex, FlexProps, Heading } from "@chakra-ui/react";
import PracticeArea from "./PracticeArea";
import { graphql, useStaticQuery } from "gatsby";

export type PracticeAreasProps = FlexProps;

const PracticeAreas: FC<PracticeAreasProps> = (props) => {
  const data = useStaticQuery(graphql`
    query PracticeAreas {
      practiceAreas: allContentfulPracticeArea(
        sort: { fields: order, order: ASC }
      ) {
        nodes {
          id
          title
          image {
            gatsbyImageData(width: 256, placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
    }
  `);

  return (
    <Flex alignItems="center" direction="column" pt="4rem" bg="background" {...props}>
      <Heading fontWeight="semibold">Practice Areas</Heading>
      <Flex
        maxWidth="80rem"
        flex={1}
        justifyContent="center"
        flexWrap="wrap"
        px="0.5rem"
        py="4rem"
      >
        {data.practiceAreas.nodes.map((practiceArea: any) => (
          <PracticeArea
            m="3"
            key={practiceArea.id}
            title={practiceArea.title}
            image={practiceArea.image.gatsbyImageData}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default PracticeAreas;
