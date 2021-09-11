import React from "react";
import { Box } from "@chakra-ui/layout";
import { useRecoilState } from "recoil";
import { producState } from "../state/product";
import { ProductDTO } from "../type/type";

const Detail = () => {
  const [product] = useRecoilState<ProductDTO>(producState);
  console.log(product);

  return <Box>{product.name}</Box>;
};
export default Detail;
