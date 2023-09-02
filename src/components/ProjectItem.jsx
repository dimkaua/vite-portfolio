import React from 'react'

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative h-auto w-full group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] rounded-xl overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full w-full shadow-xl shadow-gray-400">
        <img
          src={img}
          alt={title}
          className="rounded-xl group-hover:opacity-80"
        />
        <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">React JS</p>
          <a href="https://github.com/dimkaua">
            <p className="text-center p-3 rounded-md bg-white text-gray-700 font-bold cursor-pointer text-lg">
              More info
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
