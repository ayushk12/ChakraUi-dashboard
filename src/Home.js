import React  from "react";
import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset
  } from '@chakra-ui/react';
  
  import ThemeToggler from './ThemeToggler';
  import LoginForm from './LoginForm'
const Home=()=> {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <LoginForm />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default Home;
