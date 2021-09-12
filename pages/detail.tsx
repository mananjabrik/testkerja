import React from "react";
import { Box, Stack, Button, Wrap, WrapItem } from "@chakra-ui/react";

import { useRecoilState } from "recoil";
import { producState } from "../state/product";
import { ProductDTO } from "../type/type";

import {
  Footer,
  Navbar,
  ProductCard,
  ProductComment,
  ProductDetail,
  ProductRating,
} from "../components";

const Detail = () => {
  //@ts-ignore
  const [product] = useRecoilState<ProductDTO>(producState);
  console.log(product);

  return (
    <Box bg="gray.100">
      <Navbar />
      <Box
        py={{ xl: "10", md: "8", sm: "2", base: "2" }}
        px={{ xl: "8", md: "8", sm: "2", base: "2" }}
      >
        <ProductDetail
          name={product.name}
          price={product.price}
          colors={product.colors}
          variants={product.variants}
          description={product.description}
          measurements={product.measurements}
        />
        <Stack
          direction={{ xl: "row", md: "row", sm: "column", base: "column" }}
          mt="5"
          spacing="2rem"
        >
          <ProductRating />
          <ProductComment />
        </Stack>
        <Box flex={1} display="flex" justifyContent="center" mt="5">
          <Button bg="black" color="white">
            See More
          </Button>
        </Box>
        <Box mt="5">
          <Wrap bg="white" justify="space-between" rounded="lg">
            <WrapItem w={{ xl: "19%", md: "32%", sm: "47%", base: "47%" }}>
              <ProductCard
                image_url="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
                name="spatu"
                price="200.000"
              />
            </WrapItem>
            <WrapItem w={{ xl: "19%", md: "32%", sm: "47%", base: "47%" }}>
              <ProductCard
                image_url="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
                name="spatu"
                price="200.000"
              />
            </WrapItem>
            <WrapItem w={{ xl: "19%", md: "32%", sm: "47%", base: "47%" }}>
              <ProductCard
                image_url="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
                name="spatu"
                price="200.000"
              />
            </WrapItem>
            <WrapItem w={{ xl: "19%", md: "32%", sm: "47%", base: "47%" }}>
              <ProductCard
                image_url="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
                name="spatu"
                price="200.000"
              />
            </WrapItem>
            <WrapItem w={{ xl: "19%", md: "32%", sm: "47%", base: "47%" }}>
              <ProductCard
                image_url="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
                name="spatu"
                price="200.000"
              />
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default Detail;
