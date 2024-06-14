import React from 'react'
import { Nav } from './Navbar'
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter
} from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <div data-scroll data-scroll-speed='-0.8' className=' z-0 bg-gray-100' id='Home'>
      <section className="hero w-full relative">
      <Nav />
      <div className='flex gap-11 sm:flex-row flex-col items-center justify-center sm:pt-0 pt-[70%]'>
      <div className='flex sm:flex-col gap-10 sm:justify-center sm:pl-[0%] sm:pr-0  text-2xl'>
      <a href='https://github.com/NamanGupta1412'><SiGithub /></a>
      <a href='https://x.com/NamanGupta_NG'><FaSquareXTwitter /></a>
      <a href='https://www.linkedin.com/in/naman-gupta-b7bbb6218/'><SiLinkedin /></a>
      <a href='https://www.instagram.com/naman_gupta_ng/'><SiInstagram /></a>
      </div>
        <div className="center flex flex-col h-screen w-[80%] items-center sm:justify-center text-black">
          <div className="line h-[7px] w-[90%] sm:w-2/4 bg-gray-500"></div>
          <div className="post tracking-tighter-[8px] sm:text-[90px] text-[47px]  ">FRONT END</div>
          <div className="post tracking-tighter-[8px] sm:text-[90px] text-[47px] ">DEVELOPER</div>
          <div className="line h-[7px] sm:w-2/4 w-[90%] bg-gray-500 "></div>
          {/* <div className="port text-[50px] mt-[1%]">PORTFOLIO</div> */}
        </div>
        </div>
      </section>
    </div>
  )
}
{/* <div className="socialmedia flex gap-[20px] mt-[1.5%] justify-center">
<div className="linkedin icon rounded-full border border-black py-[2%] px-[5%] cursor-pointer bg-white hover:bg-gray-300"> <a href="https://www.linkedin.com/in/naman-gupta-b7bbb6218/" className='text-black no-underline '>Linkedin</a>
</div>
<div className="GitHub icon rounded-full border border-black py-[2%] px-[5%] cursor-pointer bg-white hover:bg-gray-300"> <a href="https://github.com/NamanGupta1412" className='text-black no-underline '>GitHub</a></div>
</div> */}

export default Hero