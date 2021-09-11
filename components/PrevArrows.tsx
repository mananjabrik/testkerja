import { Box } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
export const PrevArrow = (props: any) => {
   const { className, style, onClick } = props;
   return (
      <Box
         as={FaChevronLeft}
         className={className}
         style={{
            ...style,
            display: "block",
         }}
         left="5"
         zIndex="1"
         color="black"
         _hover={{ color: "black" }}
         onClick={onClick}
      />
   );
};
