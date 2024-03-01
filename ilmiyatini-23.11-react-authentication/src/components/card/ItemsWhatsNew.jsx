import React from "react";
import Header from "../../layout/Header";
import ProductListWN from "./WhatsNew";

export default function ItemsWhatsNew() {
  return (
    <div>
      <Header />
      <h1 className="flex justify-center border border-amber-300 my-2 mx-20 p-2 rounded text-amber-300 bg-amber-100">
        <strong>Our New Products</strong>
      </h1>
      <ProductListWN />
    </div>
  );
}
