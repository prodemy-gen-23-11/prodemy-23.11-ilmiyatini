import React from "react";

import Header from "../layout/Header";
import ProductListWN from "./WhatsNew";
import ProductList from "./BestPrices";

export default function CardList() {
  return (
    <div>
      <Header />
      <ProductListWN />
      <ProductList />
    </div>
  );
}
