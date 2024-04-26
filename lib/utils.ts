import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import moment from 'moment'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const analyze: (text: string) => string = (text) =>{
    if(text.includes('hi') || text.includes('hello'))
        return 'Hi, How can I help you?'
    else if(text.includes('date'))
        return moment().format('MMMM DD YYYY')
    else if(text.includes('time'))
        return moment().format('h:mm:ss a')
    else if(text.includes('google link'))
        return "https://google.com"
    else if(text.includes('interest'))
        return 'Bank interest rate 8.7'
    else if(text.includes('thank you'))
        return 'Thank you for visiting our portfolio website'
    return "I can't get you can you rephase it"
}