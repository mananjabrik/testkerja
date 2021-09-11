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
export const ProductDetail = () => {
  return (
    <Stack bg="gray.200" rounded="xl" direction="row" overflow="hidden">
      <Box flex={4} p="5">
        <Stack
          p="5"
          direction="row"
          justifyContent="space-between"
          spacing="2rem"
        >
          <Box flex={1} overflow="hidden" h="23rem" rounded="lg">
            <Image
              w="100%"
              objectFit="cover"
              src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
              alt="imageproduct"
            ></Image>
          </Box>
          <Stack flex={1}>
            <Stack direction="row" justify="space-between">
              <Button>Description</Button>
              <Button>Details</Button>
              <Button>Instruction</Button>
            </Stack>
            <Box bg="white" rounded="lg" p="3" py="5" h="20rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              repellendus dicta necessitatibus veritatis consequatur repellat
              doloribus debitis at, magnam excepturi omnis nemo dolorem,
              possimus impedit officiis animi quidem! Maiores, saepe.
            </Box>
          </Stack>
        </Stack>
        <Wrap justify="space-between" px="5">
          <WrapItem w="23%" h="15rem" bg="white" rounded="lg" overflow="hidden">
            <Image
              src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
              alt="imageproduct"
            ></Image>
          </WrapItem>
          <WrapItem w="23%" h="15rem" bg="white" rounded="lg" overflow="hidden">
            <Image
              src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
              alt="imageproduct"
            ></Image>
          </WrapItem>
          <WrapItem w="23%" h="15rem" bg="white" rounded="lg" overflow="hidden">
            <Image
              src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
              alt="imageproduct"
            ></Image>
          </WrapItem>
          <WrapItem w="23%" h="15rem" bg="white" rounded="lg" overflow="hidden">
            <Image
              src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
              alt="imageproduct"
            ></Image>
          </WrapItem>
        </Wrap>
      </Box>
      <Stack
        flex={1}
        p="5"
        bg="white"
        roundedLeft="xl"
        shadow="dark-lg"
        justifyContent="space-between"
      >
        <Heading size="md">Title Product</Heading>
        <Stack>
          <Heading size="sm">Size</Heading>
          <Wrap>
            <WrapItem>
              <Button>12</Button>
            </WrapItem>
            <WrapItem>
              <Button>12</Button>
            </WrapItem>
            <WrapItem>
              <Button>12</Button>
            </WrapItem>
            <WrapItem>
              <Button>12</Button>
            </WrapItem>
            <WrapItem>
              <Button>12</Button>
            </WrapItem>
          </Wrap>
        </Stack>
        <Stack>
          <Heading size="sm">Color</Heading>
          <Wrap>
            <WrapItem>
              <Button>Blue</Button>
            </WrapItem>
            <WrapItem>
              <Button>Black</Button>
            </WrapItem>
          </Wrap>
        </Stack>
        <Stack direction="row" alignItems="center" justify="space-between">
          <Heading size="sm">Color</Heading>
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
          <Heading size="lg">RP. 369.000</Heading>
        </Stack>
        <Stack direction="row" alignItems="center" spacing="1rem">
          <Button size="sm">Add to cart</Button>
          <Button size="lg">Buy Now</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
