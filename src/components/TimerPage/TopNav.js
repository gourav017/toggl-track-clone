import {  Center, Flex, Text ,Square,Box,Input } from '@chakra-ui/react';
import React from 'react'
import {
  BsFolderFill,
  BsFillTagFill,
  BsCurrencyDollar,
  BsArrowRight
} from "react-icons/bs";
import {GrAddCircle} from 'react-icons/gr'

const TopNav = () => {
    let project=false
  return (
    <Flex
      color="white"
      h="90px"
      ml="15%"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      p="10px 2px 10px 10px"
    >
      <Center w="20%">
        <Input placeholder="What have you done ?" border="none" />
      </Center>
      <Center w="26%"></Center>
      <Center flex="1">
        <Flex gap="3%" alignItems="center" justifyContent="center">
          {project ? (
            <BsFolderFill color="#7e6e85" size="20px" />
          ) : (
            <Text fontSize="md" color='blackAlpha.900'>+ Create a project</Text>
          )}

          <BsFillTagFill color="#7e6e85" size="20px" />
          <BsCurrencyDollar color="#7e6e85" size="20px" />
          <Input w="20%" border="none" />
          <BsArrowRight color="#7e6e85" size="20px" />
          <Input w="15%" border="none" />
          <GrAddCircle size="50px" color="#7e6e85" />
         
        </Flex>
      </Center>
    </Flex>
  );
}

export default TopNav
