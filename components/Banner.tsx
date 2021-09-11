import React from "react";
import { Stack, Box, Image } from "@chakra-ui/react";
import { Caraousel } from ".";

export const Banner = () => {
  return (
    <Stack
      direction={{
        xl: "row",
        lg: "row",
        md: "row",
        sm: "column",
        base: "column",
      }}
      justify="space-around"
      display={{ xl: "flex", md: "flex", sm: "block", base: "none" }}
    >
      <Box
        w={{
          xl: "40rem",
          lg: "30rem",
          md: "22rem",
          sm: "35rem",
          base: "24rem",
        }}
      >
        <Caraousel />
      </Box>
      <Box
        w={{
          xl: "40rem",
          lg: "30rem",
          md: "22rem",
          sm: "35rem",
          base: "24rem",
        }}
      >
        <Caraousel />
      </Box>
    </Stack>
  );
};
