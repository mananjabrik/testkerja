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
import { useProductQuery } from "../query/query";

const Home: NextPage = () => {
  const { data, isLoading } = useProductQuery();

  return (
    <Box bg="gray.100" overflow="hidden">
      <Navbar />
      <Filter />
      <Stack direction="row" px="5">
        <Sidebar />
        <Box flex={{ xl: 6, md: 1, sm: 1, base: 1 }}>
          <Box mt="5">
            <Banner />
          </Box>
          <ProductsRender dataRenders={data ?? []} />
          <Box mt="5" w="20rem">
            <Caraousel />
          </Box>
          <ProductsRender dataRenders={data ?? []} />
        </Box>
      </Stack>
      <JoinCommunity />
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;
