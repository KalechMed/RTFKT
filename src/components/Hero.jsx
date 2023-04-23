

import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../index.css'

import logo from '../assets/logo.svg';
import video from '../assets/video.mp4';
import mobile from '../assets/heromobile.mp4';
import img1l from '../assets/1.jpg';
import img1r from '../assets/1r.jpg';
import img2l from '../assets/2l.jpg';
import img2r from '../assets/2r.jpg';
import img3l from '../assets/3l.jpg';
import img3r from '../assets/3r.jpg';
import img4l from '../assets/4l.jpg';
import img4r from '../assets/4r.jpg';
import img5l from '../assets/5l.jpg';
import img5r from '../assets/5r.jpg';
import img6l from '../assets/6l.jpg';
import img6r from '../assets/6r.jpg';
import img7l from '../assets/7l.jpg';
import img7r from '../assets/7r.jpg';
import img8l from '../assets/8l.jpg';
import img8r from '../assets/8r.jpg';
import img9l from '../assets/9l.jpg';
import img9r from '../assets/9r.jpg';
import img10l from '../assets/10l.jpg';
import img10r from '../assets/10r.jpg';
import cardlogo from '../assets/cardlogo.svg';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';
import event from '../assets/event.png';






const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // set the breakpoint for mobile devices
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const navigate = useNavigate();

  
  const handlenextClick = () => {
    navigate("/About");
  };

  return (
    <div className="relative">

      
<div className="relative w-full h-600 mt-[-300px]">

{isMobile ? (
        <video src={mobile} autoPlay preload="auto" loop controls={false} muted />
      ) : (
        <video className="w-full h-full object-cover" src={video} autoPlay preload="auto" loop controls={false} muted></video>
      )}

  
<button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 bg-white rounded-[20px] p-3 text-[12px] text-black font-poppins opacity-85 hover:bg-black hover:text-white h-[43px] w-[130px]">
  Forging now
</button>
</div>
  
      <img className="absolute top-5 left-4 w-12 mt-[300px]" src={logo} alt="Logo"/>
      
     
      <div className="absolute top-5 right-4 text-black mt-[300px] font-poppins font-light text-[12.3px] z-10">
        <a href="/" className="mr-4 px-3">
          Home
        </a>
        <a href="/" className="mr-4 px-3">
          Sneakers
        </a>
        <a className="mr-2 px-3">
          <a href="/" onClick={(event) => {
            handlenextClick();
          }}>About</a>
        </a>
      </div>
    

      

      <div className="inset-x-0 bottom-0 text-center bg-white py-4 font-poppins font-semibold text-[13.6px] mt-[17px]">
        <p className="">
          STEP INTO THE FUTURE WITH RTFKT AND NIKE'S AIR FORCE 1 COLLECTION:FEATURING LIMITED EDITION DESIGNS BY 
        </p>
        <p className="">
          TAKASHI MURAKAMI
        </p>
        <p className="m-4">
          GET THE NFT TO BE ABLE TO GET THE PHYSICAL SNEAKERS ON 4.24.23
        </p>
      </div>





      <div className="flex flex-wrap gap-4 justify-center z-10 ">

        
        <div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden mt-6 ">
  <img src={img1l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img1r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo1} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Genesis</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 1776</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>

</div>

  
</div>


<div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden mt-6 ">
  <img src={img2l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img2r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo2} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Murakami Drip</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 4182</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>
</div>

  
</div>

<div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden mt-6 ">
  <img src={img3l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img3r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo3} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Human</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 1986</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>
</div>

  
</div>


<div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden mt-6 ">
  <img src={img4l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img4r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo4} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Robot</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 1126</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>
</div>

  
</div>


<div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden  mt-6">
  <img src={img5l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img5r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo5} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Demon</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 1031</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>
</div>

  
</div>

<div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden mt-6 ">
  <img src={img6l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img6r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo6} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Angel</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 1327</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>
</div>

  
</div>

<div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden mt-6 ">
  <img src={img7l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img7r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo7} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Reptile</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 399</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>
</div>

  
</div>


<div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden mt-6 ">
  <img src={img8l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img8r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo8} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Undead</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 190</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>
</div>

  
</div>


<div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden  mt-6">
  <img src={img9l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img9r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo9} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Murakami DNA</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 167</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>
</div>

  
</div>


<div>

  <div className=" relative group max-w-[470px] rounded-lg overflow-hidden  mt-6">
  <img src={img10l} alt="Card" className="w-full h-auto" />
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
      <img src={img10r} alt="Card hover" className="" />
  </div>
  <div className="absolute top-2 right-3 p-3 opacity-0 group-hover:opacity-100">
    <img src={cardlogo} alt="Logo" className="h-8" />
  </div>
  <img src={logo10} alt="logo" className="absolute mt-[-70px] left-1/2 transform -translate-x-1/2 -translate-y-1 w-[140px]" />
  </div>

<div className="flex items-center mt-4">
<p className="text-sm font-poppins font-bold">RTFKT x Nike Air Force 1 - Alien</p>
</div>
<div className="flex items-center mt-2">
<div class="border-b border-dashed border-black w-full mb-4"></div>
</div>
<div className="flex items-center mt-[-7px]">
<p className="text-[12px] font-poppins font-light mr-auto">Units: 60</p>
<a href="#" className="text-[12px] font-poppins font-light text-blue-500 hover:text-blue-700">Buy on Secondary</a>
</div>

  
</div>
 
<div className='ml-[15px]'>
<img src={event} alt="Card" className="max-h-[470px] mt-6 rounded-lg " />
<p className="text-sm font-poppins font-bold mt-4">RTFKT Special Event with Takashi Murakami</p>
</div>


  

</div>

<div className='mt-[100px] ml-[30px]'>
<div class="text-left ">
  <p class="text-lg font-poppins font-bold">FREQUENTLY ASKED QUESTIONS</p>
  <div class="border-b border-dashed border-black w-full mb-3 mt-4"></div>
  </div>   
  
  <div className="flex items-center">
    <div className="w-1/2">
      <h1 className="text-start text-[16px] font-poppins font-bold ">What are Forging events?</h1>
    </div>
    <div className="w-1/2 flex justify-end">
      <h1 className="text-start text-[16px] font-poppins ">During Forging events, holders of eligible digital collectibles can redeem for limited made-to-order physical products. Forging events last for a limited time, so always check for dates and set reminders.</h1>
    </div>
  </div>

  <div class="border-b border-dashed border-black w-full mb-3 mt-4"></div>

  <div className="flex items-center">
    <div className="w-1/2">
      <h1 className="text-start text-[16px] font-poppins font-bold ">When is the RTFKT x Nike Air Force 1 Forging Event happening? How long will it last?</h1>
    </div>
    <div className="w-1/2 flex justify-start">
      <h1 className="text-start text-[16px] font-poppins ">The Forging Event will take place between April 24-May 8.</h1>
    </div>
  </div>

  <div class="border-b border-dashed border-black w-full mb-3 mt-4"></div>

  <div className="flex items-center">
    <div className="w-1/2">
      <h1 className="text-start text-[16px] font-poppins font-bold ">Where can I view the 10 designs?</h1>
    </div>
    <div className="w-1/2 flex justify-end">
      <h1 className="text-start text-[16px] font-poppins ">You can discover the unique designs of the RTFKT x Nike Air Force 1 collection on the lookbook and our social accounts. https://af1-lookbook.rtfkt.com</h1>
    </div>
  </div>

  <div class="border-b border-dashed border-black w-full mb-3 mt-4"></div>
  
  <div className="flex items-center">
    <div className="w-1/2">
      <h1 className="text-start text-[16px] font-poppins font-bold ">Can I still get the digital collectibles so I can partake in the Forging Event?</h1>
    </div>
    <div className="w-1/2 flex justify-end">
      <h1 className="text-start text-[16px] font-poppins ">Yes, the Pre-Forging event collection is available on OpenSea and other secondary marketplaces. If you purchase the digital collectible and participate in the Forging event you will be able to redeem your physical sneakers on RTFKT.com. The OpenSea link is: OpenSea Collection</h1>
    </div>
  </div>


  <div class="border-b border-dashed border-black w-full mb-3 mt-4"></div>
  
  <div className="flex items-center">
    <div className="w-1/2">
      <h1 className="text-start text-[16px] font-poppins font-bold ">Is there a cost to participate in the Forging event?</h1>
    </div>
    <div className="w-1/2 flex justify-end">
      <h1 className="text-start text-[16px] font-poppins ">The RTFKT x Nike Air Force 1 digital collectibles have already been minted at a price, thus holders will only have to pay gas fees for the transactions during the Forging event. If, however, you do not currently own a digital collectible from the above mentioned OpenSea Pre-Forge collection, then you will need to buy a pair on OpenSea, or on another secondary marketplace, to be eligible for the Forging event.</h1>
    </div>
  </div>

  <div class="border-b border-dashed border-black w-full mb-3 mt-4"></div>
  
  <div className="flex items-center">
    <div className="w-1/2">
      <h1 className="text-start text-[16px] font-poppins font-bold ">Where will the Forging event take place?</h1>
    </div>
    <div className="w-1/2 flex justify-end">
      <h1 className="text-start text-[16px] font-poppins ">The Forging event will take place on https://rtfkt.com. Please watch out for scams and phishing websites. Only access the Forging site from our official Twitter and Discord channels, or from our website https://rtfkt.com</h1>
    </div>
  </div>

  <div class="border-b border-dashed border-black w-full mb-3 mt-4"></div>
  
  <div className="flex items-center">
    <div className="w-1/2">
      <h1 className="text-start text-[16px] font-poppins font-bold ">If I want to directly mint off the smart contract, will I still be able to receive the physical sneakers?</h1>
    </div>
    <div className="w-1/2 flex justify-end">
      <h1 className="text-start text-[16px] font-poppins ">During Forging events, holders of eligible digital collectibles can redeem for limited made-to-order physical products. Forging events last for a limited time, so always check for dates and set reminders.</h1>
    </div>
  </div>



</div>









    </div> 

    
    
    
   




    
  );
};

export default Hero;
