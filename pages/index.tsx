// pages/index.tsx

import {
  Box,
  Heading,
  Stack,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

import GetStartedButton from "../components/GetStartedButton";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack minHeight="100vh" justifyContent="center" alignItems="center">
      <Box textAlign="center" p={4}>
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
      <GetStartedButton url="https://example.com" />
    </VStack>
  );
}
