import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function PrivateRoutes() {
  const navigate = useNavigate();
  const isNotLogin = useSelector((state) => state.auth.token === "");
  const LoginConfirmation = () => {
    Swal.fire({
      title: "Hey there! It looks like you haven't logged in yet.",
      text: "You need to log in to Checkout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log in!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  };
  if (isNotLogin) {
    LoginConfirmation();
    return null;
  }

  return <Outlet />;
}
