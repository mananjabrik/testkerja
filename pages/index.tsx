import type { NextPage } from "next";
import { useEffect, useState } from "react";
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
import Image1 from "../aset/Group45.png";
import Image2 from "../aset/Group46.png";
import Image3 from "../aset/BannernewComing.png";

import Product from "../aset/data/products.json";
import { ProductDTO } from "../type/type";
import { useRecoilState } from "recoil";
import { brandState } from "../state/brandState";

const Home: NextPage = () => {
  const [filter, setFilter] = useState("");
  const [brand] = useRecoilState(brandState);
  const dataImage = [Image1, Image2, Image1, Image2];
  const newUpComing = [Image3, Image3, Image3];

  const filterItems = (query: string) => {
    return Product?.filter(
      (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  const onTyping = (e: any) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (brand) {
      setFilter(brand);
    } else {
      setFilter("");
    }
  }, [brand]);

  return (
    <Box bg="gray.100" overflow="hidden">
      <Navbar />
      <Filter
        //@ts-ignore
        brandData={Product}
        //@ts-ignore
        onTyping={onTyping}
      />
      <Stack direction="row" px="5">
        <Sidebar />
        <Box flex={{ xl: 6, md: 1, sm: 1, base: 1 }}>
          <Box mt="5">
            <Banner banner1={dataImage} banner2={dataImage} />
          </Box>
          <ProductsRender
            //@ts-ignore
            dataRenders={filterItems(filter)}
          />
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
          {/* <ProductsRender dataRenders={data ?? []} /> */}
        </Box>
      </Stack>
      <JoinCommunity />
      <Footer />
    </Box>
  );
};

export default Home;
