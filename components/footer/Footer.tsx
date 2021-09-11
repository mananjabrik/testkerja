import {
   Box,
   Text,
   Stack,
   Heading,
   UnorderedList,
   ListItem,
   Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
export const Footer = () => {
   return (
      <Box bg="gray.200" px="10rem" mt="5" py="10">
         <Box>
            <Stack direction="row">
               <Stack flex={1} spacing="1.5rem">
                  <Heading>SHOESMART</Heading>
               </Stack>
               <Stack flex={1} spacing="1.5rem">
                  <Heading size="lg" fontWeight="semibold">
                     Category
                  </Heading>
               </Stack>
               <Box flex={1}></Box>
               <Stack direction="row" spacing="1rem" flex={1}>
                  <Icon as={FaTwitter} fontSize="1.5rem"></Icon>
                  <Icon as={FaYoutube} fontSize="1.5rem"></Icon>
                  <Icon as={FaFacebook} fontSize="1.5rem"></Icon>
                  <Icon as={FaPhone} fontSize="1.5rem"></Icon>
               </Stack>
            </Stack>
         </Box>
         <Box>
            <Stack direction="row">
               <Stack flex={1} spacing="1.5rem">
                  <Text>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ratione facere repellat nesciunt eum assumenda architecto
                     cupiditate! Delectus dolore fugiat quia aliquam, voluptatem
                     nostrum ipsum esse facilis debitis commodi soluta deleniti.
                  </Text>
               </Stack>
               <Stack flex={1} spacing="1.5rem">
                  <UnorderedList listStyleType="none" marginInlineStart="none">
                     <ListItem>Lorem</ListItem>
                     <ListItem>Lorem</ListItem>
                     <ListItem>Lorem</ListItem>
                     <ListItem>Lorem</ListItem>
                  </UnorderedList>
               </Stack>
               <Box flex={1}>
                  <UnorderedList listStyleType="none" marginInlineStart="none">
                     <ListItem>Lorem</ListItem>
                     <ListItem>Lorem</ListItem>
                     <ListItem>Lorem</ListItem>
                     <ListItem>Lorem</ListItem>
                  </UnorderedList>
               </Box>
               <Stack direction="row" spacing="1rem" flex={1}></Stack>
            </Stack>
         </Box>
      </Box>
   );
};
