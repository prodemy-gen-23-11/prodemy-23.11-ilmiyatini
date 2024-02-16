import React from "react";
import AddToCartButton from "./AddToCartButton";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const { id, imageSrc, productName, price, beforePrice, diskon, onClick } =
    props;
  const navigate = useNavigate();

  const onClickBrowse = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="group relative shadow">
      <div
        className="border border-gray-200 rounded-md group-hover:scale-105 transition-transform mx-4 overflow-hidden duration-300"
        onClick={onClickBrowse}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
          <i className="fas fa-heart text-xl text-slate-300 hover:text-red-500 absolute top-2 right-7 cursor-pointer transition-colors"></i>
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <AddToCartButton />
        </div>
        <h3 className="text-sm text-gray-700 mx-4 mt-7">
          <a href="#">{productName}</a>
        </h3>
        <p className="text-sm font-medium text-gray-900 p-4">
          {beforePrice && (
            <span className="line-through text-gray-400">${beforePrice}</span>
          )}{" "}
          ${price}
          {diskon && <button className="discount">-{diskon}%</button>}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
