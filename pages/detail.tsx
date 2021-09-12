import React from "react";
import {
  Box,
  Stack,
  Heading,
  Container,
  Button,
  Wrap,
  WrapItem,
  Icon,
  Text,
  Image,
} from "@chakra-ui/react";

import { useRecoilState } from "recoil";
import { producState } from "../state/product";
import { ProductDTO } from "../type/type";

import { Footer, Navbar, ProductCard, ProductDetail } from "../components";
import { FaMinus, FaPlus } from "react-icons/fa";

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
        />
        <Stack direction="row" mt="5" spacing="2rem">
          <Stack
            bg="white"
            flex={1}
            h="20rem"
            rounded="lg"
            textAlign="center"
            justify="space-between"
            p="10"
          >
            <Heading size="4xl">5.0</Heading>
            <Text>Stars</Text>
            <Text>Sangat Baik</Text>
          </Stack>
          <Box bg="white" flex={5} rounded="lg" p="10">
            <Text>What They Think about this product</Text>
            <Stack direction="row">
              <Box flex={1} p="5">
                <Image src="" alt="g ada"></Image>
                <Text>Stars</Text>
              </Box>
              <Box p="5" flex={4}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ipsa rerum minima culpa beatae magni dolorem eius
                  architecto et molestiae, provident laborum cum quae excepturi
                  accusantium ad repellendus obcaecati eaque?
                </Text>
              </Box>
            </Stack>
          </Box>
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
