import React, { useState } from "react";
import { Box, Image, Text, Icon } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
interface ProductCardProps {
   imageurl: string;
   title: string;
   price: string;
}
export const ProductCard: React.FC<ProductCardProps> = (props) => {
   const [favorite, setFavorite] = useState(false);
   const handleCLick = () => {
      setFavorite(!favorite);
   };
   return (
      <Box rounded="lg" overflow="hidden" bg="white" p="5">
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
         <Box>
            <Image src={props.imageurl} alt={props.title} loading="lazy" />
         </Box>
         <Box>
            <Text textTransform="capitalize">{props.title}</Text>
            <Text
               fontSize="xx-large"
               textTransform="capitalize"
               fontWeight="bold"
            >
               Rp. {props.price}
            </Text>
         </Box>
      </Box>
   );
};
