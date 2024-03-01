import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CardList from "./components/card/CardList";
import ItemBestPrices from "./components/card/ItemBestPrices";
import ItemsWhatsNew from "./components/card/ItemsWhatsNew";
import Admin from "./pages/Admin";
import AddNewProduct from "./form/AddNewProduct";
import EditProduct from "./form/EditProduct";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoutes from "./components/route/PrivateRoutes";
import AdminRoutes from "./components/route/AdminRoutes";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cartPage" element={<CartPage />} />
        </Route>
        <Route element={<AdminRoutes />}>
          <Route path="/admin/addNP" element={<AddNewProduct />} />
          <Route path="/admin/editProduct/:id" element={<EditProduct />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<CardList />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/bestPrices" element={<ItemBestPrices />} />
        <Route path="/whatsNew" element={<ItemsWhatsNew />} />
      </Routes>
    </div>
  );
}
