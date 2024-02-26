import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CardList from "./components/CardList";
import ItemBestPrices from "./components/ItemBestPrices";
import ItemsWhatsNew from "./components/ItemsWhatsNew";
import ToHome from "./components/ToHome";
import Admin from "./pages/Admin";
import AddNewProduct from "./form/AddNewProduct";
import EditProduct from "./form/EditProduct";
import { CheckoutProvider } from "./context/CheckoutContext";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    <div>
      <CheckoutProvider>
        <Routes>
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/admin/addNP" element={<AddNewProduct />} />
          <Route path="/admin/editProduct/:id" element={<EditProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<ToHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<CardList />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/bestPrices" element={<ItemBestPrices />} />
          <Route path="/whatsNew" element={<ItemsWhatsNew />} />
        </Routes>
      </CheckoutProvider>
    </div>
  );
}
