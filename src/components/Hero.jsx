import logo from '../assets/logo.svg';
import video from '../assets/video.mp4';
import img1l from '../assets/1.jpg';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2l.jpg';


import React from 'react';
import '../index.css'





const Hero = () => {
  return (
    <div className="relative">
       <video className="w-full h-600 mt-[-300px]" src={video} autoPlay loop controls={false}></video>
      <img className="absolute top-5 left-4 w-12 mt-[300px]" src={logo} alt="Logo"/>
     
      <div className="absolute top-5 right-4 text-black mt-[300px] font-poppins font-light text-[12.3px]">
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

      <div className="flex flex-wrap gap-4 justify-center">
  <div className="max-w-[400px] rounded-lg overflow-hidden shadow-md">
    <img src={img1} alt="Card image" className="w-full transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-75" />
    <img src={img2} alt="Card image on hover" className="w-full absolute top-0 left-0 opacity-0 transition duration-500 ease-in-out" />
    
  </div>

  
  <div className="max-w-[400px] rounded-lg overflow-hidden shadow-md">
    <img src={img1} alt="Card image" className="w-full" />
    
  </div>
  <div className="max-w-[400px] rounded-lg overflow-hidden shadow-md">
    <img src={img1} alt="Card image" className="w-full" />
    
  </div>
  <div className="max-w-[400px] rounded-lg overflow-hidden shadow-md">
    <img src={img1} alt="Card image" className="w-full" />
    
  </div>
  <div className="max-w-[400px] rounded-lg overflow-hidden shadow-md">
    <img src={img1} alt="Card image" className="w-full" />
    
  </div>
  <div className="max-w-xs rounded-lg overflow-hidden shadow-md">
    <img src={img1} alt="Card image" className="w-full" />
    <div className="px-6 py-4">
      <h3 className="text-lg font-bold mb-2">Card Title 2</h3>
      <p className="text-gray-700 text-base">Card Description 2</p>
    </div>
  </div>
  

</div>


      

      
    </div>
    
    
    
   




    
  );
};

export default Hero;
