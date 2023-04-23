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
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
        
            <ul class="list-unstyled text-[16px]">
              <li>
                <a class="text-white  font-poppins block pb-2 " href="https://www.creative-tim.com/presentation?ref=njs-profile">Instgram</a>
              </li>
              <li>
                <a class="text-white  font-poppins block pb-2" href="https://blog.creative-tim.com?ref=njs-profile">Discord</a>
              </li>
              <li>
                <a class="text-white  font-poppins block pb-2 " href="https://www.github.com/creativetimofficial?ref=njs-profile">Twitter</a>
              </li>
              <li>
                <a class="text-white 0  font-poppins block pb-2 " href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Youtube</a>
              </li>
              <li>
                <a class="text-white 0  font-poppins block pb-2 " href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Tiktok</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
           
            <ul class="list-unstyled text-[16px] font-poppins">
              <li>
                <a class="text-white   block pb-2 " href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">Main Website</a>
              </li>
              <li>
                <a class="text-white   block pb-2 " href="https://creative-tim.com/terms?ref=njs-profile">Privacy policy</a>
              </li>
              <li>
                <a class="text-white   block pb-2 " href="https://creative-tim.com/privacy?ref=njs-profile">Terms of Services</a>
              </li>
              <li>
                <a class="text-white  block pb-2 " href="https://creative-tim.com/contact-us?ref=njs-profile">Legal Overview</a>
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
