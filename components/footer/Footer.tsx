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
    <Box
      bg="gray.200"
      px={{ xl: "10rem", md: "8rem", sm: "6rem", base: "4rem" }}
      mt="5"
      py={{ xl: "10", md: "8", sm: "6", base: "4" }}
    >
      <Box>
        <Stack
          direction={{ xl: "row", md: "row", sm: "column", base: "column" }}
        >
          <Stack flex={1} spacing="1.5rem">
            <Heading>SHOESMART</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              facere repellat nesciunt eum assumenda architecto cupiditate!
              Delectus dolore fugiat quia aliquam, voluptatem nostrum ipsum esse
              facilis debitis commodi soluta deleniti.
            </Text>
          </Stack>
          <Stack flex={1} spacing="1.5rem">
            <Heading size="lg" fontWeight="semibold">
              Category
            </Heading>
            <UnorderedList listStyleType="none" marginInlineStart="none">
              <ListItem>All</ListItem>
              <ListItem>Book</ListItem>
              <ListItem>Flats</ListItem>
              <ListItem>Pantoefel</ListItem>
            </UnorderedList>
          </Stack>
          <Stack flex={1} spacing="1.5rem">
            <Heading size="lg" fontWeight="semibold">
              Information
            </Heading>
            <UnorderedList listStyleType="none" marginInlineStart="none">
              <ListItem>About Us</ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Shipping</ListItem>
            </UnorderedList>
          </Stack>
          <Stack direction="row" spacing="1rem" flex={1}>
            <Icon as={FaTwitter} fontSize="1.5rem"></Icon>
            <Icon as={FaYoutube} fontSize="1.5rem"></Icon>
            <Icon as={FaFacebook} fontSize="1.5rem"></Icon>
            <Icon as={FaPhone} fontSize="1.5rem"></Icon>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
