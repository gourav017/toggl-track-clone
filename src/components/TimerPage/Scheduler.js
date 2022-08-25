import { Box, Flex } from '@chakra-ui/react'
import React from 'react'


const Scheduler = () => {
     let d = new Date();
     let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let dateandday = [
      `${d.getDate() - 3} ${days[d.getDay()-3]}`,
      `${d.getDate() - 2} ${days[d.getDay()-2]}`,
      `${d.getDate() - 1} ${days[d.getDay()-1]}`,
      `${d.getDate() - 0} ${days[d.getDay()]}`,
      `${d.getDate() +1}  ${days[d.getDay()+1]}`,
      `${d.getDate() +2} ${days[d.getDay()+2]}`,
      `${d.getDate() +3} ${days[d.getDay()+3]}`,
    ];
   
    // let date=[,d.getDate()-2,d.getDate()-1,d.getDate(),d.getDate()+1,d.getDate()+2,d.getDate()+3]
  return (
    <div style={{ marginLeft: "15%" }}>
      <Flex justifyContent="space-evenly">
        {dateandday.map((e) => {
          return <Box>{e}</Box>;
        })}
      </Flex>
    </div>
  );
}

export default Scheduler
