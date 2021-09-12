import React, { useState } from "react";
import { Stack, Box, Icon } from "@chakra-ui/react";
import { FaGreaterThan } from "react-icons/fa";
import { ProductDTO } from "../../type/type";
interface ActionButtonProps {
  brandData: ProductDTO[];
}
export const ActionButton: React.FC<ActionButtonProps> = (props) => {
  const [brandFilter, setBrandFilter] = useState("");

  console.log(brandFilter);

  return (
    <Box flex={1} w="full">
      <Stack
        direction="row"
        w="full"
        overflow={{ xl: "scroll", md: "hidden", sm: "scroll", base: "scroll" }}
        overflowY="visible"
        pb="3"
      >
        <Box
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          bg="black"
          color="white"
          alignItems="center"
          display="flex"
        >
          ALL BRANDS
        </Box>
        {props?.brandData?.map((item, idx) => {
          return (
            <Box
              key={idx}
              p="1"
              px="3"
              rounded="md"
              fontWeight="semibold"
              bg="white"
              alignItems="center"
              display="flex"
              onClick={() => setBrandFilter(item.brand_name ?? "")}
            >
              {item.brand_name}
            </Box>
          );
        })}
        <Box p="1" px="3" fontWeight="semibold">
          More Brands <Icon as={FaGreaterThan} fontSize="xx-small" />
        </Box>
      </Stack>
    </Box>
  );
};
