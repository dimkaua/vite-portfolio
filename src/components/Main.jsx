import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
  FaGithub,
  FaSlack,
} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main" className="relative">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://if.plast.org.ua/wp-content/uploads/2013/11/1212-1.jpg"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="max-w-[700px] mx-auto text-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I`m Dmytro Gorobets
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I`m
            <TypeAnimation
              sequence={['ITshnik', 1000, 'Front-End Developer', 1000]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center pt-6 max-w-[200px] mx-auto">
            <FaGithub className="cursor-pointer p-2" size={50} />
            <FaLinkedinIn className="cursor-pointer p-2" size={50} />
            <FaInstagram className="cursor-pointer p-2" size={50} />
            <FaTelegram className="cursor-pointer p-2" size={50} />
            <FaSlack className="cursor-pointer p-2" size={50} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
