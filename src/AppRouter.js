import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Navbar from "./Navbar";
import NavbarOut from "./NavbarOut";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/checkout"
          element={
            <>
              <NavbarOut />
              <Checkout />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
