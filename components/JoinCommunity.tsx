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
            <Stack w="30%" textAlign="center" py="10">
               <Heading size="md">
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
