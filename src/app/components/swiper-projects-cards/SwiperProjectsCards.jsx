import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { projects } from '@/app/data/projects';
import ProjectCard from '../project-card/ProjectCard';

import './swiper-projects-cards.css';

export default function SwiperProjectsCards() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className='swiper-projects-cards'
        loop
        spaceBetween={20}
        breakpoints={
          {
            768: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }
        }
      >
        {projects.map((project, index) => (
            <SwiperSlide key={index} className="">
              <ProjectCard project={project} />
            </SwiperSlide> 
        ))}

      </Swiper>
    </>
  );
}
