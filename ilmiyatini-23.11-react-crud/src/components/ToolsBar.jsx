import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ToolsBar = () => {
  const navigate = useNavigate();
  const navigateToAdmin = () => {
    navigate("/admin");
  };
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
      <div className="tool" onClick={navigateToAdmin}>
        <FontAwesomeIcon icon={faUserCog} />
        <span>Admin</span>
      </div>
    </div>
  );
};

export default ToolsBar;
