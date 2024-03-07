import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCard } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[1½00] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[500px]">
        <div className="text-2xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="text-2xl font-bold">
        {cart?.price}TL ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCard(cart?.id))}
        className="bg-red-600 hover:bg-red-700 text-white w-[100px] h-10 flex items-center justify-center rounded-md cursor-pointer"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
