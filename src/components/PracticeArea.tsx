import React, { FC } from "react";
import { BoxProps, Heading, VStack, Flex } from "@chakra-ui/react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export type PracticeAreaProps = BoxProps & {
  title: string;
  image: IGatsbyImageData;
};

const PracticeArea: FC<PracticeAreaProps> = ({ title, image, ...props }) => (
  <VStack
    height="16rem"
    width="16rem"
    bg="white"
    shadow="md"
    spacing="0"
    {...props}
  >
    <GatsbyImage style={{ width: "100%", flex: 1 }} alt={title} image={image} />
    <Flex padding="0.75rem">
      <Heading fontWeight="medium" fontSize="xl" textAlign="center">
        {title}
      </Heading>
    </Flex>
  </VStack>
);

export default PracticeArea;
