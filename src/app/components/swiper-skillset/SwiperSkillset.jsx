import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

import './swiper-skillset.css';
import { skillset } from '@/app/data/skillset';
import Image from 'next/image';

export default function SwiperSkillset() {
  return (
    <>
      <div className='lg:hidden'>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className='swiper-skillset'
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
        >
          {skillset.map((skill, index) => {

            const { icon, name, description } = skill;

            return (
              <SwiperSlide key={index} className='pt-10'>
                <div className='relative border border-[#535353] rounded-[20px] w-[270px] mx-auto aspect-square'>
                  <Image
                    src={icon}
                    alt={name}
                    width={100}
                    height={100}
                    className='absolute top-[60px] left-1/2 -translate-x-1/2 opacity-90'
                  />

                  <p
                    className='absolute bottom-[30px] left-1/2 -translate-x-1/2 text-white font-bold text-[20px]'
                  >
                    {name}
                  </p>
                </div>

                <p
                  className='mt-8 text-white text-center font-[300]'
                >
                  {description}
                </p>

              </SwiperSlide>
            )

          })}

        </Swiper>
      </div>

      <div className='hidden lg:block'>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className='swiper-skillset'
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          slidesPerView={3}
          centeredSlides={true}
        >
          {skillset.map((skill, index) => {

            const { icon, name, description } = skill;

            return (
              <SwiperSlide key={index} className='pt-10'>
                <div className='relative border border-[#535353] bg-[#2121218C] rounded-[20px] w-[270px] xl:w-[300px] mx-auto aspect-square'>
                  <Image
                    src={icon}
                    alt={name}
                    width={80}
                    height={80}
                    className='absolute top-[60px] xl:top-[80px] left-1/2 -translate-x-1/2 opacity-90'
                  />

                  <p
                    className='absolute bottom-[30px] xl:bottom-[50px] left-1/2 -translate-x-1/2 text-white font-bold text-[20px]'
                  >
                    {name}
                  </p>
                </div>

                <p
                  className='mt-8 text-white text-center font-[300]'
                >
                  {description}
                </p>

              </SwiperSlide>
            )

          })}

        </Swiper>
      </div>

    </>
  );
}
