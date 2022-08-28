import React from "react";
import { Center, Flex, Text, Button } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import FilterButtons from "./FilterButtons";

const SubNavbar = () => {
  return (
    <Flex
      bg="#fcf7f5"
      h="120px"
      ml="15%"
      flexDirection="column"
      p="20px"
      gap="20px"
    >
      <Flex gap="20px" alignItem="center">
        <Center>
          <Menu>
            <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
              Show active
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Text>Filter by:</Text>
          <FilterButtons btnname="Client" />
          <FilterButtons btnname="Team" />
          <FilterButtons btnname="Billable" />
          <FilterButtons btnname="Project name" />
        </Center>
      </Flex>
      {/* <Text>(No Project)</Text> */}
    </Flex>
  );
};

export default SubNavbar;
