import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="mx-10 max-w-screen mt-[1rem] relative">
      <div className="relative overflow-hidden">
        <img src="background--.jpg" className="w-full rounded-md" alt="" />
        <div className="promo-text">
          <p>Discount up to 70% off!</p>
        </div>

        <div className="up-size-title">
          <h1>
            Explore the World of Espresso and More <br /> Early Access!
          </h1>
          <p>Powering up huge deals and fast shipping</p>
        </div>

        <div className="shop-now ">
          <Link to={"/product"}>
            <Button type="submit" label="Shop Now" variant="tertiary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
