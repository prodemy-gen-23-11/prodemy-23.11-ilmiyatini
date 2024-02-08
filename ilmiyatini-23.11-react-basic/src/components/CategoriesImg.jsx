import React from "react";

export default function CategoriesImg(props) {
  const { imgSrc, keterangan } = props;
  return (
    <div>
      <div className="hover:opacity-70 hover:scale-105">
        <img
          src={imgSrc}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <p className="text-[8px] md:text-xs">{keterangan}</p>
      </div>
    </div>
  );
}
