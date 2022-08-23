import {
  Box,
  Button,
  Flex,
  HStack,
  useDisclosure,
  VisuallyHidden,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { Submenu } from "./Submenu";
import { ToggleButton } from "./ToggleButton";
import { links } from "./_data";

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
      >
        <Box as="a" rel="home">
          <Logo h="24px" iconColor="blue.400" />
        </Box>
        <Box
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        ></Box>
        <Box>
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )}
        <Button colorScheme="blue" w="full" size="lg" mt="5">
          Try for free
        </Button>
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props) => {
  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...props}
    >
      <Flex className="nav-content__desktop" align="center" gap="2rem">
        <Box as="a" href="#" rel="home">
          <VisuallyHidden>Envelope</VisuallyHidden>
          <Logo h="8" iconColor="blue.500" />
        </Box>
        <HStack
          as="ul"
          id="nav__primary-menu"
          aria-label="Main Menu"
          listStyleType="none"
        >
          {links.map((link, idx) => (
            <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
              {link.children ? (
                <Submenu.Desktop link={link} />
              ) : (
                <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
              )}
            </Box>
          ))}
        </HStack>
      </Flex>
      <HStack spacing="4" minW="240px" justify="space-between">
        <Box
          as="a"
          href="#"
          color={mode("white", "blue.300")}
          fontWeight="bold"
          _hover={{
            color: "#cb7bc6",
          }}
        >
          Book a demo
        </Box>
        <Box as="p" color={mode("white", "white")} fontWeight="bold">
          |
        </Box>

        <Box
          as="a"
          href="#"
          color={mode("white", "blue.300")}
          fontWeight="bold"
          _hover={{
            color: "#cb7bc6",
          }}
        >
          Log in
        </Box>
        <Button as="a" href="#" colorScheme="blue" fontWeight="bold">
          Try for free
        </Button>
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
