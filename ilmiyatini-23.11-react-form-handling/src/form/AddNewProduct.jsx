import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Product Name is required"),
  price: Yup.number().required("Price is required"),
  images: Yup.string().required("At least one image is required"),
  descriptions: Yup.string().required("Description is required"),
});

export default function AddNewProduct() {
  const [selectedImages, setSelectedImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files) {
      const imagesArray = Array.from(files).map((file) => "/" + file.name);
      setSelectedImages(imagesArray);
    }
  };

  const onSubmit = (data, e) => {
    const descriptionsArray = data.descriptions
      .split(",")
      .map((desc) => desc.trim());
    const beforePrices = (100 * data.price) / (100 - data.discount);
    const filteredProductData = {
      name: data.name,
      ...(data.discount && { beforePrice: beforePrices }),
      price: data.price,
      ...(data.discount && { discount: data.discount }),
      image: selectedImages[0],
      additionalImages: selectedImages,
      descriptions: descriptionsArray,
    };
    console.log(
      "Submitted data:",
      JSON.stringify(filteredProductData, null, 2)
    );
    alert("Product added successfully!");
    setSelectedImages([]);
    e.target.reset();
  };

  return (
    <div className="bg-gray-100 p-5 m-5 rounded">
      <div className="navigation-buttons my-2 flex space-x-3 ml-6">
        <Link to={`/admin`} className="home-back">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
        <Link to="/home" className="home-back">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </Link>
      </div>
      <h1 className="text-center border border-amber-300 my-2 mx-10 p-2 rounded text-amber-300 bg-amber-100">
        <strong>Add New Product</strong>
      </h1>
      <form
        className="max-w-md mx-auto mt-8"
        onSubmit={(e) => handleSubmit(onSubmit)(e)}
      >
        <label htmlFor="name">
          <span className="text-gray-700">Product Name:</span>
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-amber-400"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}

        <label htmlFor="price" className="block mb-2">
          <span className="text-gray-700">Price:</span>
        </label>
        <input
          type="number"
          id="price"
          className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-amber-400"
          {...register("price")}
        />
        {errors.price && (
          <p className="text-xs text-red-500">{errors.price.message}</p>
        )}
        {/* 
        <label htmlFor="beforePrice">
          <span className="text-gray-700">Before Price:</span>
        </label>
        <input
          type="number"
          id="beforePrice"
          placeholder="Fill in the before price if the product is on discount."
          className="mt-1 p-2 text-sm block w-full border rounded-md focus:outline-none focus:border-amber-400"
          {...register("beforePrice")}
        /> */}

        <label htmlFor="discount">
          <span className="text-gray-700">Discount (%):</span>
        </label>
        <input
          type="number"
          id="discount"
          className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-amber-400"
          {...register("discount")}
        />

        <label htmlFor="images">
          <span className="text-gray-700">Images:</span>
        </label>
        <div>
          <div>
            {selectedImages.map((image, index) => (
              <div key={index}>{image}</div>
            ))}
          </div>
          <input
            type="file"
            accept="image/*"
            id="images"
            className="mt-1 p-2 block bg-amber-200 w-full border rounded-md focus:outline-none focus:border-amber-400"
            {...register("images")}
            multiple
            onChange={handleImageChange}
          />
        </div>

        {errors.images && (
          <p className="text-xs text-red-500">{errors.images.message}</p>
        )}

        <label htmlFor="descriptions" className="block mb-2">
          <span className="text-gray-700">Descriptions (comma-separated) </span>
        </label>
        <textarea
          id="descriptions"
          placeholder="If there is more than one description, separate them with commas."
          className="mt-1 p-2 text-sm block w-full border rounded-md focus:outline-none focus:border-amber-400 mb-2"
          {...register("descriptions")}
        />
        {errors.descriptions && (
          <p className="text-xs text-red-500">{errors.descriptions.message}</p>
        )}

        <button
          type="submit"
          className="mt-4 bg-amber-400 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
