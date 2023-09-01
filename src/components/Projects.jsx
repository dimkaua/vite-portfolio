import React from 'react'
import ProjectItem from './ProjectItem'
import pnrmImg from '../assets/pnrm.png'

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        deserunt debitis repellat ex labore consectetur error rerum, molestiae
        corrupti illum unde quo, dolorem quos, enim non iure. Doloremque, ullam
        illum!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={pnrmImg} title="PNRM Ukraine App" />
        {/* <ProjectItem/>
        <ProjectItem/> */}
      </div>
    </div>
  )
}

export default Projects
