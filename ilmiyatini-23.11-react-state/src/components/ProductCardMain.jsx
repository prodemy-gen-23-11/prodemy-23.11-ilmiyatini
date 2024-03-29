import React, { useState } from "react";
import Button from "./Button";
import "../index.css";

function ProductCardMain(props) {
  const { name, price, image, additionalImages } = props;
  const [mainImage, setMainImage] = useState(image);

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <div className="product-card">
      <div className="container-image-all">
        <div className="flex flex-col">
          <div className="image-container">
            <img src={mainImage} alt={name} />
          </div>
          <div className="additional-images">
            {additionalImages.map((img) => (
              <img
                key={img.id}
                src={img.productSrc}
                alt=""
                onClick={() => handleImageClick(img.productSrc)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="product-details">
        <h1>{name}</h1>
        <div className="price-product">
          <span className="line-through text-gray-400 ">$1999</span> $ {price}{" "}
          <button class="discount1">-45%</button>
        </div>
        <p>In stock</p>
        <div className="rating-container">
          <div className="rating mt-2 text-xs">
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="far fa-star text-gray-400 hover:text-yellow-500 transition"></i>
          </div>
        </div>
        <div className="product-features">
          <p>Brand : SMEG</p>
          <p>Control Type : Lever</p>
          <p>LCD : No</p>
          <p>Capacity : 1 L</p>
          <p>Dimensions (HxLxW) : 37.8cm x 40.2cm x 22.1cm</p>
          <p>Power : 800 watt</p>
          <p>Number of Speed : 10</p>
          <p>Weight : 9.5 kg</p>
        </div>
        <div className="buy-button">
          <Button type="submit" label="Buy now" variant="primary" />
          <Button
            type="button"
            label="Add to cart"
            icon="fas fa-shopping-cart text-xs"
            variant="secondary"
          />
        </div>
        <p className="w-full flex-none text-xs md:text-base font-medium text-slate-700 mt-1">
          Free shipping on all continental US orders.
        </p>
      </div>
    </div>
  );
}

export default ProductCardMain;
