import React, { useState } from "react";
import Button from "./Button";
import "../index.css";

function ProductCardMain(props) {
  const { name, features, price, image, additionalImages } = props;
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
            {additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => handleImageClick(img)}
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
        <ul className="product-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="buy-button">
          <Button type="submit" label="Buy now" variant="primary" />
          <Button
            type="button"
            label="Add to cart"
            icon="fas fa-shopping-cart text-xs"
            variant="secondary"
          />
        </div>
        <p>Free shipping on all continental US orders.</p>
      </div>
    </div>
  );
}

export default ProductCardMain;
