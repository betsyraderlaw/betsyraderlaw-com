import React, { FC } from "react";
import { Box, Text, TextProps, Heading } from "@chakra-ui/react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export type RichTextDocument = Document;

type Reference = {
  contentful_id: string;
  title: string;
  gatsbyImageData: IGatsbyImageData;
};

export type RichTextProps = TextProps & {
  content: RichTextDocument;
  references?: Reference[];
};

const RichText: FC<RichTextProps> = ({ content, references, ...props }) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_, children) => (
        <Heading
          as="h1"
          mt="7"
          fontWeight="semibold"
          fontSize="5xl"
          color="primary"
        >
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (_, children) => (
        <Heading
          as="h2"
          mt="6"
          fontWeight="semibold"
          fontSize="4xl"
          color="primary"
        >
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (_, children) => (
        <Heading
          as="h3"
          mt="5"
          fontWeight="semibold"
          fontSize="3xl"
          color="primary"
        >
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (_, children) => (
        <Heading
          as="h4"
          mt="4"
          fontWeight="semibold"
          fontSize="2xl"
          color="primary"
        >
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (_, children) => (
        <Heading
          as="h5"
          mt="3"
          fontWeight="semibold"
          fontSize="xl"
          color="primary"
        >
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (_, children) => (
        <Heading
          as="h6"
          mt="2"
          fontWeight="semibold"
          fontSize="lg"
          color="primary"
        >
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <Text as="p" mt="2" fontSize="lg" fontWeight="medium">
          {children}
        </Text>
      ),
      [BLOCKS.UL_LIST]: (_, children) => (
        <Box as="ul" ml="8" mt="4">
          {children}
        </Box>
      ),
      [BLOCKS.OL_LIST]: (_, children) => (
        <Box as="ul" ml="8" mt="4">
          {children}
        </Box>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const contentId = node.data?.target?.sys?.id;
        if (contentId) {
          const imageReference = references?.find(
            (ref) => ref.contentful_id === contentId
          );
          if (imageReference) {
            if (imageReference.gatsbyImageData) {
              return (
                <GatsbyImage
                  style={{ margin: "1rem" }}
                  alt={imageReference.title}
                  image={imageReference.gatsbyImageData}
                />
              );
            }
          }
        }
        return null;
      },
    },
    renderText: (text) => <Box as="span">{text}</Box>,
  };

  return (
    <Text as="div" {...props}>
      {documentToReactComponents(content, options)}
    </Text>
  );
};

export default RichText;
