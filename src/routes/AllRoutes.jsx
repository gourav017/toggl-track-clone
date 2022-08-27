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

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/product"
          element={
            <RequireAuth>
              <NavbarProduct />
              <Products />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
