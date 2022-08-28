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
import Timer from "../pages/Timer/SidebarApp";
import { Sidebar_1 } from "../components/Sidebar_Vivek/Sidebar_1";
import SidebarApp from "../pages/Timer/SidebarApp";
import Temp from "../pages/Timer/Temp";
import ClientMain from "../components/Client/ClientMain";
import TimerMain from "../components/TimerPage/TimerMain";

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
          path="/project"
          element={
            <RequireAuth>
              <Temp/>
            </RequireAuth>
          }
        />
        <Route
          path="/product"
          element={
            <RequireAuth>
              <Temp/>
            </RequireAuth>
          }
        />
        <Route
          path="/client"
          element={
            <RequireAuth>
              <ClientMain/>
            </RequireAuth>
          }
        />
        <Route
          path="/timer"
          element={
            <RequireAuth>
              <TimerMain/>
            </RequireAuth>
          }
        />
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
