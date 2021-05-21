import React, { FC } from "react";
import { Heading, BoxProps, Text, VStack, HStack } from "@chakra-ui/react";
import format from "date-fns/format";

export type WorkProps = BoxProps & {
  title: string;
  location: string;
  date?: string;
};

const Work: FC<WorkProps> = ({ title, location, date, ...props }) => {
  return (
    <VStack alignItems="left" {...props}>
      <Heading fontWeight="semibold" color="secondary" fontSize="2xl">
        "{title}"
      </Heading>
      <HStack>
        <Text fontWeight="semibold" color="gray.700">
          {location}
        </Text>
        {date && (
          <Text fontWeight="medium" color="gray.500">
            {format(new Date(date), "LLL y")}
          </Text>
        )}
      </HStack>
    </VStack>
  );
};

export default Work;
