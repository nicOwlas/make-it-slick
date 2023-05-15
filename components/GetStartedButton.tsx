import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface GetStartedButtonProps {
  isNavbar?: boolean;
  href?: string;
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  isNavbar = false,
  href = "/sign-up",
}) => {
  const buttonSize = "md";

  const displayIconButton = useBreakpointValue({ base: true, sm: false });

  const bgColor = useColorModeValue("#F1D580", "#0987A0");
  const color = useColorModeValue("black", "white");

  return (
    <NextLink href={href} passHref>
      {displayIconButton && isNavbar ? (
        <IconButton
          aria-label="Get Started"
          icon={<ArrowForwardIcon />}
          size={buttonSize}
          bg={bgColor}
          color={color}
        />
      ) : (
        <Button
          size={buttonSize}
          bg={bgColor}
          color={color}
          rightIcon={<ArrowForwardIcon />}
        >
          Get Started
        </Button>
      )}
    </NextLink>
  );
};

export default GetStartedButton;
