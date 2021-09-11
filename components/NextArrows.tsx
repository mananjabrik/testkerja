import { Box } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
export const NextArrow = (props: any) => {
   const { className, style, onClick } = props;
   return (
      <Box
         as={FaChevronRight}
         className={className}
         style={{
            ...style,
            display: "block",
         }}
         right="5"
         zIndex="1"
         color="black"
         _hover={{ color: "black" }}
         onClick={onClick}
      />
   );
};
