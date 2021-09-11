import React from "react";
import { Stack, Box, Icon } from "@chakra-ui/react";
import { FaGreaterThan } from "react-icons/fa";
export const ActionButton = () => {
  return (
    <Box flex={1} w="full">
      <Stack
        direction="row"
        w="full"
        overflow={{ xl: "hidden", md: "hidden", sm: "scroll", base: "scroll" }}
        pb="3"
      >
        <Box
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          bg="black"
          color="white"
          alignItems="center"
          display="flex"
        >
          ALL BRANDS
        </Box>
        <Box
          bg="white"
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          color="gray.500"
          alignItems="center"
          display="flex"
        >
          Avali
        </Box>
        <Box
          bg="white"
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          color="gray.500"
          alignItems="center"
          display="flex"
        >
          Avali
        </Box>
        <Box
          bg="white"
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          color="gray.500"
          alignItems="center"
          display="flex"
        >
          Avali
        </Box>
        <Box
          bg="white"
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          color="gray.500"
          alignItems="center"
          display="flex"
        >
          Avali
        </Box>
        <Box
          bg="white"
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          color="gray.500"
          alignItems="center"
          display="flex"
        >
          Avali
        </Box>

        <Box p="1" px="3" fontWeight="semibold">
          More Brands <Icon as={FaGreaterThan} fontSize="xx-small" />
        </Box>
      </Stack>
    </Box>
  );
};
