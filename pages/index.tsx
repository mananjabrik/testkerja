import type { NextPage } from "next";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { Caraousel, Filter, Navbar, Sidebar } from "../components";
import Image from "next/image";
import gambar from "../aset/Group45.png";
const Home: NextPage = () => {
   return (
      <Box bg="gray.100" w="100%">
         <Navbar />
         <Filter />
         <Stack direction="row" px="5">
            <Sidebar />
            <Box flex={6}>
               {/* <Caraousel /> */}
               <Stack direction="row" justify="space-between">
                  <Box w="50rem">
                     <Caraousel />
                  </Box>
                  <Box w="50rem">
                     <Caraousel />
                  </Box>
               </Stack>
            </Box>
         </Stack>
      </Box>
   );
};

export default Home;
