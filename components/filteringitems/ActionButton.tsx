import React from "react";
import { Stack, Box, Icon, Button } from "@chakra-ui/react";
import { FaGreaterThan } from "react-icons/fa";
import { ProductDTO } from "../../type/type";
import { useRecoilState } from "recoil";
import { brandState } from "../../state/brandState";
interface ActionButtonProps {
  brandData: ProductDTO;
}
export const ActionButton: React.FC<ActionButtonProps> = (props) => {
  const [brand, setBrand] = useRecoilState(brandState);
  return (
    <Box flex={1} w="full">
      <Stack
        direction={{ xl: "row", sm: "column", base: "column" }}
        w="full"
        pb="3"
      >
        <Button
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          bg="black"
          color="white"
          alignItems="center"
          display="flex"
          cursor="pointer"
          onClick={() => setBrand("")}
        >
          ALL BRANDS
        </Button>

        <Button
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          bg="white"
          alignItems="center"
          display="flex"
          onClick={() => setBrand("4U")}
        >
          4U Footwear
        </Button>
        <Button
          p="1"
          px="3"
          rounded="md"
          fontWeight="semibold"
          bg="white"
          alignItems="center"
          display="flex"
          onClick={() => setBrand("Alseno Kids")}
        >
          Alseno Kids
        </Button>
        <Box p="1" px="3" fontWeight="semibold">
          More Brands <Icon as={FaGreaterThan} fontSize="xx-small" />
        </Box>
      </Stack>
    </Box>
  );
};
