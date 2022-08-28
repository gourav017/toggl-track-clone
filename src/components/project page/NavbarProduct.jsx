import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ProductForm from "./productsForm/ProductForm";

const NavbarProduct = () => {
  return (
    <Flex
      bg="white"
      h="90px"
      // ml="15%"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      p="10px 2px 10px 10px"
      justifyContent="space-between"
      position="sticky"
    >
      <Center w="10%">
        <Text color="black" fontSize="1.5rem">
          Projects
        </Text>
      </Center>
      <Center>
        <ProductForm />
      </Center>
    </Flex>
  );
};

export default NavbarProduct;
