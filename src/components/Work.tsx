import React, { FC } from "react";
import {
  Heading,
  BoxProps,
  Text,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import format from "date-fns/format";

export type WorkProps = BoxProps & {
  title: string;
  location: string;
  url?: string;
  date?: string;
};

const Work: FC<WorkProps> = ({ title, location, url, date, ...props }) => {
  const heading = (
    <Heading fontWeight="semibold" color="secondary" fontSize={{ base: 'xl', md: '2xl' }}>
      "{title}"
    </Heading>
  );
  return (
    <VStack alignItems="left" {...props}>
      {url ? <Link href={url} target="_blank">{heading}</Link> : heading}
      <Text>
        <Box as="span" fontWeight="semibold" color="gray.700">
          {location}
        </Box>
        {date && (
          <Box as="span" fontWeight="medium" color="gray.500" ml="2">
            {format(new Date(date), "LLL y")}
          </Box>
        )}
      </Text>
    </VStack>
  );
};

export default Work;
