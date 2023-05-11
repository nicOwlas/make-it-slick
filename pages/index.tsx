// pages/index.tsx

import {
  Box,
  Heading,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

import GetStartedButton from "../components/GetStartedButton";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const marginTop = useBreakpointValue({ base: "4rem", md: "0" });

  return (
    <VStack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      py={marginTop}
    >
      <Box textAlign="center" p={4}>
        <Stack spacing={6}>
          <Heading as="h1" size="2xl" fontWeight={"semibold"}>
            Automate Your Business Processes
          </Heading>
          <Text fontSize="lg=" fontWeight={"medium"}>
            We empower businesses to boost productivity by automating repetitive
            tasks and processes using cutting-edge SaaS tools.
          </Text>
        </Stack>
      </Box>
      <GetStartedButton />
    </VStack>
  );
}
