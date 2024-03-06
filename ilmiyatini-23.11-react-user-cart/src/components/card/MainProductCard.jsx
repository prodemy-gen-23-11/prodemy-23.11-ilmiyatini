//MainProductCard
import React, { useEffect, useState } from "react";
import "../../index.css";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../store/reducers/cartReducer";
import Swal from "sweetalert2";
import axios from "axios";
import useSWR from "swr";

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
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };
  const { data: cartApi, mutate } = useSWR(
    "http://localhost:3000/cart",
    fetchData
  );
  const userId = useSelector((state) => state.auth.user.id);

  const isLoggedIn = useSelector((state) => state.auth.token !== "");

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };
  const navigateToLogin = () => {
    Swal.fire({
      title: "Hey there! It looks like you haven't logged in yet.",
      text: "You need to log in to Checkout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log in!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  };
  useEffect(() => {
    handleImageClick(additionalImages[0]);
  }, [id]);

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  const handleAddToCart = async () => {
    const index = cartApi.findIndex(
      (item) => item.productId === id && item.userId === userId
    );

    if (index !== -1) {
      const updatedItem = {
        userId: userId,
        ...cartApi[index],
        quantity: cartApi[index].quantity + qty,
      };

      try {
        await axios.put(
          `http://localhost:3000/cart/${cartApi[index].id}`,
          updatedItem
        );
        dispatch(updateCart(updatedItem));
        mutate();
      } catch (error) {
        console.error(error);
      }
    } else {
      const payload = {
        userId: userId,
        productId: id,
        productName: name,
        price: price,
        image: additionalImages[0],
        quantity: qty,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/cart",
          payload
        );
        const newCartItem = { ...payload, id: response.data.id };
        dispatch(addToCart(newCartItem));
        mutate();
      } catch (error) {
        console.error(error);
      }
    }
    Swal.fire({
      icon: "success",
      title: "Product added to cart successfully!",
      showConfirmButton: true,
      confirmButtonText: "OK",
    });
    // .then((result) => {
    //   if (result.isConfirmed) {
    //     navigate("/cartPage");
    //   }
    // });
  };
  return (
    <div className="border border-gray-200 p-4 bg-amber-100 rounded-md mt-4 mx-4">
      <div className="navigation-buttons my-2 flex space-x-3">
        <Link to={`/product`} className="home-back">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
        <Link to="/" className="home-back">
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
          <div className="flex items-center space-x-4 mt-2">
            <button
              className="bg-amber-300 text-white text-xs px-3 py-1 rounded transition duration-300 hover:bg-amber-400 focus:ring "
              onClick={decrementQty}
            >
              −
            </button>
            <input
              type="number"
              className="text-xs border border-yellow-400 px-3 py-1 w-16 text-center focus:outline-none"
              name="qty"
              value={qty}
              disabled
            />
            <button
              className="bg-amber-300 text-white text-xs px-3 py-1 rounded transition duration-300 hover:bg-amber-400 focus:ring "
              onClick={incrementQty}
            >
              +
            </button>
          </div>

          <div className="buy-button">
            <Button
              type="submit"
              label="Buy now"
              variant="primary"
              onClick={handleBuyNow}
            />
            {isLoggedIn ? (
              <Button
                type="button"
                onClick={handleAddToCart}
                label="Add to cart"
                icon="fas fa-shopping-cart text-xs"
                variant="secondary"
              />
            ) : (
              <Button
                type="button"
                onClick={navigateToLogin}
                label="Add to cart"
                icon="fas fa-shopping-cart text-xs"
                variant="secondary"
              />
            )}
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
