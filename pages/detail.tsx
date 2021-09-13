import React from "react";
import { Box, Stack, Button, Wrap, WrapItem } from "@chakra-ui/react";

import { useRecoilState } from "recoil";
import { producState } from "../state/product";
import { ProductDTO } from "../type/type";
import Product from "../aset/data/products.json";

import {
  Footer,
  Navbar,
  ProductCard,
  ProductComment,
  ProductDetail,
  ProductRating,
  ProductsRender,
} from "../components";

const Detail = () => {
  //@ts-ignore
  const [product] = useRecoilState<ProductDTO>(producState);
  const productLimit = Product.slice(0, 5);

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
        <Box mt="5" bg="white" rounded="lg">
          <ProductsRender
            //@ts-ignore
            dataRenders={productLimit}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
export default Detail;
