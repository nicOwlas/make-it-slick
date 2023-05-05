// pages/index.tsx

import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack minHeight="100vh" justifyContent="center" alignItems="center">
      <Box textAlign="center">
        <Stack spacing={6}>
          <Heading as="h1" size="2xl">
            We Provide You With<br></br>
            The Right Tools For The Right Job
          </Heading>
          <Text fontSize="lg=" fontWeight={"medium"}>
            Modern tools like Notion, Airtable, chatGPT, Zapier etc. allow to
            boost your team productivity and focus your time where it matters
            most.<br></br>
            We help small to medium size teams identify the tools they need and
            we assist in deploying them into your organization.
          </Text>
        </Stack>
      </Box>
      <a target="_blank" href="https://google.com/" rel="noopener noreferrer">
        <Button
          mt={12}
          bg={useColorModeValue("#F1D580", "#0987A0")}
          color={useColorModeValue("black", "white")}
          onClick={toggleColorMode}
        >
          Get Started
        </Button>
      </a>
    </VStack>
  );
}
