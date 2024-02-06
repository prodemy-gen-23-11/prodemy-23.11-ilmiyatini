import React from "react";
import Header from "./layout/Header";
import ImageMain from "./layout/ImageMain";
import TitleContainer from "./layout/TitleContainer";
import ProductList from "./list-product/BestPrices";
import ProductListWN from "./list-product/WhatsNew";

import CategoriesList from "./list-product/CategoriesList";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <ImageMain />
      <TitleContainer name="Whats New" />
      <ProductListWN />
      <TitleContainer name="Best Price" />
      <ProductList />
      <CategoriesList />
      <Footer />
    </div>
  );
}
