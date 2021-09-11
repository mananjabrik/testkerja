import type { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import {
  Banner,
  Caraousel,
  Filter,
  JoinCommunity,
  Navbar,
  ProductsRender,
  Sidebar,
  Footer,
} from "../components";
import { UseProductsQuery } from "../query/query";
const Home: NextPage = () => {
  //@ts-ignore
  const { data, isLoading } = ProductsQuery();
  console.log(data);

  return (
    <Box bg="gray.100" w="100%">
      <Navbar />
      <Filter />
      <Stack direction="row" px="5">
        <Sidebar />
        <Box flex={6}>
          <Banner />
          <ProductsRender />
          <Box w="100rem" mt="5">
            <Caraousel />
          </Box>
          <ProductsRender />
        </Box>
      </Stack>
      <JoinCommunity />
      <Footer />
    </Box>
  );
};

export default Home;
