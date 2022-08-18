import React from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  useColorMode,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const Product=()=> {
  // Hook to toggle dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="app">
      <Box w="300px" rounded="20px" overflow="hidden" mt={10}>
        <Image
          src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          alt="Card Image"
          boxSize="300px"
        ></Image>
        <Box p={5}>
          <Stack align="center">
            <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
              Best Portfolio Year 2022
            </Badge>
          </Stack>
          <Stack align="center">
            <Text as="h2" fontWeight="normal" my={2}>
              Stock Trading
            </Text>
            <Text fontWeight="light">A platform for people to invest .</Text>
          </Stack>
          <Flex>
            <Spacer />
            <Button variant="solid" colorScheme="green" size="sm">
              Learn More
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default Product;
