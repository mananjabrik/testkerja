import React from "react";
import { Box, Stack, Heading, Button, Icon } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
export const Navbar = () => {
   return (
      <Box p="5" bg="white" roundedBottom="xl">
         <Stack direction="row" justify="space-between" alignItems="center">
            <Box
               display={{
                  xl: "none",
                  lg: "none",
                  md: "none",
                  sm: "block",
                  base: "block",
               }}
               border="1px solid"
               borderColor="gray"
               rounded="md"
               p="2"
               pt="1"
            >
               <Icon as={FaBars} fontSize="xl" />
            </Box>
            <Stack
               direction="row"
               alignItems="center"
               display={{
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                  sm: "none",
                  base: "none",
               }}
            >
               <Icon as={FiShoppingBag} fontSize="2xl" />
               <Heading size="lg" fontWeight="medium">
                  Store
               </Heading>
            </Stack>
            <Box flex={1} textAlign="center">
               <Heading fontSize="xx-large">SHOESMART</Heading>
            </Box>
            <Stack
               direction="row"
               display={{
                  xl: "flex",
                  lg: "flex",
                  md: "flex",
                  sm: "none",
                  base: "none",
               }}
            >
               <Button bg="transparent" _hover={{ bg: "none" }}>
                  Login
               </Button>
               <Button bg="black" color="white" _hover={{ bg: "black" }}>
                  Register
               </Button>
            </Stack>
         </Stack>
      </Box>
   );
};
