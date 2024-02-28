import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
} from "../store/actions/cartActions";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
  shippingOption: yup.string().required("Shipping option is required"),
});

function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.dataCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementQty = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const decrementQty = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Data User :", data);
    console.log("Checkout Items:", cartItems);
    dispatch(clearCart());
    Swal.fire({
      icon: "success",
      title: "Successfully checked out. Thank you for shopping with us!",
      showConfirmButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/home");
      }
    });
  };
  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalPayment = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );
  };
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 bg-amber-100">
      <div className="navigation-buttons my-2 flex space-x-3">
        <Link to={`/cartPage`} className="home-back">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
        <Link to="/home" className="home-back">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2 text-amber-400 border-t-2 border-b-2 border-amber-400 py-2">
          Your Order
        </h2>
        {cartItems.map((item) => (
          <div
            key={item.productId}
            className="mb-4 border border-amber-400 p-5 "
          >
            <img
              src={item.image}
              alt={item.productName}
              className="w-28 rounded-md"
            />
            <p className="text-lg font-semibold">{item.productName}</p>
            <p className="text-base mt-2">Price : $ {item.price}</p>
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ">
              <span className="text-base mb-2 md:mb-0">Quantity :</span>
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
            <p className="text-base mt-2">
              Total Price : $ {calculateItemTotal(item)}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Name:</label>
          <input
            {...register("name")}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Phone:</label>
          <input
            {...register("phone")}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Address:</label>
          <input
            {...register("address")}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Shipping Option:
          </label>
          <select
            {...register("shippingOption")}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="">Select an option</option>
            <option value="standard">Standard Shipping</option>
            <option value="express">Express Shipping</option>
          </select>
          {errors.shippingOption && (
            <p className="text-red-500 text-xs mt-1">
              {errors.shippingOption.message}
            </p>
          )}
        </div>

        <div className="flex justify-end  border rounded border-amber-400">
          <div className="mr-5 ">
            <p>Total Payment</p>{" "}
            <p className="text-amber-400 font-bold text-xl p-1">
              $ {calculateTotalPayment()}
            </p>
          </div>
          <button
            type="submit"
            className="bg-amber-400 text-white py-2 px-4  hover:bg-yellow-500"
          >
            Place an Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
