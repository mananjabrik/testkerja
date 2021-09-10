import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../components";
const Home: NextPage = () => {
   return (
      <Box bg="gray.100" height="100vh">
         <Navbar />
      </Box>
   );
};

export default Home;
