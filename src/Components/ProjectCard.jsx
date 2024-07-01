import React from 'react'

const projects = [
    {
        title:'Ecom-Raraa',
        git_link:'github/Nagendrayaparala'
    },
    {
        title:'Ecom-Raraa',
        git_link:''
    },
    {
        title:'Ecom-Raraa',
        git_link:''
    },
    {
        title:'Ecom-Raraa',
        git_link:''
    },
]

const ProjectCard = () => {
  return (
    <div>

            {projects.map((item,index)=>{
                return(<div key={index} className='border bg-gray-500 shadow-lg text-white w-40 h-40 flex flex-col gap-2'><h1>{item.title}</h1><h2>{item.git_link}</h2> </div>)
            })}

      
    </div>
  )
}

export default ProjectCard