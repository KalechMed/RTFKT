import styles from "../style";
import { socialMedia } from "../constants";
import twitter from '../assets/Twitter.svg';
import discord from '../assets/discord.svg';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        
        <p className={`${styles.paragraph} mt-20 max-w-[800px] ml-[70px] font-Inter text-[#F6F6FD] text-[30px]` }>
          Announcing <span className="text-[#F7931A] font-Inter font-light">#BNStrading</span>  platform 
          built by the community
          for the community.

          <div className="mt-16"> #launchsoon #keepminting</div>
          <div className="mt-2 text-[15px] font-Inter font-light"> Join official Twitter & Discord</div>

          <div className="h-[0.3px] w-[480px] bg-[#F6F6FD] mx-auto opacity-20 mt-2"></div>

          <div className="flex mt-2  ">
            <div className="w-[20px] mt-1">
                  <img src={twitter} />

            </div>

            <div className="w-[30px] ml-4">
                  <img src={discord} />

            </div>


                </div>

        </p>

        
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] ml-[70px] text-white">
        Copyright Ⓒ kalech . All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 mr-10">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
