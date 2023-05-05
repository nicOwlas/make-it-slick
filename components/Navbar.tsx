import {
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Logo } from "./Logo"; // Replace with the correct path to your Logo.tsx file

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("black", "white");

  return (
    <Box
      py={4}
      px={8}
      bg="transparent"
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      width="100%"
    >
      <Flex alignItems="center">
        <Box>
          <Logo fill={logoColor} />
        </Box>
        <Spacer />
        <a
          target="_blank"
          href="https://ol364r9x4kq.typeform.com/to/MnFcFpfA"
          rel="noopener noreferrer"
        >
          <Button
            variant="solid"
            bg={useColorModeValue("#F1D580", "#0987A0")}
            color={useColorModeValue("black", "white")}
            // colorScheme={useColorModeValue("yellow", "teal")}
            fontSize="20px"
            _hover={{ textDecoration: "none" }}
          >
            Get Started
          </Button>
        </a>
        <IconButton
          variant="outline"
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          ml={4}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
