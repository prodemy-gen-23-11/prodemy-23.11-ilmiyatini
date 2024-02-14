import React from "react";
import ProductList from "../data/BestPrices";
import ProductListWN from "../data/WhatsNew";
import Header from "../layout/Header";

export default function CardList() {
  return (
    <div>
      <Header />
      <ProductListWN />
      <ProductList />
    </div>
  );
}
