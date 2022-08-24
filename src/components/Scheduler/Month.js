import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import {Day} from "./Day";
export default function Month({ month }) {
  return (
    <Grid 
    // templateColumns='repeat(7, 1fr)' 
        templateRows='repeat(5,1fr)'    
    >
      {month.map((row, i) => (
        <GridItem key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </GridItem>
      ))}
    </Grid>
  );
}
