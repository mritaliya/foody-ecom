import React from "react";
import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setSearch} from"../Store/slices/SearchSlice"

const Navbar = () => {
  const dispatch=useDispatch()
  return (
    <nav className="flex justify-between p-2 items-center mx-3">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-[70px] rounded-full" />
      </div>
      <div className="w-[20%]  ">
        <input
          type="search"
          name="search"
          placeholder="search here.."
          className="p-2 border border-gray-300 outline-none w-full rounded-full"
          onChange={(e)=>dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
