import React from "react";
import { Stack, Box, Heading, Text } from "@chakra-ui/react";
import { Catalog } from ".";
export const Sidebar = () => {
  const gendreCatlog = ["all", "mens", "women", "kids"];
  const category = [
    "all",
    "books",
    "flats",
    "pantoefel",
    "heels",
    "sandals",
    "school shoes",
  ];
  const Information = ["About Us", "FAQ", "Shipping"];

  return (
    <Stack
      spacing="5"
      mt="5"
      flex={{ xl: 1, md: 2, sm: 1, base: 1 }}
      display={{ xl: "flex", md: "none", sm: "none", base: "none" }}
    >
      <Catalog title="Product" subs={gendreCatlog} textTransform="capitalize" />
      <Catalog title="Category" subs={category} textTransform="capitalize" />
      <Catalog title="Information" subs={Information} />
    </Stack>
  );
};
