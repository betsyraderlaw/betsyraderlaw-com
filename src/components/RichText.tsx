import React, { FC } from "react";
import { Text, TextProps } from "@chakra-ui/react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS } from "@contentful/rich-text-types";

export type RichTextDocument = Document;

export type RichTextProps = TextProps & {
  content: RichTextDocument;
};

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <Text as="div" mb="2">{children}</Text>,
    [BLOCKS.UL_LIST]: (_, children) => (
      <Text as="ul" ml="8" mt="4">
        {children}
      </Text>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <Text as="ul" ml="8" mt="4">
        {children}
      </Text>
    ),
  },
  renderText: text => <Text as="p">{text}</Text>
};

const RichText: FC<RichTextProps> = ({ content, ...props }) => (
  <Text as="div" {...props}>{documentToReactComponents(content, options)}</Text>
);

export default RichText;
