import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Swal from "sweetalert2";
import useSWR from "swr";

export default function TabelProduct() {
  const getProducts = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading, error, mutate } = useSWR(
    "http://localhost:3000/products",
    getProducts
  );
  if (error) {
    console.error("Error fetching product:", error);
    return <div>Error fetching product</div>;
  }
  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/products/${productId}`
      );

      Swal.fire({
        icon: "success",
        title: "Product deleted successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      mutate();
    } catch (error) {
      console.error("Error deleting product:", error);
      Swal.fire({
        icon: "error",
        title: "Oops... Something went wrong!",
        text: "Unable to delete the product.",
      });
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="navigation-buttons my-2 flex space-x-3">
        <Link to={`/`} className="home-back ">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
        <Link to="/" className="home-back">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </Link>
      </div>
      <h1 className="flex justify-center border border-amber-300 text-base md:text-lg p-2 text-amber-300 bg-amber-100">
        <strong>Admin Page</strong>
      </h1>
      <div className="flex justify-end ">
        <Link to={"/admin/addNP"}>
          <button className="bg-lime-500 text-white py-2 px-2 md:px-4 mb-2 rounded text-xs md:text-sm mt-4 hover:bg-amber-300">
            Add New Product
          </button>
        </Link>
      </div>

      {isLoading ? (
        <BeatLoader color="rgb(251 191 36)" />
      ) : (
        <div
          id="table-product-list"
          className="flex justify-center text-xs md:text-base "
        >
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
                      <button className="bg-amber-300 hover:bg-amber-400 text-white my-1 py-1 px-2 md:py-2 md:px-4 mr-2 text-xs md:text-sm rounded">
                        Show
                      </button>
                    </Link>

                    <Link to={`/admin/editProduct/${product.id}`}>
                      <button className="bg-cyan-500 hover:bg-cyan-700 text-white my-1 py-1 px-2 md:py-2 md:px-4 mr-2 text-xs md:text-sm rounded">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="bg-rose-400 hover:bg-rose-700 text-white my-1 py-1 px-2 md:py-2 md:px-4 mr-2 text-xs md:text-sm rounded"
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You will not be able to recover this product!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#d33",
                          cancelButtonColor: "#3085d6",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            handleDelete(product.id);
                          }
                        });
                      }}
                    >
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
