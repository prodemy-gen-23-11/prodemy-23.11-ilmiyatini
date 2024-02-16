import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";

export default function TabelProduct() {
  const getProducts = (url) => axios.get(url).then((response) => response.data);
  const { data, isLoading, error } = useSWR(
    "http://localhost:3000/products",
    getProducts
  );
  if (error) {
    console.error("Error fetching product:", error);
    return <div>Error fetching product</div>;
  }

  return (
    <div className="container mx-auto mt-4">
      <div className="navigation-buttons my-2 flex space-x-3">
        <Link to={`/`} className="home-back">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
        <Link to="/home" className="home-back">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </Link>
      </div>
      <h1 className="flex justify-center border border-amber-300  p-2 text-amber-300 bg-amber-100">
        <strong>Admin Page</strong>
      </h1>
      <div className="flex justify-end ">
        <button className="bg-green-500 text-white py-2 px-4 mb-2 rounded text-sm mt-4">
          Add New Product
        </button>
      </div>

      {isLoading ? (
        <BeatLoader color="rgb(251 191 36)" />
      ) : (
        <div id="table-product-list" className="flex justify-center  ">
          <table className="table-auto">
            <thead className="bg-amber-300">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Product Image</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-amber-100">
              {data.map((product) => (
                <tr key={product.id}>
                  <td className="border border-yellow-400 px-4 py-2">
                    {product.id}
                  </td>
                  <td className="border border-yellow-400 px-4 py-2 flex items-center ">
                    <img src={product.image} alt="" className="w-40 mx-auto" />
                  </td>
                  <td className="border border-yellow-400 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-yellow-400 px-4 py-2">
                    $ {product.price}
                  </td>
                  <td className="border border-yellow-400 px-4 py-2">
                    <Link to={`/product/${product.id}`}>
                      <button className="bg-yellow-500 text-white py-2 px-4 mr-2 text-sm rounded">
                        Show
                      </button>
                    </Link>

                    <button className="bg-blue-500 text-white py-2 px-4 mr-2  text-sm rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white py-2 px-4 mr-2 text-sm rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
