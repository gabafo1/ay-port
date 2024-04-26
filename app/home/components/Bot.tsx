"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { RiSendPlane2Line } from 'react-icons/ri';
import { SiBilibili, SiChatbot } from 'react-icons/si';
import { getBotResponse } from './rule/rules';

export default function Bot() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [userInput, setUserInput] = useState(""); // State to store user input
  const [botResponse, setBotResponse] = useState(""); // State to store bot response

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value); // Update user input state
  };
  
  

  const handleSendMessage = () => {
    const newBotResponse = getBotResponse(userInput);
    setBotResponse(newBotResponse); // Update bot response state
  };

  return (
    <div className='mt-16 mr-10 '>
      {isChatbotVisible && (
        <div className='chatBot bg-white shadow-lg rounded-lg max-w-md border-t-2'>
          <div className='border-b-2 border-slate-300 px-2 py-4 flex items-center justify-between'>
            <div className=' inline-flex item-center'>
              <SiBilibili className='w-8 h-8 text-black' />
              <span className=' text-black pt-1 pl-4'>Chatbot</span>
            </div>
          </div>
          <div className='h-80 sm:h-60 flex flex-col space-y-4 max-w-md px-2 mb-2 mt-2'>
            <div className='flex flex-col items-end'>
              <span className='user bg-gray-400 px-2 py-4 mt-2 mb-2 rounded-b-xl rounded-tl-xl text-white'>
                {userInput}
              </span>
            </div>
            {/* Display bot responses here */}
            <div className='flex flex-col items-start'>
              <span className='bot bg-blue-500 px-2 py-4 rounded-b-xl rounded-tr-xl mb-2 mt-2 text-white'>
                {botResponse}
              </span>
            </div>
            
          </div>
          <div className=''>
            <div className="chat-input border-t-2 border-slate-300 flex justify-center p-4">
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput} // Update user input on change
                className="h-12 w-full rounded-full bg-slate-200"
              />
              <Button
                type="submit"
                onClick={handleSendMessage}
                className='ml-5 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center focus:outline-none hover:bg-purple-700 transition duration-200 ease-in-out'
              >
                <RiSendPlane2Line className='w-7 h-7 text-white' />
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className='fixed right-4 bottom-8 sm:bottom-11 md:bottom-[470px] lg:bottom-10'>
        <Button
          className="chatbot-toggler h-16 w-16 rounded-full bg-purple-600 text-white flex items-center justify-center focus:outline-none hover:bg-purple-700 transition duration-200 ease-in-out"
          onClick={toggleChatbot}
        >
          {isChatbotVisible ? <MdClose className='text-white w-5 h-5' /> : <SiChatbot className='text-white w-5 h-5' />}
        </Button>
      </div>
    </div>
  );
}
