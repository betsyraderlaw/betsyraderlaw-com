import React, { FC } from "react";
import { Box, BoxProps, Heading, VStack, Flex } from "@chakra-ui/react";
import Img, { FluidObject } from "gatsby-image";

export type PracticeAreaProps = BoxProps & {
  title: string;
  image: FluidObject;
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
    <Img style={{ width: "100%", flex: 1 }} fluid={image} />
    <Flex padding="0.75rem">
      <Heading fontWeight="medium" fontSize="xl" textAlign="center">
        {title}
      </Heading>
    </Flex>
  </VStack>
);

export default PracticeArea;
