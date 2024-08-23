import React from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {add} from "../Store/slices/CartSlice"

const Foodcard = ({ detail,handletoast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold items-center  w-[250px] bg-white p-5 flex-col rounded-2xl gap-2">
      <img
        src={detail.img}
        alt=""
        className="w-full h-[130px] hover:scale-110 curser-grab transition-all duration-500 "
      />
      <div className="flex justify-between">
        <h2 className="text-center">{detail.name}</h2>
        <span className="text-center">${detail.price}</span>
      </div>
      <div>
        <p>{detail.desc.slice(0, 60)}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          {detail.rating}
        </span>
        <button
          className="p-1 text-white bg-blue-500 rounded-lg text-sm"
        onClick={() =>{ dispatch(add( detail));  handletoast(detail.name)}}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Foodcard;
