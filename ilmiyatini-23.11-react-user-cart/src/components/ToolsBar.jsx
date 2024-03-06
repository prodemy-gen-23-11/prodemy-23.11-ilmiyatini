import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaShoppingBag,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetAuthData } from "../store/reducers/authReducer";
import axios from "axios";
import { setCartData } from "../store/reducers/cartReducer";

const ToolsBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.token !== "");
  const isAdmin = useSelector(
    (state) => state.auth.token !== "" && state.auth.user.role === "admin"
  );
  const userId = useSelector((state) => state.auth.user.id);
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/cart?userId=${userId}`
        );
        dispatch(setCartData(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartData();
  }, [dispatch]);

  const onClickLogout = () => {
    dispatch(resetAuthData());
    navigate("/login");
  };
  const navigateToAdmin = () => {
    navigate("/admin");
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  const cartItems = useSelector((state) => state.cart.dataCart);
  return (
    <div className="tools-bar">
      {isLoggedIn ? (
        <>
          <div
            className="tool cursor-pointer relative "
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaUserCircle />
            <span>Hi, {user.name}!</span>{" "}
            {showDropdown && (
              <div
                className="rounded-lg drop-shadow-md absolute bg-amber-400 text-white p-2 text-xs top-0 left-0 mt-5 ml-5 hover:opacity-70"
                onClick={onClickLogout}
              >
                Logout
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="tool" onClick={navigateToLogin}>
          <FaUser />
          <span>Login</span>
        </div>
      )}

      <div className="tool">
        <FaShoppingBag />
        <span>My Order</span>
      </div>
      <Link to={"/cartPage"}>
        <div className="tool relative">
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="absolute -right-4 -top-2 bg-red-500 rounded-full text-white ">
              <div className="flex items-center justify-center w-4 h-4 ">
                {cartItems.length}
              </div>
            </span>
          )}
          <span>Cart</span>
        </div>
      </Link>
      {isAdmin && (
        <div className="tool" onClick={navigateToAdmin}>
          <FontAwesomeIcon icon={faUserCog} />
          <span>Admin</span>
        </div>
      )}
    </div>
  );
};

export default ToolsBar;
