import React from "react";
import ToolsBar from "../components/ToolsBar";
import SearchNav from "../components/SearchNav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="text-xs p-1 bg-amber-300 text-black text-center w-full">
        <p>
          <strong>Act fast!</strong> Save up to 50% on Fall Sale deals.{" "}
          <b>Explore Sale</b>
        </p>
      </div>
      <div className="Navbar">
        <div className="flex gap-10">
          <div className="logo">
            <Link to={"/"}>
              <img src="/logo-new-.png"></img>
            </Link>
          </div>
          <SearchNav />
        </div>
        <ToolsBar />
      </div>
    </div>
  );
}
