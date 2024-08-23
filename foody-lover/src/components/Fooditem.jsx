import React, { useContext } from "react";
import Foodcard from "./Foodcard";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from 'react-hot-toast';
import Foodcontex from "../contex/Foodcontex";
import { useSelector } from "react-redux";

const Fooditem = () => {
  const search=useSelector((state)=>state.search.search)
  const{menu,setMenu}=useContext(Foodcontex)
  const handletoast=(detail)=>toast.success(`${detail} Added in Cart`)
  return (
   <>
   <Toaster position="top-center" reverseOrder={false}/>
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {
        FoodData.filter((food)=>{
          if (menu==="All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          }else{
            return (menu===food.category && food.name.toLowerCase().includes(search.toLowerCase()))
          }
        }).map((item) => (
          <Foodcard key={item.id} detail={item} handletoast={handletoast} />
        ))
      }


      {/* FoodData.map((item) => (
        <Foodcard key={item.id} detail={item} handletoast={handletoast} />
      )) */}

    </div>
   </>
  );
};

export default Fooditem;
