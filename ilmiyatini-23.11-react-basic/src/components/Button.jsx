import React from "react";

function Button(props) {
  const { type, label, icon, variant } = props;
  const getButtonClass = () => {
    switch (variant) {
      case "primary":
        return "bg-black text-white";
      case "secondary":
        return "text-slate-900 bg-amber-400";
      default:
        return "";
    }
  };

  return (
    <button
      className={`h-[20px] md:h-10 px-2 md:px-4 text-[8px] md:text-xs font-semibold rounded-md ${getButtonClass()} transition duration-300 ease-in-out transform hover:scale-105`}
      type={type}
    >
      {icon && <i className={icon}></i>} {label}
    </button>
  );
}

export default Button;
