import React from "react";
import { Stack } from "@chakra-ui/react";
import { ActionButton, ActionSearch, ActionSearchProps } from "..";
import { ProductDTO } from "../../type/type";
interface FilterProps extends ActionSearchProps {
  brandData: ProductDTO[];
}
export const Filter: React.FC<FilterProps> = (props) => {
  return (
    <Stack
      direction={{
        xl: "row",
        lg: "column-reverse",
        md: "column-reverse",
        base: "column-reverse",
      }}
      px="5"
      mt="5"
      justify={{ xl: "space-between", lg: "normal" }}
      alignItems="center"
      spacing="5"
    >
      <ActionButton brandData={props.brandData} />
      <ActionSearch onTyping={props.onTyping} />
    </Stack>
  );
};
