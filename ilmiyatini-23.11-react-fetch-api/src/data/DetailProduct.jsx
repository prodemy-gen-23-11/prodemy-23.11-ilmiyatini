import React from "react";
import { useParams } from "react-router-dom";
import MainProductCard from "../components/MainProductCard";
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
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Product tidak ditemukan</div>;
  }

  return (
    <div>
      {isLoading ? (
        <BeatLoader color="#f5da42" />
      ) : (
        <MainProductCard {...product} />
      )}
    </div>
  );
}

export default DetailProduct;
