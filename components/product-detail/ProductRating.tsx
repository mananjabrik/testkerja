import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { StartRating } from "..";
export const ProductRating = () => {
  return (
    <Stack
      bg="white"
      flex={1}
      h="20rem"
      rounded="lg"
      textAlign="center"
      justify="space-between"
      p="10"
    >
      <Heading size="4xl">5.0</Heading>
      <StartRating rating="4.5rem" />
      <Text>Sangat Baik</Text>
    </Stack>
  );
};
