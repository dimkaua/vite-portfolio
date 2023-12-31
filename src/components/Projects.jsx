import React from 'react'
import ProjectItem from './ProjectItem'
import pnrmImg from '../assets/pnrm.png'
import portfolioImg from '../assets/portfolio.png'

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Here are a few of my projects that I worked on as a frontend developer
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={pnrmImg} title="PNRM Ukraine App" />
        <ProjectItem img={portfolioImg} title="Portfolio App" />
      </div>
    </div>
  )
}

export default Projects
