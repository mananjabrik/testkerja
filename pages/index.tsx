import type { NextPage } from "next";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { Filter, Navbar, Sidebar } from "../components";
const Home: NextPage = () => {
   return (
      <Box bg="gray.100" height="100vh">
         <Navbar />
         <Filter />
         <Stack direction="row" px="5">
            <Sidebar />
            <Box flex={6}>
               <Stack direction="row">1</Stack>
            </Box>
         </Stack>
      </Box>
   );
};

export default Home;
