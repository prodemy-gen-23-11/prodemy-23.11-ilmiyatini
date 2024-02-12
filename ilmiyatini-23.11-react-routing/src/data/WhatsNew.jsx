import React from "react";
import ProductCard from "../components/ProductCard";

export default function ProductListWN() {
  const products = [
    {
      id: 6,
      imageSrc: "/Victoria_Ardunio_Mythos_MY85__Black_.png",
      productName: "Victoria Ardunio Mythos MY85 (Black)",
      price: 3.642,
    },
    {
      id: 7,
      imageSrc: "/Kolb_Atollspeed_Easy__K02-3005TIS__Silver-.png",
      productName: "Kolb Atollspeed Easy (K02-3005TIS) Silver",
      price: 6.392,
    },
    {
      id: 8,
      imageSrc: "/Robot_Coupe_Power_Mixer_165_Micromix__34900_.png",
      productName: "Robot Coupe Power Mixer 165 Micromix",
      price: 393,
    },
    {
      id: 9,
      imageSrc: "/SMEG_ALFA43X_Electric_Oven_4_Trays_435_x_320_mm.png",
      productName: "SMEG ALFA43X Electric Oven 4 Trays",
      price: 1.392,
    },
    {
      id: 10,
      imageSrc: "/Victoria_Arduino_Mythos_MYG75__White_.png",
      productName: "Victoria Arduino Mythos MYG75",
      price: 3.642,
    },
  ];
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
