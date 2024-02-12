import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CardList from "./components/CardList";
import ItemBestPrices from "./components/ItemBestPrices";
import ItemsWhatsNew from "./components/ItemsWhatsNew";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<CardList />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="/bestPrices" element={<ItemBestPrices />} />
        <Route path="/whatsNew" element={<ItemsWhatsNew />} />
      </Routes>
    </div>
  );
}
