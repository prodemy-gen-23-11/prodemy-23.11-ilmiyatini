import React from "react";
import CategoriesList from "../data/CategoriesList";
import Header from "../layout/Header";

export default function AllCategories() {
  return (
    <div>
      <Header />
      <CategoriesList />
    </div>
  );
}
