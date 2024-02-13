import React from "react";
import { useParams } from "react-router-dom";
import MainProductCard from "../components/MainProductCard";

export default function DataDetailProduct() {
  const productsData = [
    {
      id: 3,
      name: "SMEG Stand Mixer (SMF02)",
      beforePrice: 1.999,
      price: 1.099,
      discount: 45,
      image: "/smeg-black.png",
      additionalImages: [
        "/smeg-black.png",
        "/smeg-red.png",
        "/smeg-pink.png",
        "/smeg-cream.png",
      ],
      descriptions: [
        "Brand : SMEG",
        "Control Type : Lever",
        "LCD : No",
        "Capacity : 1 L",
        "Dimensions (HxLxW) : 37.8cm x 40.2cm x 22.1cm",
        "Power : 800 watt",
        "Number of Speed : 10",
        "Weight : 9.5 kg",
      ],
    },
    {
      id: 1,
      name: "Victoria Arduino VA388 Black Eagle T3 2 Group (Copper)",
      beforePrice: 21.428,
      price: 19.285,
      discount: 10,
      image: "/Victoria_Arduino_VA388_Black_Eagle_T3_3_Group__Copper_.png",
      additionalImages: [
        "/Victoria_Arduino_VA388_Black_Eagle_T3_3_Group__Copper_.png",
        "/Victoria_Arduino_VA388_Black_Eagle_T3_3_Group__Copper_2.jpg",
      ],
      descriptions: [
        "Height : 49 cm",
        "Depth : 69 cm",
        "Width : 82.5 cm",
        "Weight : 90 kg",
        "Brewing System : Volumetric",
        "Boiler Size : 11.4 lt",
        "Boiler Type : Multi Boiler",
        "Power : 7300 watt",
      ],
    },
    {
      id: 2,
      name: "Hario BGS-400 Beam Heater 220V",
      beforePrice: 714,
      price: 526,
      discount: 25,
      image: "/Hario_BGS-400_Beam_Heater_220V.png",
      additionalImages: ["/Hario_BGS-400_Beam_Heater_220V.png"],
      descriptions: [
        "Article No. : BGS-400",
        "New ETL-certified Halogen Beam Heater",
        "350 W halogen lamp (includes 2 in box)",
        "Rated to 450 W",
        "110-120 V AC",
        "Beam Heater base",
        "Glass panel and heat shield",
        "Three heat shield screws",
      ],
    },
    {
      id: 4,
      name: "Hario M-12CP Spoon (Copper)",
      beforePrice: 24,
      price: 21,
      discount: 15,
      image: "/Hario_M-12CP_Spoon__Copper.png",
      additionalImages: ["/Hario_BGS-400_Beam_Heater_220V.png"],
      descriptions: [
        "Brand : Hario",
        "Article No. : M-12CP",
        "Material : Copper and Brass",
        "Berat : 60 gram",
        "Ukuran : Diameter : 5.3 cm, Panjang : 9.6 cm",
        "Warna : Copper",
        "Kapasitas : 12 gram",
        "Made in Japan",
      ],
    },
    {
      id: 5,
      name: "Nuova Simonelli Grinder MDXS On Demand",
      beforePrice: 2428,
      price: 1214,
      discount: 50,
      image: "/Nuova_Simonelli_Grinder_MDXS_On_Demand.png",
      additionalImages: [
        "/Nuova_Simonelli_Grinder_MDXS_On_Demand.png",
        "/Nuova_Simonelli_Grinder_MDXS_On_Demand-red.png",
        "/Nuova_Simonelli_Grinder_MDXS_On_Demand-white.png",
      ],
      descriptions: [
        "Brand : Nuova Simonelli",
        "Hopper Capacity : 1 kg",
        "Height : 58.5 cm",
        "Power : 500 watt (230 V) / 400 watt (115V)",
        "UAutomatism : Automatic",
        "Burr Size : Flat 65 mm",
        "Daily Production : 9 kg",
        "Type of Grinding : Micrometric",
      ],
    },
    {
      id: 6,
      name: "Victoria Arduino Mythos MYG75",
      price: 3.642,
      image: "/Victoria_Ardunio_Mythos_MY85__Black_.png",
      additionalImages: [
        "/Victoria_Ardunio_Mythos_MY85__Black_.png",
        "/Victoria_Arduino_Mythos_MYG75__White_.png",
      ],
      descriptions: [
        "Dosage : Gravimetric",
        "Bean Hopper Capacity : 1,5 kg",
        "Burrs : Long life Ø = 75mm",
        "Power : 950 W (110V)/600 W (230V)",
        "Voltage : 115/230V",
        "Frequency : 50/60 Hz",
        "Grinding Speed (g/s) : 2,7 - 3,5",
        "Net Weight : 24,5 kg",
      ],
    },
    {
      id: 7,
      name: "Kolb Atollspeed Easy (K02-3005TIS) Silver",
      price: 6.392,
      image: "/Kolb_Atollspeed_Easy__K02-3005TIS__Silver-.png",
      additionalImages: ["/Kolb_Atollspeed_Easy__K02-3005TIS__Silver-.png"],
      descriptions: [
        "Brand : KOLB",
        "Outside Dimensions (WxDxH) : 445 x 687 x 570 mm",
        "Baking Chamber (WxDxH) : 317 x 311 x 170 mm",
        "Power : 2.7 kW",
        "Heating Power : 2.7 kW",
        "Microwave : 1.3 kW",
        "Voltage : 220 - 230V",
        "Frequency : 50 Hz",
      ],
    },
    {
      id: 8,
      name: " Robot Coupe Power Mixer 165 Micromix (34900)",
      price: 393,
      image: "/Robot_Coupe_Power_Mixer_165_Micromix__34900_.png",
      additionalImages: ["/Robot_Coupe_Power_Mixer_165_Micromix__34900_.png"],
      descriptions: [
        "Brand : Robot Coupe",
        "Power : 220 W",
        "Voltage : Single phase",
        "Power : 2.7 kW",
        "Blade and shaft : Length 16.5 cm - all stainless steel",
        "Removable blade : Yes",
        "Removable foot : Yes",
        "Dimensions (cm) : Length 43 cm, Ø 6.1 cm",
      ],
    },
    {
      id: 9,
      name: " SMEG ALFA43X Electric Oven 4 Trays 435 x 320 mm",
      price: 1392,
      image: "/SMEG_ALFA43X_Electric_Oven_4_Trays_435_x_320_mm.png",
      additionalImages: [
        "/SMEG_ALFA43X_Electric_Oven_4_Trays_435_x_320_mm.png",
      ],
      descriptions: [
        "Brand : SMEG",
        "Dimensions (cm) (WXDXH) : 60.2 x 58.4 x 32",
        "Trays (cm) : 43.5 x 32",
        "Tray capacity : 4",
        "Distance between trays (cm) : 8",
        "Control type : Manual",
        "Temperature range (°C) : 50 - 250",
        "Power supply / power installed : 3 kW, 230V 1N - 50 Hz",
      ],
    },
    {
      id: 10,
      name: "Victoria Arduino Mythos MYG75",
      price: 3.642,
      image: "/Victoria_Ardunio_Mythos_MY85__Black_.png",
      additionalImages: [
        "/Victoria_Ardunio_Mythos_MY85__Black_.png",
        "/Victoria_Arduino_Mythos_MYG75__White_.png",
      ],
      descriptions: [
        "Dosage : Gravimetric",
        "Bean Hopper Capacity : 1,5 kg",
        "Burrs : Long life Ø = 75mm",
        "Power : 950 W (110V)/600 W (230V)",
        "Voltage : 115/230V",
        "Frequency : 50/60 Hz",
        "Grinding Speed (g/s) : 2,7 - 3,5",
        "Net Weight : 24,5 kg",
      ],
    },
  ];

  const { productId } = useParams();
  // console.log("Extracted Product ID:", productId);
  const selectedProduct = productsData.find(
    (product) => product.id === parseInt(productId, 10)
  );

  // console.log("Selected Product:", selectedProduct);

  return (
    <div>
      {selectedProduct ? (
        <MainProductCard {...selectedProduct} />
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
