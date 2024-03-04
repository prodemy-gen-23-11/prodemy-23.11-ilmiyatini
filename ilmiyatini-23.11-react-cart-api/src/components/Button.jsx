import React from "react";

function Button(props) {
  const { type, label, icon, variant, onClick } = props;
  const getButtonClass = () => {
    switch (variant) {
      case "primary":
        return "bg-black text-white";
      case "secondary":
        return "border border-slate-200 text-slate-900 bg-amber-300";
      case "tertiary":
        return "text-slate-900 bg-amber-400";
      case "danger":
        return "bg-red-500 text-white text-sm rounded hover:bg-red-600";
      default:
        return "";
    }
  };

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${getButtonClass()} transition duration-300 ease-in-out transform hover:scale-105`}
      type={type}
      onClick={onClick}
    >
      {icon && <i className={icon}></i>} {label}
    </button>
  );
}

export default Button;
