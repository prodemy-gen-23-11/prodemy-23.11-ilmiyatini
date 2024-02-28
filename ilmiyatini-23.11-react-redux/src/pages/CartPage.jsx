import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { removeFromCart } from "../store/actions/cartActions";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.dataCart);
  const navigate = useNavigate();

  const dispatch = useDispatch();
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
              className="flex items-center border-b border-gray-300 py-4"
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
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
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
                        console.log("id:", item.productId);
                        dispatch(removeFromCart(item.productId));
                        console.log(removeFromCart(item.productId));
                      }
                    });
                  }}
                />
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-6">
            <div className="mr-5 mt-1">Total : ${totalPrice}</div>

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
