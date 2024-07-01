import React from 'react'
const skills = [
    {
      id: 1,
      name: "HTML",
      image: "https://img.icons8.com/color/48/html-5--v1.png", // Replace with actual path or URL
      description: "Markup language for creating web pages."
    },
    {
      id: 2,
      name: "CSS",
      image: "https://img.icons8.com/color/144/css3.png",
      description: "Style sheet language used for describing the presentation of a document written in HTML."
    },
    {
      id: 3,
      name: "JavaScript",
      image: "https://img.icons8.com/color/144/javascript--v1.png",
      description: "Programming language that allows you to implement complex features on web pages."
    },
    {
      id: 4,
      name: "React",
      image: "https://img.icons8.com/officel/16/react.png",
      description: "JavaScript library for building user interfaces."
    },
    {
      id: 5,
      name: "Next.js",
      image: "",
      description: "React framework that enables server-side rendering and static site generation."
    },
    {
      id: 6,
      name: "Tailwind CSS",
      image: "path/to/tailwindcss-icon.png",
      description: "Utility-first CSS framework for rapidly building custom user interfaces."
    },
    {
      id: 7,
      name: "Git",
      image: "path/to/git-icon.png",
      description: "Version control system for tracking changes in source code."
    },
    {
      id: 8,
      name: "GitHub",
      image: "path/to/github-icon.png",
      description: "Platform for hosting and collaborating on Git repositories."
    }
    
  ];
  

const MySkills = () => {
  return (
    <div className='text-white mx-5 md:mx-40' >
        <div className=' flex justify-center items-center font-semibold  text-xl mb-4'>
          MySkills
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center' >
            {skills.map((item,index)=>{
                return(<div className=' w-40 h-40 rounded-lg mb-4 bg-gradient-to-tl from-gray-600 to-black shadow-md p-5 flex flex-col justify-center items-center' key={index}><img src={item.image} alt="" />{item.name}</div>)
            })}
        </div>
    </div>
  )
}

export default MySkills