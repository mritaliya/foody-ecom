import React from "react";
import { useContext } from "react";
import Foodcontex from "../contex/Foodcontex";
const MenuList = ["All", "Breakfast", "Dinner", "Snacks"];

const Menu = () => {
  const { menu, setMenu } = useContext(Foodcontex);

  

  return (
    <div className="mx-3">
      <h3 className="text-2xl font-bold">Welcome to Viyag Foody</h3>
      <div className="my-5 space-x-3">
        {MenuList.map((item) => {
          return (
            <button
              key={item}
              value={item}
              onClick={() => setMenu(item)}
              className={` bg-slate-200 text-gray-600 px-3 py-2 rounded-lg  ${
                menu === item ? "bg-green-500" : "bg-slate-200"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
