import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2015,
    title: 'IT Company 2GIS',
    duration: '5 Years',
    details:
      'In this company, I held the position of Advertising Sales Manager',
  },
  {
    year: 2020,
    title: 'Business',
    duration: '3 Years',
    details:
      'During this period, two business directions were established from scratch: 1) Home decor store - products were sold both online and in a brick-and-mortar store. 2) Store for touch sensors and pneumatic components - products are exclusively sold online.',
  },
  {
    year: 2022,
    title: 'Freelance, Front-End developer',
    duration: '1 Years',
    details:
      'Developed applications from scratch or partially, using the following technologies: HTML, CSS, SCSS, JavaScript, React',
  },
]
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
}

export default Work
