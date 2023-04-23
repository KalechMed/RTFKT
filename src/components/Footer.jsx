import React from "react";
import footerlogo from '../assets/footerlogo.svg';

const Footer = () => {
  
    
    return(
      
        
            
            


<footer class="relative bg-[#2b2b2e] pt-20 pb-6 mt-[70px]">
  <div class="container mx-auto px-4 ml-[20px]">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">

        <img src={footerlogo} alt="Logo" className="h-5 mb-5" />
        <h5 class="text-[14px] mt-0 mb-2 text-[#a8a8a9] font-poppins ">
        We are a creator led organisation. RTFKT uses the latest in game engines, NFT, blockchain authentication and augmented reality, combined with manufacturing expertise to create one of a kind sneakers and digital artifacts.
        </h5>
        
      </div>
      <div class="w-full ml-[184px] lg:w-[400px] px-4 ">
        <div class="flex flex-wrap items-top mb-6 ml-[40px]">
          <div class="w-full lg:w-auto px-4 ml-auto">
        
            <ul class="list-unstyled text-[16px]">
              <li>
                <a class="text-white  font-poppins block pb-2 " href="https://www.instagram.com/rtfkt/">Instgram</a>
              </li>
              <li>
                <a class="text-white  font-poppins block pb-2" href="https://discord.com/invite/rtfkt">Discord</a>
              </li>
              <li>
                <a class="text-white  font-poppins block pb-2 " href="https://twitter.com/RTFKT">Twitter</a>
              </li>
              <li>
                <a class="text-white 0  font-poppins block pb-2 " href="https://www.youtube.com/channel/UCVc5Bwg8Fs8ZrzBLeB09ZdA">Youtube</a>
              </li>
              <li>
                <a class="text-white 0  font-poppins block pb-2 " href="https://www.tiktok.com/@rtfkt">Tiktok</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
           
            <ul class="list-unstyled text-[16px] font-poppins">
              <li>
                <a class="text-white   block pb-2 " href="">Main Website</a>
              </li>
              <li>
                <a class="text-white   block pb-2 " href="https://rtfkt.com/privacy">Privacy policy</a>
              </li>
              <li>
                <a class="text-white   block pb-2 " href="https://rtfkt.com/tos">Terms of Services</a>
              </li>
              <li>
                <a class="text-white  block pb-2 " href="https://rtfkt.com/legal-overview">Legal Overview</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="my-6 ">
    <div class="flex flex-wrap ">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-white font-light py-1 w-[450px]">
        RTFKT is a registered trademark of RTFKT Inc. All Rights Reserved. RTFKT All logos are registered trademarks of their respective owners. All<span id="get-current-year">2021</span><div href="https://www.creative-tim.com/product/notus-js" class="text-white " target="_blank"> contents of this document, unless otherwise credited, are copyright © 2023 RTFKT Inc.
          
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>

</footer>

      
    )
}
export default Footer;
