//Product Card
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, updateCart } from "../../store/reducers/cartReducer";
import Swal from "sweetalert2";
import useSWR from "swr";
import axios from "axios";

function ProductCard(props) {
  const { id, imageSrc, productName, price, beforePrice, diskon, onClick } =
    props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.token !== "");
  const fetchData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };
  const { data: cartApi, mutate } = useSWR(
    "http://localhost:3000/cart",
    fetchData
  );
  const userId = useSelector((state) => state.auth.user.id);

  const onClickBrowse = () => {
    navigate(`/product/${id}`);
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
  const handleAddToCart = async () => {
    const index = cartApi.findIndex(
      (item) => item.productId === id && item.userId === userId
    );
    if (index !== -1) {
      const updatedItem = {
        userId: userId,
        ...cartApi[index],
        quantity: cartApi[index].quantity + 1,
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
        productName: productName,
        price: price,
        image: imageSrc,
        quantity: 1,
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
          {isLoggedIn ? (
            <button
              className="btn-cart hover:bg-black"
              onClick={handleAddToCart}
            >
              <i className="fas fa-shopping-cart text-xs"></i> Add to Cart
            </button>
          ) : (
            <button
              className="btn-cart hover:bg-black"
              onClick={navigateToLogin}
            >
              <i className="fas fa-shopping-cart text-xs"></i> Add to Cart
            </button>
          )}
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
