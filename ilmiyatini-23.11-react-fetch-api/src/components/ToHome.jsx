import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ToHome() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-amber-100">
        <h1 className="text-3xl mb-2">Welcome to ILSHOP</h1>
        <h1 className="mb-5">Shop your way, any day!</h1>
        <Link to="/home" className="home-back text-base">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </Link>
      </div>
    </div>
  );
}
