import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
interface StartRatingProps {
  rating: string;
}
export const StartRating: React.FC<StartRatingProps> = (props) => {
  return (
    <Box justifyContent="center" display="flex">
      <Box>
        <Box
          display="flex"
          overflow="hidden"
          position="absolute"
          w={props.rating}
        >
          <Icon as={FaStar} color="orange.500"></Icon>
          <Icon as={FaStar} color="orange.500"></Icon>
          <Icon as={FaStar} color="orange.500"></Icon>
          <Icon as={FaStar} color="orange.500"></Icon>
          <Icon as={FaStar} color="orange.500"></Icon>
        </Box>
        <Box display="flex" overflow="hidden">
          <Icon as={FaStar} color="gray.500"></Icon>
          <Icon as={FaStar} color="gray.500"></Icon>
          <Icon as={FaStar} color="gray.500"></Icon>
          <Icon as={FaStar} color="gray.500"></Icon>
          <Icon as={FaStar} color="gray.500"></Icon>
        </Box>
      </Box>
    </Box>
  );
};
