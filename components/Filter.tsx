import React from "react";
import { Stack } from "@chakra-ui/react";
import { ActionButton, ActionSearch } from ".";
export const Filter = () => {
   return (
      <Stack
         direction={{
            xl: "row",
            lg: "column-reverse",
            md: "column-reverse",
            base: "column-reverse",
         }}
         p="5"
         justify={{ xl: "space-between", lg: "normal" }}
         alignItems="center"
         spacing="5"
      >
         <ActionButton />
         <ActionSearch />
      </Stack>
   );
};
