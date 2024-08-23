import React,{useState} from "react";
import Menu from "../components/Menu";
import Fooditem from "../components/Fooditem";
import Cart from "../components/Cart";
import Foodcontex from "../contex/Foodcontex";

const Home = () => {
  const [menu, setMenu] = useState("All");
  return (
   <Foodcontex.Provider value={{menu,setMenu}}>
    <div className="mx-6">
      <Menu />
      <Fooditem />
      <Cart />
    </div>
   </Foodcontex.Provider>
  );
};

export default Home;
