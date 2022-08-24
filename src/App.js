import React, { useState } from "react";
import SubNav from "./components/TimerPage/SubNav";
// import "./App.css";
// import { Flex } from "@chakra-ui/react";
// import { getMonth } from "./components/Scheduler/Utils";
// import Month from "./components/Scheduler/Month";
// import { MineCalendar } from "./components/Calender/Calender";
import TopNav from "./components/TimerPage/TopNav";

function App() {
  // const [currenMonth,setCurrentMonth] = useState(getMonth())
  return (
    <div >
      <>
      <TopNav/>
      <SubNav/>
      {/* <MineCalendar/> */}
        {/* <Flex flexDirection='column' height='100%'> */}
          {/* <CalendarHeader /> */}
          {/* <Flex flex='1'> */}
            {/* <Sidebar /> */}
            {/* <Month month={currenMonth} /> */}
          {/* </Flex> */}
        {/* </Flex> */}
      </>
    </div>
  );
}

export default App;
