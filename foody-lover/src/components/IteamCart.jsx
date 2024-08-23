import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove, increment, decrement } from "../Store/slices/CartSlice";
import toast from "react-hot-toast";

const IteamCart = ({ food }) => {
  const dispatch = useDispatch();
  const { id, name, price, img, qty  } = food;
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        className="absolute right-7 text-gray-600 cursor-pointer"
        onClick={() => {dispatch(remove(id, name, price, img, qty))
          toast(`${name} Remove`,{icon:"😟"})
        }}
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div>
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center ">
          <span className="text-blue-400">${price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus
              className="border-2  text-white bg-blue-500 hover:border-none rounded-md p-1 text-xl duration-300 cursor-pointer"
              onClick={() => dispatch(increment(food))}
            />
            <span>{qty}</span>
            <AiOutlineMinus
              className="border-2 text-white bg-blue-500 hover:border-none rounded-md p-1 text-xl duration-300 cursor-pointer"
              onClick={() => (qty > 1 ? dispatch(decrement(food)) : (qty = 0))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IteamCart;
