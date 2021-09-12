import React from "react";
import { Stack, Button, Box } from "@chakra-ui/react";

export interface ProductDescriptionProps {
  description: string;
}
export const ProductDescription: React.FC<ProductDescriptionProps> = (
  props
) => {
  return (
    <Stack
      flex={1}
      display={{ xl: "flex", md: "none", sm: "none", base: "none" }}
    >
      <Stack direction="row" justify="space-between">
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
  );
};
