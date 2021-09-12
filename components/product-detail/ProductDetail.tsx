import React from "react";
import {
  Stack,
  Box,
  Wrap,
  WrapItem,
  Image,
  Button,
  Icon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ProductDTO } from "../../type/type";
import { ProductDetailImage } from ".";

interface ProductDetailProps extends ProductDTO {}

export const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  return (
    <Box>
      <Stack
        bg="gray.200"
        rounded="xl"
        direction={{ xl: "row", md: "row", sm: "column", base: "column" }}
        overflow="hidden"
      >
        <ProductDetailImage description={props.description ?? ""} />
        <Stack
          flex={1}
          p="5"
          bg="white"
          rounded="xl"
          shadow="xl"
          justifyContent="space-between"
        >
          <Heading size="md">{props.name}</Heading>
          {props.variants?.map((item, idx) => {
            return (
              <Stack key={idx}>
                <Heading size="sm">Size</Heading>
                <Wrap>
                  {item.sizes?.map((size, idx) => {
                    return (
                      <WrapItem key={idx}>
                        <Button>{size.size}</Button>
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </Stack>
            );
          })}
          <Stack>
            <Heading size="sm">Color</Heading>
            <Wrap>
              {props.colors?.map((color) => {
                return (
                  <WrapItem key={color.id}>
                    <Button bg={color.rgb} color="white">
                      {color.name}
                    </Button>
                  </WrapItem>
                );
              })}
            </Wrap>
          </Stack>
          <Stack direction="row" alignItems="center" justify="space-between">
            <Heading size="sm">Quantity</Heading>
            <Stack
              direction="row"
              alignItems="center"
              spacing="0"
              bg="gray.300"
              rounded="full"
            >
              <Button rounded="full" border="1px" p="1">
                <Icon as={FaPlus} fontSize="xs"></Icon>
              </Button>
              <Text w="3rem" textAlign="center">
                1
              </Text>
              <Button rounded="full" border="1px" p="1">
                <Icon as={FaMinus} fontSize="xs"></Icon>
              </Button>
            </Stack>
          </Stack>
          <Stack>
            <Heading size="sm">Price</Heading>
            <Heading size="lg">RP. {props.price}</Heading>
          </Stack>
          <Stack direction="row" alignItems="center" spacing="1rem">
            <Button>Add to cart</Button>
            <Button>Buy Now</Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        mt="5"
        flex={1}
        display={{ xl: "none", md: "flex", sm: "flex", base: "flex" }}
        bg="white"
        p="5"
        rounded="lg"
      >
        <Stack direction="row">
          <Button>Description</Button>
          <Button>Details</Button>
          <Button>Instruction</Button>
        </Stack>
        <Box
          bg="white"
          rounded="lg"
          p="3"
          py="5"
          h="20rem"
          overflowY="scroll"
          dangerouslySetInnerHTML={{
            __html: props.description ?? "tahu",
          }}
        ></Box>
      </Stack>
    </Box>
  );
};
