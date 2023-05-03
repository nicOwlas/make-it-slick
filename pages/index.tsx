// pages/index.tsx

import { Box, Button, Heading, VStack, useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack minHeight="100vh" justifyContent="center" alignItems="center">
      <Box textAlign="center">
        <Heading as="h1" size="2xl">
          Welcome to My Landing Page
        </Heading>
        <Heading as="h2" size="lg" mt={6}>
          This is a Next.js, TypeScript, and Chakra UI project.
        </Heading>
      </Box>
      <Button mt={12} colorScheme="blue" onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </VStack>
  );
}
