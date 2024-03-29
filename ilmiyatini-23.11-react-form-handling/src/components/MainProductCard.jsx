import React, { useEffect, useState } from "react";
import "../index.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";

function MainProductCard(props) {
  const {
    id,
    name,
    beforePrice,
    price,
    discount,
    additionalImages,
    descriptions,
  } = props;
  const [mainImage, setMainImage] = useState(additionalImages[0]);

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };
  useEffect(() => {
    handleImageClick(additionalImages[0]);
  }, [id]);
  return (
    <div className="border border-gray-200 p-4 bg-amber-100 rounded-md mt-4 mx-4">
      <div className="navigation-buttons my-2 flex space-x-3">
        <Link to={`/product`} className="home-back">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
        <Link to="/home" className="home-back">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </Link>
      </div>
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
          <div className="price-product text-sm md:text-base">
            {beforePrice && (
              <span className="line-through text-gray-400 ">
                ${beforePrice}
              </span>
            )}{" "}
            ${price}{" "}
            {discount && <button className="discount">-{discount}%</button>}
          </div>
          <p className="text-xs md:text-sm"> In stock</p>
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
            {descriptions.map((description, index) => (
              <li key={index}>{description}</li>
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
          <p className="text-xs md:text-sm">
            Free shipping on all continental US orders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainProductCard;
