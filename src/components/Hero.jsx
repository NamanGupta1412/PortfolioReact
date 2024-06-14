import React from 'react'
import { Nav } from './Navbar'
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiGmail
} from "react-icons/si";
import Resume from './Naman_Resume.pdf';

function Hero() {
  return (
    <div data-scroll data-scroll-speed='-0.8' className=' z-0 bg-gray-100 cursor-default' id='Home'>
      <section className="hero w-full relative">
      <Nav />
      <div className='flex gap-11 sm:flex-row flex-col items-center justify-center sm:pt-0 pt-[70%]'>
      <div className='flex sm:flex-col gap-10 sm:justify-center sm:pl-[0%] sm:pr-0  text-2xl'>
      <a href='https://github.com/NamanGupta1412'><SiGithub /></a>
      <a href='mailto:namanguptapubg@gmail.com'><SiGmail /></a>
      <a href='https://www.linkedin.com/in/naman-gupta-b7bbb6218/'><SiLinkedin /></a>
      <a href='https://www.instagram.com/naman_gupta_ng/'><SiInstagram /></a>
      </div>
        <div className="center flex flex-col h-screen w-[80%] items-center sm:justify-center text-black">
          <div className="line h-[7px] w-[90%] sm:w-2/4 bg-gray-500"></div>
          <div className="post tracking-tighter-[8px] sm:text-[90px] text-[47px]  ">FRONT END</div>
          <div className="post tracking-tighter-[8px] sm:text-[90px] text-[47px] ">DEVELOPER</div>
          <div className="line h-[7px] sm:w-2/4 w-[90%] bg-gray-500 "></div>
          <a href={Resume} download="Naman_Gupta" 
          className='mt-11
          px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-blue-400'
          >
          Resume</a>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Hero