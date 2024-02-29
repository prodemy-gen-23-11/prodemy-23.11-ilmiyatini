import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/reducers/cartReducer";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.dataCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const incrementQty = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const decrementQty = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const TotalPrice = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalPrice(TotalPrice);
  }, [cartItems]);

  const goCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto mt-8 bg-amber-100 p-5">
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
      <div className="flex justify-center bg-amber-200 rounded p-3">
        <h1 className="text-xl font-bold mb-2">Shopping Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center border border-yellow-400 m-4 p-2"
            >
              <div className="w-1/4">
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-full rounded-md"
                />
              </div>
              <div className="w-1/2 px-4">
                <h2 className="text-lg font-bold">{item.productName}</h2>
                <p className="text-sm ">Price: ${item.price}</p>
                <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ">
                  <span className="text-sm mb-2 md:mb-0">Quantity :</span>
                  <div className="flex items-center space-x-4">
                    <button
                      className="bg-amber-400 text-white text-xs px-3 py-1 rounded transition duration-300 hover:bg-amber-400 focus:ring"
                      onClick={() => decrementQty(item.productId)}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      className="text-xs rounded border border-yellow-400 px-3 py-1 w-16 text-center focus:outline-none"
                      name="qty"
                      value={item.quantity}
                      disabled
                    />
                    <button
                      className="bg-amber-400 text-white text-xs px-3 py-1 rounded transition duration-300 hover:bg-amber-400 focus:ring"
                      onClick={() => incrementQty(item.productId)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/4 text-right pr-4">
                <Button
                  type="button"
                  label="Remove"
                  variant="danger"
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You will not be able to recover this product!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#d33",
                      cancelButtonColor: "#3085d6",
                      confirmButtonText: "Yes, remove it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        dispatch(removeFromCart(item.productId));
                      }
                    });
                  }}
                />
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-6 mr-5">
            <div className="mr-5 ">
              <span>Total : </span>
              <span className="text-amber-400 font-bold text-xl">
                ${totalPrice}
              </span>
            </div>

            <Button
              type="button"
              label="Checkout"
              variant="secondary"
              onClick={goCheckout}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
