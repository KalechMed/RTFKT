import { useState } from "react";

import {logo} from "../assets";


const Navbar = () => {
  

  return (

    
    <nav className="w-full flex py-6 justify-between items-center navbar">
      
      <img src={logo} alt="logo" className="w-[150px] h-[35px]" />

      
      <div className="flex">
  <button className="bg-white hover:bg-[#D9D9D9] text-black font-Regular font-Inter py-2 px-4 rounded-l-[15px]">
  Create
  </button>
  <button className="bg-white hover:bg-[#D9D9D9] text-black font-Regular font-Inter py-2 px-4 rounded-r-[15px]">
  Market
  </button>
</div>


  
        <button className="font-inter text-[14px] bg-white rounded-[20px] mr-10 w-[140px] h-[40px]">
        Connect wallet
        </button>

        
     
      

        
    </nav>
  );
};

export default Navbar;
