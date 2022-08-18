import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Tag,
  TagLabel,
  Avatar,
} from "@chakra-ui/react";
import images from "./asset/bitcoin.jpg";
const LandingLayout = ({ title, subtitle }) => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>

        <Tag size="lg" colorScheme="red" borderRadius="full">
          <Avatar
            src="https://bit.ly/sage-adebayo"
            size="xs"
            name="Segun Adebayo"
            ml={-1}
            mr={2}
          />
          <TagLabel>Hi there, I'm Ayush Kumar </TagLabel>
        </Tag>
        <Text
          fontSize="md"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          While selecting an investment avenue, you have to match your own risk
          profile with the associated risks of the product before investing.
          There are some investments that carry high risk but have the potential
          to generate higher inflation-adjusted returns than other asset class
          in the long term while some investments come with low-risk and
          therefore lower returns.
         
        </Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        {/* <img  src={images} alt="fireSpot"/> */}
        <Image
          src={images}
          size="10%"
          rounded="1rem"
          shadow="2xl"
          style={{
            maxWidth: "686px",
            mmarginTop: "107px",

            marginLeft: "291px",
          }}
        />
      </Box>
    </Flex>
  );
};

export default LandingLayout;
LandingLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

LandingLayout.defaultProps = {
  title: "Welcome to Ayush Stock Portfolio",
  subtitle: "How may I assist you ",
};
