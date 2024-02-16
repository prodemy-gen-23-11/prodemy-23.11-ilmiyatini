import React from "react";
import { Link } from "react-router-dom";

const SearchNav = () => {
  return (
    <div className="search-nav">
      <form id="search-form">
        <input
          type="text"
          id="search-input"
          placeholder="Search for products or brands..."
          className="hidden sm:block w-60 md:w-96 lg:w-full p-2 text-xs border border-gray-300 rounded-lg outline-none bg-gray-200 focus:border-yellow-500"
        />
        <button
          type="submit"
          className="absolute right-1 sm:bottom-[0.8px] px-3 py-2 text-gray-500 focus:outline-none hover:text-yellow-500"
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
      <nav className="hidden md:block mt-2">
        <ul className="flex justify-center text-xs lg:text-sm font-sans">
          <li className="mx-2">
            <a className="nav-link" href="categories.html">
              Categories
            </a>
          </li>
          <li className="mx-2">
            <a className="nav-link" href="sale.html">
              Sale
            </a>
          </li>
          <li className="mx-2">
            <Link to={"/bestPrices"}>
              <span className="nav-link">Best Price</span>
            </Link>
          </li>
          <li className="mx-2">
            <Link to={"/whatsNew"}>
              <span className="nav-link">Whats New</span>
            </Link>
          </li>
          <li className="mx-2">
            <a className="nav-link" href="pickupDelivery.html">
              Pickup & Delivery
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SearchNav;
