import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si"

export default function Navbar({className}:{className?:string}) {
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
    <nav className={cn(' py-10 flex justify-between items-center animate-move-down', className)}>
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
          <ThemeToggle />
        </div>
    </nav>
  )
}
