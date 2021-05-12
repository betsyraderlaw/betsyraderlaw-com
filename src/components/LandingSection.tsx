import React, { FC } from "react";
import { Flex, Box, BoxProps, Heading, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import RichText, { RichTextDocument } from "./RichText";

type ImageTintProps = BoxProps & {
  tintColor: string;
};

const ImageTint = styled(Box, {
  shouldForwardProp: (prop) => prop !== "tintColor",
})<ImageTintProps>(({ tintColor }) => ({
  position: "relative",
  flex: 1,
  ":after": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: `var(--chakra-colors-${tintColor})`,
    opacity: 0.8,
  },
}));

export type LandingSectionProps = {
  overline?: string;
  title: string;
  direction: "left" | "right";
  backgroundImage: any;
  backgroundColor: "primary" | "secondary";
  content: RichTextDocument;
};

const LandingSection: FC<LandingSectionProps> = ({
  backgroundColor,
  backgroundImage,
  direction,
  content,
  title,
  overline,
}) => {
  return (
    <Flex
      direction={{
        lg: direction === "left" ? "row" : "row-reverse",
        base: "column",
      }}
    >
      <Flex position="relative" maxHeight="24rem" minHeight="18rem" flex={1}>
        <ImageTint tintColor={backgroundColor}>
          <Img
            style={{ height: "100%" }}
            durationFadeIn={1000}
            fluid={backgroundImage}
          />
        </ImageTint>
        <Flex
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          px={{ lg: "4rem", sm: "2rem", base: "1rem" }}
          py={{ lg: "2rem", base: "1rem" }}
          alignItems="center"
          color="white"
        >
          <VStack
            alignItems={direction}
            spacing="4"
            maxWidth="24rem"
            ml={{ lg: direction === "left" ? "auto" : 0, base: 0 }}
            mr={{ lg: direction === "right" ? "auto" : 0, base: 0 }}
          >
            {overline && (
              <Heading fontWeight="normal" fontSize="xl">
                {overline}
              </Heading>
            )}
            <Heading fontWeight="medium" fontSize="4xl">
              {title}
            </Heading>
            <Box height="1" width="12" bg="white" borderRadius="full" />
          </VStack>
        </Flex>
      </Flex>
      <Flex
        flex={1}
        alignItems="center"
        px={{ lg: "4rem", base: "2rem" }}
        py="2rem"
      >
        <RichText
          maxWidth={{ lg: "32rem", base: "none" }}
          mr={direction === 'left' ? 'auto' : 0}
          ml={direction === 'right' ? 'auto' : 0}
          content={content}
          fontWeight="medium"
        />
      </Flex>
    </Flex>
  );
};

export default LandingSection;
