import React from "react";
import { Stack, Button, Box, StackProps } from "@chakra-ui/react";

export interface ProductDescriptionProps extends StackProps {
  description: string;
  measurement: string;
}
export const ProductDescription: React.FC<ProductDescriptionProps> = (
  props
) => {
  return (
    <Stack flex={1} {...props}>
      <Stack direction="row" justify={{ xl: "space-between", sm: "start" }}>
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
          __html: props.description + `</br>` + props.measurement,
        }}
      ></Box>
    </Stack>
  );
};
