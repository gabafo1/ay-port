import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si"

export default function Footer() {
  const socials = [
    {
      link: "https://github.com/gabafo1", 
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://www.linkedin.com/in/ayodeleafolabi", 
      label: "twitter",
      Icon: SiLinkedin,
    },
    {
      link: "https://twitter.com/GabAfoNG", 
      label: "X",
      Icon: SiX,
    },
  ]

  return (
    <div className='border-t mt-20 flex items-center flex-col gap-5 '>
        <div className=' p-4 space-y-5'>
            <h1 className=' text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Ayodele 👨🏽‍💻 </h1>
            <div className='flex items-center gap-5'>
            {socials.map((social, index)=>{
                const Icon = social.Icon
                return(
                <Link 
                href={social.link} 
                key={index} 
                aria-label={social.label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                </Link>)
            })}
        </div>
        </div>
    </div>
  )
}
