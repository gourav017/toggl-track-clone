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
      Products
      {data.map((d) => (
        <TableContainer>
          <Table size="sm">
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
              <Tr style={{display:"flex" , gap:"15px", justifyContent:"space-between"}}>
                <Td>{d.product_name}</Td>
                <Td>{d.client}</Td>
                <Td>{d.time}</Td>
                <Td>
                  <Threedotsbtn id={d.id} editid={d.id}/>
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
