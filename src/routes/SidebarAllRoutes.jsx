import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Footer from "../components/Footer/Footer";
import Homepage from "../pages/Homepage";
import NavbarProduct from "../components/project page/NavbarProduct";
import Navbar from "../components/Navbar/Navbar";
import RequireAuth from "../hoc/RequireAuth";
import Products from "../components/project page/Products";
import { Sidebar_1 } from "../components/Sidebar_Vivek/Sidebar_1";
import ProductForm from "../components/project page/productsForm/ProductForm";

const SidebarAllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/products"
          element={
            <>
              {/* <Timer-Rohit /> */}
              <NavbarProduct/>
             <Products/>
            </>
          }
        />
        {/* <Route
          path="/products"
          element={
            <>
            <NavbarProduct/>
             <Products/>
            </>
          }
        ></Route>
        <Route
          path="/client"
          element={
            <>
              {/* <Client-Rohit/> 
            </>
          }
        ></Route> */}
      
      </Routes>
    </div>
  );
};

export default SidebarAllRoutes;
