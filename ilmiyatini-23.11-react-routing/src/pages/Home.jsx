import React from "react";
import Header from "../layout/Header";
import ImageMain from "../layout/Banner";
import ProductListWN from "../data/WhatsNew";
import ProductList from "../data/BestPrices";
import CategoriesList from "../data/CategoriesList";
import TitleContainer from "../layout/TitleContainer";
import Footer from "../layout/Footer";

export default function Home() {
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
