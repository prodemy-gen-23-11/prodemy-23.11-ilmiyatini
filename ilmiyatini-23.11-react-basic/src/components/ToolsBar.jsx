import React from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const ToolsBar = () => {
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
      <div className="tool">
        <FaShoppingCart />
        <span>Add to Cart</span>
      </div>
    </div>
  );
};

export default ToolsBar;
