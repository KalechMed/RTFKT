import logo from '../assets/logo.svg';
import video from '../assets/video.mp4';
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




import React from 'react';
import '../index.css'





const Hero = () => {
  return (
    <div className="relative">

      
       <video className="w-full h-600 mt-[-300px]" src={video} autoPlay  preload="auto" loop controls={false} muted ></video>
      <img className="absolute top-5 left-4 w-12 mt-[300px]" src={logo} alt="Logo"/>
     
      <div className="absolute top-5 right-4 text-black mt-[300px] font-poppins font-light text-[12.3px] z-10">
        <a href="/" className="mr-4 px-3">
          Home
        </a>
        <a href="/" className="mr-4 px-3">
          Sneakers
        </a>
        <a href="/" className="mr-2 px-3">
          About
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


      

      
    </div>
    
    
    
   




    
  );
};

export default Hero;
