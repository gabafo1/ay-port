"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { RiSendPlane2Line } from 'react-icons/ri';
import { SiBilibili, SiChatbot } from 'react-icons/si';

export default function Bot() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div className='m-10 '>
      {isChatbotVisible && (
        <div className='chatBot bg-white shadow-lg rounded-lg max-w-md border-t-2'>
          <div className='border-b-2 border-slate-300 px-2 py-4 flex items-center justify-between'>
            <div className='inline-flex item-center'>
              <SiBilibili className='w-8 text-black' />
              <span className='ml-8'>Bot</span>
            </div>
            <MdClose className='text-white w-7 h-7' onClick={toggleChatbot} />
          </div>
          <div className='h-80 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2'>
            <div className='flex flex-col items-start'>
              <span className='bg-blue-500 px-2 py-4 rounded-b-xl rounded-tr-xl mb-2 mt-2'>Hi can I help you</span>
            </div>
            <div className='flex flex-col items-end'>
              <span className='bg-gray-400 px-2 py-4 mt-2 mb-2 rounded-b-xl rounded-tl-xl'>Good place for a coffee</span>
            </div>
          </div>
          <div className=''>
            <div className="border-t-2 border-slate-300 flex justify-center p-4">
              <input className="h-12 w-full rounded-full bg-slate-200"></input>
              <Button
                type="submit"
                className='ml-5 h-14 w-14 rounded-full bg-blue-600  flex items-center justify-center focus:outline-none hover:bg-purple-700 transition duration-200 ease-in-out'
              >
                <RiSendPlane2Line className='w-7 h-7 text-white' />
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className='fixed right-4 bottom-11'>
        <Button
          className="chatbot-toggler h-16 w-16 rounded-full bg-purple-600 text-white flex items-center justify-center focus:outline-none hover:bg-purple-700 transition duration-200 ease-in-out"
          onClick={toggleChatbot}
        >
            {isChatbotVisible ? <MdClose className='text-white w-7 h-7' /> : <SiChatbot className='text-white w-7 h-7' />}
        </Button>
      </div>
    </div>
  );
}

