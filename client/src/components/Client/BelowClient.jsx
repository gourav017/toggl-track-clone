import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const BelowClient = ({ getData, client }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Flex
        bg="white"
        h="60px"
        borderBottom="1px"
        borderColor="blackAlpha.300"
        p="15px 15px 10px 15px"
      >
        <Text>All</Text>
      </Flex>
      <Flex
        bgColor="white"
        h="90px"
        p="15px 2px 10px 15px"
        gap="8px"
        cursor="pointer"
        flexWrap="wrap"
      >
        {client.map((e) => {
          return (
            <Flex
              gap="1px"
              border="1px"
              borderColor="black"
              h="30px"
              p="3px"
              borderRadius="5px"
              alignItems="center"
              justifyContent="center"
            >
              <Text>{e.client}</Text>
              <BsThreeDotsVertical />
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
};

export default BelowClient;
