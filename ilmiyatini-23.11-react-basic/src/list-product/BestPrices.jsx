import React from "react";
import ProductCard from "../layout/ProductCard";

export default function ProductList() {
  const products = [
    {
      id: 1,
      imageSrc: "Victoria_Arduino_VA388_Black_Eagle_T3_3_Group__Copper_.png",
      productName: "Victoria Arduino VA388 Black Eagle T3 3 Group (Copper)",
      beforePrice: 21.428,
      price: 19.285,
      diskon: 10,
    },
    {
      id: 2,
      imageSrc: "Hario_BGS-400_Beam_Heater_220V.png",
      productName: "Hario BGS-400 Beam Heater 220V",
      beforePrice: 714,
      price: 536,
      diskon: 25,
    },
    {
      id: 3,
      imageSrc: "smeg-black.png",
      productName: "SMEG Stand Mixer",
      beforePrice: 1.999,
      price: 1.099,
      diskon: 45,
    },
    {
      id: 4,
      imageSrc: "Hario_M-12CP_Spoon__Copper.png",
      productName: "Hario M-12CP Spoon (Copper)",
      beforePrice: 24,
      price: 21,
      diskon: 15,
    },
    {
      id: 5,
      imageSrc: "Nuova_Simonelli_Grinder_MDXS_On_Demand.png",
      productName: "Nuova Simonelli Grinder MDXS On Demand",
      beforePrice: 2.428,
      price: 1.214,
      diskon: 50,
    },
  ];
  // const filteredProducts = products.filter((product) =>
  //   [1, 2, 3].includes(product.id)
  // );
  return (
    <div className="my-5 mx-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
