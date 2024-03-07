import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigete = useNavigate();

  return (
    <div
      onClick={() => navigete(`products/${product?.id}`)}
      className="w-[284px] p-3 mb-2 mx-2 border rounded-md relative cursor-pointer"
    >
      <div className="text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">
        {product?.price}
        <span className="text-sm">TL</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-contain m-auto"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 mt-3 text-xl">{product?.title}</div>
    </div>
  );
};

export default Product;
