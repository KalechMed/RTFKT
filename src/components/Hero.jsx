

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

<div class="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 mr-[25px] opacity-60">
  <div class=" flex flex-col justify-center items-center w-12 h-[120px] rounded-full bg-white ">
    <a href="https://opensea.io/rtfkt-nike-airforce1" className='py-2'>
      <svg data-v-2ff15ff0="" width="16" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_65723)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm-11.3.252l.032-.051 1.951-3.052a.067.067 0 01.117.008c.326.73.608 1.64.476 2.205-.056.233-.21.548-.384.839a1.531 1.531 0 01-.073.124.066.066 0 01-.056.03H4.257a.067.067 0 01-.057-.103zm8.697 1.05V8.32a.067.067 0 00-.086-.065l-2.281.66a.064.064 0 00-.032.02c-.244.27-.452.45-.507.498l-.004.004a.773.773 0 01-.502.185h-.826V8.78h.656a.07.07 0 00.046-.017l.084-.078c.037-.033.08-.073.131-.124l.014-.014c.027-.027.056-.056.084-.087.034-.033.067-.07.098-.107a5.04 5.04 0 00.404-.5l.04-.055c.024-.037.049-.077.07-.114.064-.1.119-.207.165-.314.021-.046.038-.094.055-.141l.006-.018a1.247 1.247 0 00.052-.662v-.006a1.959 1.959 0 00-.143-.455 2.14 2.14 0 00-.221-.405c-.012-.02-.025-.038-.038-.057l-.03-.044c-.036-.057-.078-.112-.118-.165a5.66 5.66 0 00-.266-.323 6.352 6.352 0 00-.508-.506 6.284 6.284 0 00-.278-.242c-.024-.018-.045-.036-.065-.053l-.039-.032a7.575 7.575 0 01-.062-.047l-.03-.022a.07.07 0 00-.02-.01l-.087-.025v-.728a.43.43 0 00-.124-.302.418.418 0 00-.3-.126.426.426 0 00-.424.428v.49l-.044-.012-.12-.034-.108-.03h-.005l-.825-.224a.043.043 0 00-.048.062l.131.244.027.057.019.038.064.134.058.122.028.062c.034.076.07.157.106.243.031.074.062.147.089.223.074.192.144.397.205.607.015.047.027.093.04.14l.015.058.009.037a3.3 3.3 0 01.062.293c.012.067.023.131.03.196.009.073.018.146.021.22a2.17 2.17 0 01-.05.721c-.01.038-.02.077-.032.115-.012.04-.026.08-.042.122l-.016.046-.003.008a4.852 4.852 0 01-.306.63 7.771 7.771 0 01-.388.618l-.018.027c-.008.01-.014.02-.02.03a.069.069 0 00.055.108H7.81v.842H6.732a.767.767 0 01-.687-.426.744.744 0 01-.078-.419c.004-.042-.028-.082-.07-.082h-2.18a.067.067 0 00-.067.067v.044a2.512 2.512 0 002.508 2.517h3.91c.732 0 1.148-.668 1.557-1.324.114-.183.227-.365.347-.531.215-.3.732-.537.883-.601a.07.07 0 00.042-.064z" fill="#000"></path></g><defs><clipPath id="clip0_0_65723"><path fill="#fff" transform="translate(.5)" d="M0 0h15v15H0z"></path></clipPath></defs></svg>
    </a>
    <a href="https://discord.com/invite/rtfkt" className='py-2' >
    <svg data-v-2ff15ff0="" width="16" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.198 1.231a12.368 12.368 0 00-3.053-.947.046.046 0 00-.05.023c-.131.235-.277.54-.38.781a11.42 11.42 0 00-3.429 0A7.905 7.905 0 005.9.308a.048.048 0 00-.049-.024 12.335 12.335 0 00-3.053.947.044.044 0 00-.02.017C.833 4.153.301 6.988.562 9.786a.051.051 0 00.02.035 12.437 12.437 0 003.745 1.893c.02.006.04 0 .053-.017.288-.394.545-.81.766-1.246a.048.048 0 00-.026-.066 8.184 8.184 0 01-1.17-.558.048.048 0 01-.005-.08c.079-.059.157-.12.232-.182a.046.046 0 01.049-.006c2.455 1.12 5.112 1.12 7.538 0a.046.046 0 01.05.006c.075.061.153.123.232.182a.048.048 0 01-.004.08 7.684 7.684 0 01-1.17.557.048.048 0 00-.026.067c.225.436.483.851.766 1.246a.048.048 0 00.052.017 12.395 12.395 0 003.752-1.893.048.048 0 00.02-.034c.312-3.236-.524-6.047-2.218-8.538a.038.038 0 00-.02-.018zm-7.685 6.85c-.74 0-1.349-.678-1.349-1.511 0-.833.598-1.512 1.349-1.512.756 0 1.36.685 1.348 1.512 0 .833-.598 1.512-1.348 1.512zm4.984 0c-.74 0-1.348-.678-1.348-1.511 0-.833.597-1.512 1.348-1.512.757 0 1.36.685 1.348 1.512 0 .833-.591 1.512-1.348 1.512z" fill="#000"></path></svg>
    </a>
    <a href="https://twitter.com/RTFKT" className='py-2' >
    <svg data-v-2ff15ff0="" width="15" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" class="header__twitter"><path d="M13.133 3.61c.009.125.009.25.009.376 0 3.84-2.924 8.27-8.27 8.27v-.003A8.228 8.228 0 01.417 10.95a5.837 5.837 0 004.302-1.205 2.91 2.91 0 01-2.716-2.018c.436.084.885.067 1.312-.05A2.907 2.907 0 01.984 4.828v-.037c.404.225.856.35 1.319.364a2.91 2.91 0 01-.9-3.88 8.25 8.25 0 005.99 3.036 2.908 2.908 0 014.954-2.651 5.832 5.832 0 001.845-.706 2.917 2.917 0 01-1.277 1.608 5.781 5.781 0 001.669-.458 5.907 5.907 0 01-1.45 1.506z" fill="#000"></path></svg>
    </a>
  </div>
</div>


      
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
