import React from "react";
import { Box, Stack, Heading, Text, BoxProps } from "@chakra-ui/react";

interface CatalogProps extends BoxProps {
   title: string;
   subs: string[];
}
export const Catalog: React.FC<CatalogProps> = (props) => {
   return (
      <Box {...props}>
         <Heading size="md" fontWeight="medium">
            {props.title}
         </Heading>
         <Stack mt="1" fontSize="md">
            {props.subs.map((sub, idx) => {
               return <Text key={idx}>{sub}</Text>;
            })}
         </Stack>
      </Box>
   );
};
