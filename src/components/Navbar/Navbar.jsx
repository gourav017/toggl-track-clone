import React from "react";
import NavbarMain from "./NavbarMain";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import TopSection from "./TopSection";
function Navbar() {
  const { screen } = useScreenWidth();
  return (
    <>
      {screen > 900 ? <TopSection /> : null}
      <nav style={{ position: "sticky", width: "100%", top: "0" }}>
        <NavbarMain />
      </nav>
    </>
  );
}

export default Navbar;
