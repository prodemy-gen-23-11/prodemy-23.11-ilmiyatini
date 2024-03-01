import React from "react";
import CategoriesImg from "../components/card/CategoriesImg";

export default function CategoriesList() {
  const categoriesList = [
    {
      id: 1,
      imgSrc: "Coffee Grinder.png",
      keterangan: "Coffee Grinder",
    },
    {
      id: 2,
      imgSrc: "Coffee Machine.png",
      keterangan: "Coffee Machine",
    },
    {
      id: 3,
      imgSrc: "Gelato and Soft Ice.png",
      keterangan: "Gelato and Soft Ice",
    },
    {
      id: 4,
      imgSrc: "Manual Brew.png",
      keterangan: "Manual Brew",
    },
    {
      id: 5,
      imgSrc: "Water Treatment.png",
      keterangan: "Water Treatment",
    },
    {
      id: 6,
      imgSrc: "Ingredients.png",
      keterangan: "Ingredients",
    },
    {
      id: 7,
      imgSrc: "Hot Kitchen Equipment.png",
      keterangan: "Hot Kitchen Equipment",
    },
    {
      id: 8,
      imgSrc: "Cold Kitchen Equipment.png",
      keterangan: "Cold Kitchen Equipment",
    },
    {
      id: 9,
      imgSrc: "Other Equipment.png",
      keterangan: "Other Equipment",
    },
  ];
  return (
    <div className="border border-gray-300 rounded-md mt-10 mx-20">
      <h2 className="flex justify-center my-5 text-xs md:text-base">
        Shop by Category
      </h2>
      <div className="container-categoriesImg">
        {categoriesList.map((category) => (
          <CategoriesImg key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}
