import React from "react";
import { useColorMode, Box, IconButton, Button } from "@chakra-ui/react";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header style={{ position: "relative" }}>
      <Button
        onClick={toggleColorMode}
        mr="3"
        mt="4"
        style={{ position: "absolute", right: 0, bottom: 0 }}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
};
export default ThemeToggler;
