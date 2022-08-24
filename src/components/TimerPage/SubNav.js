import React from "react";
import { Center, Flex, Text, Container,Button } from "@chakra-ui/react";
import {
  AiFillSetting,
  AiOutlineDown,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";

const SubNav = () => {
    let time="00:00:00"
  return (
    <Flex
      bg="#fcf7f5"
      h="120px"
      ml="15%"
      flexDirection="column"
      p="20px"
      gap="20px"
    >
      <Flex justifyContent="space-between" alignItem="center">
        <Center>
          <Text>This Week</Text>
        </Center>

        <Flex gap="10px">
          <Center>
            <Text>Week Total {time}</Text>
          </Center>

          <Flex
            border="1px"
            borderColor="black"
            borderRadius="25px"
            p="2px"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Container borderRight="1px" borderColor="black">
              <AiOutlineLeft />
            </Container>
            <Container margin="0 5px 0 5px">
              <Text w="200%">This week</Text>
            </Container>
            <Container borderLeft="1px" borderColor="black">
              <AiOutlineRight />
            </Container>
          </Flex>
          <Center>
            <AiFillSetting />
          </Center>
          {/* menu */}
          <Menu>
            <MenuButton as={Button} rightIcon={<AiOutlineDown />}>
              Views
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {/* <Text>(No Project)</Text> */}
      <Flex bgColor="#7e6e85" h="5px" borderRadius='20px'></Flex>
    </Flex>
  );
};

export default SubNav;
