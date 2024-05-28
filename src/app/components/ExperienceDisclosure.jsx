"use client";
import { useState } from "react";

export default function ExperienceDisclosure({
  exp
}) {

  const [showDisclosure, setShowDisclosure] = useState(false);

  const {year, company, position, description} = exp;

  return (
    <div className="w-full border-b border-[#F0F2F5] pt-8 pb-4">
      <button
        onClick={() => setShowDisclosure(!showDisclosure)}
        className="text-white w-full"
      >
        <span className='flex justify-between items-center'>
          <span className='font-[300] text-[18px]'>{year}</span>
          <span className='font-[300] text-[18px]'>{company}</span>
        </span>

        <span className='mt-2 flex items-center justify-between'>
          <span className='font-[500] text-[24px] text-start leading-[30px] max-w-[300px]'>
            {position}
          </span>

          <span className="text-white  bg-[#212121] w-[50px] h-[25px] flex justify-center items-center rounded-[10px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${showDisclosure ? 'rotate-180 transform ' : ''} size-5`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </span>
        </span>
      </button>

      <ul
        className={`${showDisclosure ? 'max-h-0' : 'max-h-[300px] mt-6'} overflow-hidden transition-all list-disc flex flex-col gap-2 px-5 leading-[22px] font-[300] text-white`}
      >
        {description.map((desc, index) => (
          <li key={index}>
            <p>
              {desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
