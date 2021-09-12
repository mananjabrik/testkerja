import React from "react";
import { Box, Text, Stack, Avatar, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { StartRating } from "..";
export const ProductComment = () => {
  return (
    <Box
      bg="white"
      flex={5}
      rounded="lg"
      p={{ xl: "10", md: "8", sm: "6", base: "4" }}
    >
      <Text>What They Think about this product</Text>
      <Stack
        direction="row"
        alignItems={{ xl: "start", sm: "center", base: "center" }}
        mt="5"
      >
        <Stack flex={1} py="3">
          <Avatar
            src=""
            alt="g ada"
            w={{ xl: "10rem", md: "8rem", sm: "5rem", base: "5rem" }}
            h={{ xl: "10rem", md: "8rem", sm: "5rem", base: "5rem" }}
            mx="auto"
            // name="User Profile"
          ></Avatar>
          <StartRating rating="4.5rem" />
        </Stack>
        <Box
          p={{ md: "5", sm: "3", base: "2" }}
          flex={2}
          bg="gray.100"
          rounded="lg"
        >
          <Text noOfLines={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ipsa rerum minima culpa beatae magni dolorem eius architecto et
            molestiae, provident laborum cum quae excepturi accusantium ad
            repellendus obcaecati eaque?
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
