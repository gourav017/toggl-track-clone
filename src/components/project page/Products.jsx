import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetproductApi } from "../../store/productreducer/products.action";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Threedotsbtn from "./Threedotsbtn";

const Products = () => {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetproductApi());
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((d) => (
        <TableContainer ml="15%">
          <Table
            size="sm"
          >
            <Thead>
              <Tr>
                <Th>PROJECT</Th>
                <Th>CLIENT</Th>
                <Th isNumeric>TIME STATUS</Th>
                <Th>BILLABLE STATUS</Th>
                <Th>TEAM</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{d.product_name}</Td>
                <Td>{d.client}</Td>
                <Td>{d.time}</Td>
                <Td>{d.Billable_rate}</Td>
                <Td>
                  <Threedotsbtn
                    id={d.id}
                    editid={d.id}
                    product_name={d.product_name}
                    client={d.client}
                    time={d.time}
                    Billable_rate={d.Billable_rate}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
};

export default Products;
