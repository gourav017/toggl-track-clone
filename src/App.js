import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TopSection from "./components/Navbar/TopSection";
import { useScreenWidth } from "./hooks/useScreenWidth";

function App() {
  const { screen } = useScreenWidth();
  return (
    <div className="App">
      {screen > 900 ? <TopSection /> : null}
      <nav style={{ position: "sticky", width: "100%", top: "0" }}>
        <Navbar />
      </nav>
    </div>
  );
}

export default App;
