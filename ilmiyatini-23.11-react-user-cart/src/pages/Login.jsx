import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/reducers/authReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const redirectToSignup = () => {
    navigate("/signup");
  };

  const onSubmit = (data, e) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        const { accessToken, user } = res.data;
        dispatch(setToken(accessToken));
        dispatch(setUser(user));
        e.target.reset();
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Welcome to IlShop!",
          text: "Shop your way, any day!",
        });
      })
      .catch((error) => {
        console.log(error);
        // Swal.fire({
        //   icon: "error",
        //   title: "Login Failed",
        //   text: "Something went wrong. Please try again.",
        // });
        // && error.response.status === 404
        if (error.response) {
          Swal.fire({
            icon: "info",
            title: "Account not found",
            text: "You don't have an account. Please sign up.",
            confirmButtonText: "Sign Up",
            showCancelButton: true,
            cancelButtonText: "Cancel",
          }).then((result) => {
            if (result.isConfirmed) {
              redirectToSignup();
            }
          });
        }
      });
  };

  return (
    <div className="bg-yellow-400">
      <div className="navigation-buttons flex space-x-3 p-5 ">
        <Link
          to="/"
          className="home-back bg-white text-yellow-400 hover:bg-blue-100"
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </Link>
      </div>
      <div className="flex min-h-screen rounded items-center justify-center bg-amber-200 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-amber-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <img
              src="/logo-new-.png"
              alt="Logo"
              className="mb-4 w-20 mx-auto"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              {...register("email")}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:outline-yellow-400 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              {...register("password")}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:outline-yellow-400 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
          <div className="mb-4 mt-2">
            <p className="text-center text-gray-700 text-sm">
              {`Don't have an account yet? `}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={redirectToSignup}
              >
                Register here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
