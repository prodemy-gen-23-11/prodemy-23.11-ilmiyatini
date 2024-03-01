import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ToolsBar = () => {
  const navigate = useNavigate();
  const navigateToAdmin = () => {
    navigate("/admin");
  };
  const cartItems = useSelector((state) => state.cart.dataCart);
  return (
    <div className="tools-bar">
      <div className="tool">
        <FaUser />
        <span>Sign In</span>
      </div>
      <div className="tool">
        <FaHeart />
        <span>Wishlist</span>
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

      <div className="tool" onClick={navigateToAdmin}>
        <FontAwesomeIcon icon={faUserCog} />
        <span>Admin</span>
      </div>
    </div>
  );
};

export default ToolsBar;
