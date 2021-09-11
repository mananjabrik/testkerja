import React from "react";
import { Box, Heading, Input, Stack, Button } from "@chakra-ui/react";
export const JoinCommunity = () => {
  return (
    <Box px="5" mt="5">
      <Box
        bg="white"
        justifyContent="center"
        display="flex"
        rounded="lg"
        overflow="hidden"
        maxW="100%"
      >
        <Stack
          w={{ xl: "30%", md: "40%", sm: "90%", base: "90%" }}
          textAlign="center"
          py={{ xl: "10", md: "8", sm: "5", base: "5" }}
        >
          <Heading
            fontSize={{ xl: "xl", md: "xl", sm: "md", base: "sm" }}
            fontWeight={{
              xl: "black",
              sm: "bold",
              md: "semibold",
              base: "semibold",
            }}
          >
            Join Our Community and get 15% discount coupon
          </Heading>
          <Stack direction="row">
            <Input></Input>
            <Button bg="black" color="white">
              I am Ready!
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
