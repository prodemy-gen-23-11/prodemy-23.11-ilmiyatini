import React from "react";
import Header from "../../layout/Header";
import ProductList from "./BestPrices";

export default function ItemBestPrices() {
  return (
    <div>
      <Header />
      <h1 className="flex justify-center border border-amber-300 my-2 mx-20 p-2 rounded text-amber-300 bg-amber-100">
        <strong>Our Best Price Products</strong>
      </h1>
      <ProductList />
    </div>
  );
}
