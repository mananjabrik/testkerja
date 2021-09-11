import React from "react";
import { Stack, Box, Image } from "@chakra-ui/react";
import { Caraousel } from ".";

export const Banner = () => {
   return (
      <Stack direction="row" justify="space-between">
         <Box w="50rem">
            <Caraousel />
         </Box>
         <Box w="50rem">
            <Caraousel />
         </Box>
      </Stack>
   );
};
