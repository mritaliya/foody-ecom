import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import IteamCart from "./IteamCart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const Cartitem = useSelector((state) => state.cart);
  const totalQty = Cartitem.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = Cartitem.reduce(
    (totalprice, item) => totalprice + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full  lg:w-[30vw] xl:w-[20vw] h-full  bg-white p-5 ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="font-bold text-xl text-gray-800">My Order</span>
          <IoMdClose
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-300 cursor-pointer"
            onClick={() => setActive(!active)}
          />
        </div>
        {Cartitem.map((food) => {
          return <IteamCart food={food} key={food.id} />;
        })}

        <div className="absolute bottom-0">
          <h3 className=" font-semibold text-gray-800 ">Item:{totalQty}</h3>
          <h3 className=" font-semibold text-gray-800 ">
            Total Amount:${totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2 " />
          <button className="bg-blue-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5" onClick={()=>navigate("/sucess")}>
            Check Out
          </button>
        </div>
      </div>

      <FaShoppingCart
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-1 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all "
        }`}
        onClick={() => setActive(!active)}
      />
    </>
  );
};

export default Cart;
