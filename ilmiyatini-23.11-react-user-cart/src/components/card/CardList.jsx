import React from "react";
import ProductList from "./BestPrices";
import ProductListWN from "./WhatsNew";
import Header from "../../layout/Header";

export default function CardList() {
  return (
    <div>
      <Header />
      <ProductListWN />
      <ProductList />
    </div>
  );
}
