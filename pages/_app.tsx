// pages/_app.tsx

import { ColorModeScript } from "@chakra-ui/color-mode";
import { Box, ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import theme from "../theme";

interface AppBackgroundProps {
  children: ReactNode;
}

const AppBackground: React.FC<AppBackgroundProps> = ({ children }) => {
  const bgLightMode = "/tropicana.jpg";
  const bgDarkMode = "/northernLights.jpg";
  const background = useColorModeValue(bgLightMode, bgDarkMode);

  return (
    <Box
      minHeight="100vh"
      width="100%"
      background={`url(${background})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      {children}
    </Box>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AppBackground>
        <Navbar />
        <Component {...pageProps} />
      </AppBackground>
    </ChakraProvider>
  );
}

export default MyApp;
