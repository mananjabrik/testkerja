import React from "react";
import { Box, Input } from "@chakra-ui/react";

export interface ActionSearchProps {
  onTyping: () => void;
}

export const ActionSearch: React.FC<ActionSearchProps> = (props) => {
  return (
    <Box flex={1} justifyContent="end" display="flex" w="full">
      <Input
        size="sm"
        bg="white"
        w={{ xl: "50%", md: "100%", sm: "100%", base: "100%" }}
        rounded="full"
        _focus={{ border: "none" }}
        placeholder="Search Your Favorite Shoes ..."
        border="none"
        onChange={props.onTyping}
      />
    </Box>
  );
};
