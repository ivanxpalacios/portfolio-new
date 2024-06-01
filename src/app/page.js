"use client";
import Image from "next/image";
import CardsWhatIDo from "./components/CardsWhatIDo";
import ExperienceDisclosure from "./components/ExperienceDisclosure";
import { experiencia } from "./data/experiencia";
import SwiperSkillset from "./components/swiper-skillset/SwiperSkillset";
import SwiperProjectsCards from "./components/swiper-projects-cards/SwiperProjectsCards";

export default function Home() {
  return (
    <main className="mt-14">
      <section>
        <div
          className="px-5"
        >
          <h1 className="text-white text-[28px] font-bold leading-[34px]">
            Hi, I am <br /> Iván Palacios
          </h1>

          <h2
            className="mt-6 text-[#828282] font-[600] text-[18px]"
          >
            Frontend Engineer
          </h2>

          <p className="mt-2 text-white font-[200]">
            Building pixel-perfect, engaging and accessible frontend products with best user experiences.
          </p>

          <div className="mt-6 flex items-center gap-6">
            <button
              className="bg-primary h-10 rounded-[10px] w-full text-white text-[14px] font-[300]"
            >
              Contact Me
            </button>

            <button
              className="bg-[#171717] border border-[#F2F2F2] h-10 rounded-[10px] text-[14px] w-full text-white font-[300]"
            >
              Download Resume
            </button>
          </div>
        </div>

        <div
          className="bg-blur-movil flex items-center justify-center"
        >
          <Image
            src="/images/foto-personal.png"
            alt="foto-personal"
            className="w-[75%] h-auto object-cover"
            width={300}
            height={600}
            priority
          />
        </div>

        <div className="px-5">
          <hr className="bg-primary w-full h-[10px] rounded-[20px] border-0" />
        </div>
      </section>

      {/* Sección About me */}
      <section className="px-5 mt-20">
        <h1 className="text-white text-[32px] font-bold leading-[38px] text-center">
          <span className="text-primary">/</span>About me
        </h1>

        <Image
          src="/images/svg-about-me.svg"
          alt="about-me"
          className="w-full h-auto object-cover mt-6"
          width={300}
          height={600}
        />

        {/* What I do */}
        <div>
          <h2
            className="text-white text-[24px] mt-14"
          >
            <span className="text-primary font-bold">#</span>what I do
          </h2>

          <p className="mt-6 text-white leading-[22px] font-[300] border-l border-primary px-6">
            Currently working as the <span className="font-[600]">Front-End Development Team Lead</span> for the company I work for, creating the interfaces that thousands of clients visit in the e-commerce projects in which I participate while coordinating the activities of different developers, in addition to the applications and hiring of new members for my team.
          </p>

          <div className="mt-14">
            <CardsWhatIDo />
          </div>

        </div>

        <div className="mt-14">
          <h2
            className="text-white text-[24px]"
          >
            <span className="text-primary font-bold">#</span>Experience
          </h2>

          <p className="mt-6 mb-2 text-white leading-[22px] font-[300] border-l border-primary px-6">
            I've worked in UI design and front-end development, so I can understand designs well and builds effective communication between team members.
          </p>

          <div>
            {experiencia.map((exp, index) => (
              <ExperienceDisclosure
                key={index}
                exp={exp}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Sección My Skillset */}
      <section className="px-5 mt-20">
        <h1 className="text-white text-[32px] font-bold leading-[38px] text-center">
          <span className="text-primary">/</span>My <span className="text-primary">Skillset</span>
        </h1>

        <div className="mt-14">
          <SwiperSkillset />
        </div>
      </section>

      {/* Sección Work */}
      <section className="px-5 mt-20">
        <h1 className="text-white text-[32px] font-bold leading-[38px] text-center">
          <span className="text-primary">/</span>Work
        </h1>

        <div className="mt-10">
          <h2
            className="text-white text-[28px] leading-[34px]"
          >
            <span className="text-primary font-bold">#</span>Look at my <br /> <span className="text-primary">projects</span>
          </h2>

          <p className="mt-6 text-white leading-[22px] font-[300] border-l border-primary px-6">
            I am part of the process of creating and maintaining multiple e-commerce projects such as the ones shown below:
          </p>
        </div>

        <div className="mt-10">
          <SwiperProjectsCards />
        </div>

        <div className="mt-20">

        </div>

      </section>
    </main>
  );
}
