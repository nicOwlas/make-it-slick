import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface GetStartedButtonProps {
  isNavbar?: boolean;
  url?: string;
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  isNavbar = false,
  url = "https://ol364r9x4kq.typeform.com/to/MnFcFpfA",
}) => {
  const buttonSize = "md";

  const displayIconButton = useBreakpointValue({ base: true, sm: false });

  const bgColor = useColorModeValue("#F1D580", "#0987A0");
  const color = useColorModeValue("black", "white");

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return displayIconButton && isNavbar ? (
    <IconButton
      aria-label="Get Started"
      icon={<ArrowForwardIcon />}
      size={buttonSize}
      bg={bgColor}
      color={color}
      onClick={handleClick}
    />
  ) : (
    <Button
      size={buttonSize}
      bg={bgColor}
      color={color}
      onClick={handleClick}
      rightIcon={<ArrowForwardIcon />}
    >
      Get Started
    </Button>
  );
};

export default GetStartedButton;
