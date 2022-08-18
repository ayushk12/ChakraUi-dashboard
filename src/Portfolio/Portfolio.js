// Chakra imports

import { Box, Button, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

//Assets
import Background from "../../src/asset/background.png";

// Component Import
import Product from "./Product";
import Profile from "./Profile";
import Teams from "./Team";
const Portfolio=()=> {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box h="80vh" w="100%">
          <Heading style={{color:' #003399',marginLeft:'45px',marginTop:'16px'}}>Some of Best Stock Portfolio 2022 Year</Heading>
      <p style={{color:' #003399',marginLeft:'45px',marginTop:'10px'}}>
        Portfolio management is the selection, prioritisation and control of an
        organisation's programmes and projects, in line with its strategic
        objectives and capacity to deliver. The goal is to balance the
        implementation of change initiatives and the maintenance of
        business-as-usual, while optimising return on investment.
      </p>
    
      <Flex
        flexDirection="column"
        maxW="90%"
        px="10px"
        my="30px"
        mx="auto"
     
        bgSize="cover"
        py="50px"
        borderRadius="20px"
      >
        <Flex
          direction={{ base: "column", xl: "row" }}
          mx="auto"
          rowGap="20px"
          columnGap="20px"
        >
          <Profile />
          <Teams />
          <Product />
          <Profile />
        </Flex>
      </Flex>
      
    </Box>
  );
}

export default Portfolio;
