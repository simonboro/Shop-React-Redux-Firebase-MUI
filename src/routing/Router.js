import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import { routes } from "../utils/routes";
import Checkout from "../views/Checkout";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Login from "../views/Login";
import Products from "../views/Products";
import Register from "../views/Register";
import SingleProduct from "../views/SingleProduct";
import ScrollToTop from "../utils/SrollToTop";
import UserProfile from "../views/UserProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainTemplate>
        <Routes>
          <Route exact path={routes.home} element={<Home />} />
          <Route exact path={routes.products} element={<Products />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.logIn} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route path={routes.checkout} element={<Checkout />} />
          <Route path={routes.singleProduct} element={<SingleProduct />} />
          <Route path={routes.userProfile} element={<UserProfile />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
