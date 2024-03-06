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
  removeFromCart,
} from "../store/reducers/cartReducer";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

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
  const userId = useSelector((state) => state.auth.user.id);

  const incrementQty = async (productId) => {
    dispatch(incrementQuantity(productId));
    try {
      const cartItemToIncrement = cartItems.find(
        (item) => item.productId === productId
      );
      if (cartItemToIncrement) {
        await axios.put(
          `http://localhost:3000/cart/${cartItemToIncrement.id}`,
          { ...cartItemToIncrement, quantity: cartItemToIncrement.quantity + 1 }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const decrementQty = async (productId, quantity) => {
    if (quantity > 1) {
      dispatch(decrementQuantity(productId));
      try {
        const cartItemToDecrement = cartItems.find(
          (item) => item.productId === productId
        );
        if (cartItemToDecrement) {
          await axios.put(
            `http://localhost:3000/cart/${cartItemToDecrement.id}`,
            {
              ...cartItemToDecrement,
              quantity: Math.max(0, cartItemToDecrement.quantity - 1),
            }
          );
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "This will remove the product from your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, remove it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const cartItemToRemove = cartItems.find(
              (item) => item.productId === productId
            );
            if (cartItemToRemove) {
              await axios.delete(
                `http://localhost:3000/cart/${cartItemToRemove.id}`
              );
              dispatch(removeFromCart(productId));
            }
          } catch (error) {
            console.error(error);
          }
        }
      });
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const checkoutData = {
        customer: {
          userId: userId,
          name: data.name,
          phone: data.phone,
          address: data.address,
        },
        shippingOption: data.shippingOption,
        items: cartItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      };

      const response = await axios.post(
        "http://localhost:3000/checkout",
        checkoutData
      );
      if (response.status === 201) {
        console.log("Checkout successful!", response.data);

        dispatch(clearCart());
        try {
          for (const item of cartItems) {
            await axios.delete(`http://localhost:3000/cart/${item.id}`);
          }
        } catch (error) {
          console.error("Error clearing cart on server:", error);
        }

        Swal.fire({
          icon: "success",
          title: "Successfully checked out. \n Thank you for shopping with us!",
          showConfirmButton: true,
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      } else {
        console.error(
          "Unexpected status code:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("An error occurred during checkout:", error);
      Swal.fire({
        icon: "error",
        title: "Checkout failed",
        text: "An error occurred during the checkout process. Please try again.",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
    }
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
        <Link to="/" className="home-back">
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
                  onClick={() => decrementQty(item.productId, item.quantity)}
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

        <div className="flex justify-end  border border-amber-400">
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
