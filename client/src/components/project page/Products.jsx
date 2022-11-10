import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetproductApi } from "../../store/productreducer/products.action";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Threedotsbtn from "./Threedotsbtn";

const Products = () => {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetproductApi());
  }, []);



  return (
    <div>
      <TableContainer bg="white" color="black" height="87vh">
        <Table size="sm">
          <Thead h="70px">
            <Tr>
              <Th>PROJECT</Th>
              <Th>CLIENT</Th>
              <Th>TIME STATUS</Th>
              <Th>BILLABLE STATUS</Th>
              <Th>TEAM</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => (
              <Tr cursor="pointer" color="white" _hover={{ color: "black" }}>
                <Td color="black">{d.product_name}</Td>
                <Td color="black">{d.client}</Td>
                <Td color="black">{d.time}</Td>
                <Td color="black">{d.Billable_rate}</Td>
                <Td>
                  <Threedotsbtn
                    id={d._id}
                    product_name={d.product_name}
                    client={d.client}
                    time={d.time}
                    Billable_rate={d.Billable_rate}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
