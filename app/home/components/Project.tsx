import React from 'react'
import { SiReact, SiReactquery, SiSupabase, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'


export default function Project() {
    const projects = [
        {
            title: "Portfolio",
            tech: [SiReact, SiTailwindcss],
            link: "http://localhost:3000",
            cover: "/Screenshot 2024-04-22 155356.png",
            background: "bg-indigo-500"
        },
        {
            title: "Cloud Platform site",
            tech: [SiReact, SiTailwindcss],
            link: "https://project-nine-mauve.vercel.app/",
            cover: "/Screenshot 2024-04-23 134905.png",
            background: "bg-green-500"
        },
        
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text="Project 🎨" className='flex flex-col items-center justify-center rotate-6' />
        <div className=' grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {
                projects.map((project,index)=>{
                    return (
                    <Link href={project.link} key={index}>
                        <div className={cn("p-5 round-md", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className=' space-y-5 cursor-pointer'>
                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'> 
                                        {project.tech.map((Icon,index)=>{
                                            return(
                                                <Icon 
                                                key={index} 
                                                className=' w-8 h-8'
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                    )
                }) 
            }
        </div>
    </div>
  )
}
