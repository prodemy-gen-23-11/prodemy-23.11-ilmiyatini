import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import useSWR from "swr";
import { BeatLoader } from "react-spinners";

export default function ProductListWN() {
  const getProducts = (url) => axios.get(url).then((response) => response.data);
  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/products",
    getProducts
  );
  if (error) return alert(JSON.stringify(error));
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/products")
  //     .then((response) => {
  //       setProducts(response.data.products);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);
  return (
    <div className="my-5 mx-20">
      {isLoading ? (
        <BeatLoader color="rgb(251 191 36)" />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 mx-auto">
          {data
            .filter((product) => product.id >= 6 && product.id <= 10)
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
