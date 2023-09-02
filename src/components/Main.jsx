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
            <a
              href="https://www.linkedin.com/in/dmytro-gorobets-15646911b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FaLinkedinIn className="cursor-pointer" size={40} />
            </a>
            <a
              href="https://www.instagram.com/dimanex/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FaInstagram className="cursor-pointer" size={40} />
            </a>
            <a
              href="https://t.me/dimanex1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FaTelegram className="cursor-pointer" size={40} />
            </a>
            <a
              href="https://github.com/dimkaua?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FaGithub className="cursor-pointer" size={40} />
            </a>
            <a
              href="https://gorobetsdmytro.slack.com/archives/D0231P02DLG"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FaSlack className="cursor-pointer" size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
