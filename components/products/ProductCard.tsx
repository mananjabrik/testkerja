import React, { useState } from "react";
import { Box, Image, Text, Icon } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ProductDTO } from "../../type/type";
import Link from "next/link";
interface ProductCardProps extends ProductDTO {
  product_click?: () => void;
  product_enter?: () => void;
}
export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const [favorite, setFavorite] = useState(false);
  const handleCLick = () => {
    setFavorite(!favorite);
  };
  return (
    <Box
      href="/detail"
      rounded="xl"
      // overflow="hidden"
      bg="white"
      p={{ xl: "5", md: "4", sm: "3", base: "3" }}
      onMouseEnter={props.product_enter}
    >
      <Box
        flex={1}
        justifyContent="flex-end"
        display="flex"
        onClick={handleCLick}
      >
        <Icon
          as={favorite ? FaHeart : FaRegHeart}
          position="absolute"
          fontSize="1.5rem"
          color={favorite ? "red.500" : "black"}
        />
      </Box>
      <Box
        w="100%"
        h={{ xl: "13rem", md: "15rem", sm: "10rem", base: "7rem" }}
        overflow="hidden"
        onClick={props.product_click}
      >
        <Image
          src={props.image_url}
          alt={props.name}
          loading="lazy"
          w="100%"
          objectFit="cover"
        />
      </Box>
      <Box
        py={{ xl: "1rem", md: "0.5rem", sm: "10px", base: "8px" }}
        onClick={props.product_click}
      >
        <Text
          textTransform="capitalize"
          fontSize={{ xl: "xl", md: "md", sm: "sm", base: "sm" }}
          noOfLines={1}
        >
          {props.name}
        </Text>
        <Text
          fontSize={{
            xl: "x-large",
            md: "large",
            sm: "medium",
            base: "medium",
          }}
          textTransform="capitalize"
          fontWeight={{
            xl: "bold",
            md: "bold",
            sm: "semibold",
            base: "semibold",
          }}
          noOfLines={1}
        >
          Rp. {props.price}
        </Text>
      </Box>
    </Box>
  );
};
