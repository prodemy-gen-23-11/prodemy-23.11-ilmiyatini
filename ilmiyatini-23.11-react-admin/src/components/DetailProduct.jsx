import React from "react";
import { useParams } from "react-router-dom";
import MainProductCard from "./MainProductCard";
import axios from "axios";
import useSWR from "swr";
import { BeatLoader } from "react-spinners";

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function DetailProduct() {
  const { id } = useParams();
  const productId = parseInt(id);
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`http://localhost:3000/products/${productId}`, fetcher);

  if (error) {
    console.error("Error fetching product:", error);
    return <div>Error fetching product </div>;
  }

  return (
    <div>
      {isLoading ? (
        <BeatLoader color="rgb(251 191 36)" />
      ) : (
        <MainProductCard {...product} />
      )}
    </div>
  );
}

export default DetailProduct;
