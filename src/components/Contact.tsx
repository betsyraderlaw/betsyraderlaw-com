import React, { FC } from "react";
import { Flex, FlexProps, Heading, VStack, Text } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";

export type ContactProps = FlexProps;

const Contact: FC<ContactProps> = (props) => {
  const data = useStaticQuery(graphql`
    query Contact {
      contact: contentfulContact {
        email
        phone
        businessName
        address
      }
    }
  `);

  return (
    <Flex
      alignItems="center"
      direction="column"
      py="4rem"
      px="1rem"
      bg="background"
      {...props}
    >
      <Heading fontWeight="semibold">Contact</Heading>
      <VStack mt="2rem" spacing="1rem">
        <Text
          as="a"
          color="primary"
          _hover={{ textDecoration: "underline" }}
          href={`mailto:${data.contact.email}`}
        >
          {data.contact.email}
        </Text>
        <Text
          as="a"
          color="primary"
          _hover={{ textDecoration: "underline" }}
          href={`tel:${data.contact.phone}`}
        >
          {data.contact.phone}
        </Text>
        <Flex alignItems="center" textAlign="center" direction="column">
          <Text>{data.contact.businessName}</Text>
          <Text>{data.contact.address}</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Contact;
