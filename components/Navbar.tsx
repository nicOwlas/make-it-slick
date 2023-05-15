import {
  Box,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import GetStartedButton from "./GetStartedButton";
import { Logo } from "./Logo";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("black", "white");

  return (
    <Box
      py={4}
      px={8}
      as="nav"
      bg="transparent"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      width="100%"
      style={{ backgroundColor: "transparent" }}
    >
      <Flex alignItems="center">
        <Box>
          <NextLink href="/" passHref>
            <Logo fill={logoColor} style={{ cursor: "pointer" }} />
          </NextLink>
        </Box>
        <Spacer />
        <GetStartedButton isNavbar={true} />
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
