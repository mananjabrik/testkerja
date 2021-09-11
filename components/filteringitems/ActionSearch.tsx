import React from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
export const ActionSearch = () => {
  return (
    <Box flex={1} justifyContent="end" display="flex" w="full">
      <InputGroup
        size="sm"
        bg="white"
        w={{ xl: "50%", md: "100%", sm: "100%", base: "100%" }}
        rounded="full"
        overflow="hidden"
      >
        <Input
          w="full"
          _focus={{ border: "none" }}
          placeholder="Search Your Favorite Shoes ..."
          border="none"
        />
        <InputRightAddon
          bg="none"
          border="none"
          borderLeft="2px solid"
          borderLeftColor="gray.100"
          w="2.5rem"
          color="gray.300"
        >
          <Icon as={FaSearch} />
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};
