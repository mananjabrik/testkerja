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
    <Box bg="gray.100" w="100%">
      <Navbar />
      <Filter />
      <Stack direction="row" px="5">
        <Box
          flex={{ xl: 1, md: 2, sm: 1, base: 1 }}
          display={{ xl: "flex", md: "none", sm: "none", base: "none" }}
        >
          <Sidebar />
        </Box>
        <Box flex={{ xl: 6, md: 1, sm: 1, base: 1 }}>
          {/* <Banner /> */}
          <ProductsRender dataRenders={data ?? []} />
          {/* <Box w="100rem" mt="5">
            <Caraousel />
          </Box> */}
          <ProductsRender dataRenders={data ?? []} />
        </Box>
      </Stack>
      <JoinCommunity />
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;
