import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { projects } from '@/app/data/projects';
import Image from 'next/image';

export default function SwiperProjectsCards() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className='swiper-projects-cards'>
        {projects.map((project, index) => {

          const { name, briefDescription, longDescription, technologies, image, gallery, slug } = project;

          return (
            <SwiperSlide key={index} className="bg_blur_skills">
              {name}

            </SwiperSlide>
          )

        })}

      </Swiper>
    </>
  );
}
