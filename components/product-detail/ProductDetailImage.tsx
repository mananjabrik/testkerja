import React from "react";
import { Box, Stack, Button, Wrap, WrapItem, Image } from "@chakra-ui/react";
import { ProductDescription, ProductDescriptionProps } from ".";

interface ProductDetailImageProps extends ProductDescriptionProps {}
export const ProductDetailImage: React.FC<ProductDetailImageProps> = (
  props
) => {
  return (
    <Box flex={4} p={{ xl: "10", md: "8", sm: "6", base: "4" }}>
      <Stack direction="row" justifyContent="space-between" spacing="2rem">
        <Image
          flex={1}
          rounded="lg"
          w="100%"
          objectFit="cover"
          src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
          alt="imageproduct"
          h={{ xl: "23rem", md: "20rem", sm: "", base: "" }}
        />

        <ProductDescription
          display={{ xl: "flex", md: "none", sm: "none", base: "none" }}
          description={props.description}
          measurement={props.measurement}
        />
      </Stack>
      <Wrap
        justify="space-between"
        mt={{ xl: "5", md: "5", sm: "3", base: "3" }}
      >
        <WrapItem w="20%" bg="white" rounded="lg" overflow="hidden">
          <Image
            src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
            alt="imageproduct"
          ></Image>
        </WrapItem>
        <WrapItem w="20%" bg="white" rounded="lg" overflow="hidden">
          <Image
            src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
            alt="imageproduct"
          ></Image>
        </WrapItem>
        <WrapItem w="20%" bg="white" rounded="lg" overflow="hidden">
          <Image
            src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
            alt="imageproduct"
          ></Image>
        </WrapItem>
        <WrapItem w="20%" bg="white" rounded="lg" overflow="hidden">
          <Image
            src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
            alt="imageproduct"
          ></Image>
        </WrapItem>
      </Wrap>
    </Box>
  );
};
