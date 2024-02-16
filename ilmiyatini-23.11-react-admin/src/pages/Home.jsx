import React from "react";
import Header from "../layout/Header";
import ProductListWN from "../components/WhatsNew";
import ProductList from "../components/BestPrices";
import CategoriesList from "../data/CategoriesList";
import TitleContainer from "../layout/TitleContainer";
import Footer from "../layout/Footer";
import Banner from "../layout/Banner";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <TitleContainer name="Whats New" />
      <ProductListWN />
      <TitleContainer name="Best Price" />
      <ProductList />
      <CategoriesList />
      <Footer />
    </div>
  );
}
