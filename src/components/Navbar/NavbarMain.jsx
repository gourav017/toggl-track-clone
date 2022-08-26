import { Box, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";
import { useScreenWidth } from "../../hooks/useScreenWidth";

export default function NavbarMain() {
  const { screen } = useScreenWidth();
  return (
    <div>
      <Box>
        <Box
          as="header"
          bg={mode("#2c1438", "white")}
          position="relative"
          zIndex="10"
        >
          <Box
            as="nav"
            aria-label="Main navigation"
            mx="auto"
            px={{
              base: "6",
              md: "8",
            }}
          >
            <>{screen > 900 ? <NavContent.Desktop /> : <NavContent.Mobile />}</>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
