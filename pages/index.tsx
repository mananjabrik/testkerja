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
import Image1 from "../aset/Group45.png";
import Image2 from "../aset/Group46.png";
import Image3 from "../aset/BannernewComing.png";

const Home: NextPage = () => {
  const { data, isLoading } = useProductQuery();
  const dataImage = [Image1, Image2, Image1, Image2];
  const newUpComing = [Image3, Image3, Image3];
  return (
    <Box bg="gray.100" overflow="hidden">
      <Navbar />
      <Filter />
      <Stack direction="row" px="5">
        <Sidebar />
        <Box flex={{ xl: 6, md: 1, sm: 1, base: 1 }}>
          <Box mt="5">
            <Banner banner1={dataImage} banner2={dataImage} />
          </Box>
          <ProductsRender dataRenders={data ?? []} />
          <Box
            mt="5"
            mx="auto"
            w={{
              xl: "80rem",
              lg: "60rem",
              md: "45rem",
              sm: "30rem",
              base: "16.5rem",
            }}
          >
            <Caraousel urls={newUpComing} />
          </Box>
          <ProductsRender dataRenders={data ?? []} />
        </Box>
      </Stack>
      <JoinCommunity />
      <Footer />
    </Box>
  );
};

export default Home;
