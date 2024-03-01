import React from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";

export default function ProductList() {
  const getProducts = (url) => axios.get(url).then((response) => response.data);
  const { data, isLoading, error } = useSWR(
    "http://localhost:3000/products",
    getProducts
  );
  if (error) return alert(JSON.stringify(error));

  return (
    <div className="my-5 mx-20">
      {isLoading ? (
        <BeatLoader color="rgb(251 191 36)" />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 mx-auto">
          {data
            .filter((product) => product.id >= 1 && product.id <= 5)
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={product.image}
                productName={product.name}
                price={product.price}
              />
            ))}
        </div>
      )}
    </div>
  );
}
