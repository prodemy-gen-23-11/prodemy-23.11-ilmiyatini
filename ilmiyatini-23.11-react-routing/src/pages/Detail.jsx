import React from "react";
import Header from "../layout/Header";
import DataDetailProduct from "../data/DataDetailProduct";
import ProductList from "../data/BestPrices";
import Footer from "../layout/Footer";
import TitleContainer from "../layout/TitleContainer";
import ProductListWN from "../data/WhatsNew";

export default function Detail() {
  return (
    <div>
      <Header />
      <DataDetailProduct />
      <TitleContainer name="Whats New" />
      <ProductListWN />
      <TitleContainer name="Best Price" />
      <ProductList />
      <Footer />
    </div>
  );
}
