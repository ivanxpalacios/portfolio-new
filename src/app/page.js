"use client";
import Image from "next/image";
import CardsWhatIDo from "./components/CardsWhatIDo";
import ExperienceDisclosure from "./components/ExperienceDisclosure";
import { experiencia } from "./data/experiencia";
import SwiperSkillset from "./components/swiper-skillset/SwiperSkillset";
import SwiperProjectsCards from "./components/swiper-projects-cards/SwiperProjectsCards";
import { contactIcons } from "./data/contactIcons";

export default function Home() {
  return (
    <main>
      <section  className="mt-14 lg:mt-0 lg:flex items-center justify-between banner-home-desktop max-w-[1300px] mx-auto" id="home">
        <div
          className="px-5 lg:max-w-[470px] xl:max-w-[500px]"
        >
          <h1 className="text-white text-[28px] lg:text-[50px] font-bold leading-[34px] lg:leading-[56px]">
            Hi, I am <br /> Iván Palacios
          </h1>

          <h2
            className="mt-6 text-[#828282] font-[600] text-[18px] lg:text-[26px]"
          >
            Frontend Engineer
          </h2>

          <p className="mt-2 text-white font-[200] text-[18px] lg:text-[20px]">
            Building pixel-perfect, engaging and accessible frontend products with best user experiences.
          </p>

          <div className="mt-6 flex items-center gap-6">
            <button
              className="bg-primary h-10 rounded-[10px] w-full text-white text-[14px] lg:text-[18px] font-[300] lg:max-w-[190px]"
            >
              Contact Me
            </button>

            <button
              className="bg-[#171717] border border-[#F2F2F2] h-10 rounded-[10px] text-[14px] lg:text-[18px] w-full text-white font-[300] lg:max-w-[190px]"
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
            className="w-[75%] md:max-w-[400px] h-auto object-cover lg:hidden"
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
      <section className="px-5 mt-20 lg:mt-28 max-w-[1300px] mx-auto" id="about-me">
        <h1 className="text-white text-[36px] lg:text-[50px] font-bold leading-[42px] text-center">
          <span className="text-primary">/</span>About me
        </h1>

        <Image
          src="/images/svg-about-me.svg"
          alt="about-me"
          className="w-full max-w-[500px] mx-auto h-auto object-cover mt-6 lg:hidden"
          width={300}
          height={600}
        />

        <Image
          src="/images/svg-about-me-desktop.svg"
          alt="about-me"
          className="w-full max-w-[750px] mx-auto h-auto object-cover mt-6 hidden lg:block"
          width={600}
          height={600}
        />

        {/* What I do */}
        <div className="mt-14 lg:mt-20">
          <div className="lg:flex justify-between items-start">
            <h2
              className="text-white text-[28px] lg:text-[44px]"
            >
              <span className="text-primary font-bold">#</span>what I do
            </h2>

            <p className="mt-6 text-white leading-[22px] lg:text-[20px] lg:leading-[26px] font-[300] border-l border-primary px-6 lg:max-w-[660px]">
              Currently working as the <span className="font-[600]">Front-End Development Team Lead</span> for the company I work for, creating the interfaces that thousands of clients visit in the e-commerce projects in which I participate while coordinating the activities of different developers, in addition to the applications and hiring of new members for my team.
            </p>

          </div>

          <div className="mt-14 lg:mt-20">
            <CardsWhatIDo />
          </div>
        </div>
      </section>

      {/* Sección Experience */}
      <section className="px-5 mt-20 lg:mt-28" id="experience">

        <h1 className="text-white text-[36px] lg:text-[50px]  font-bold leading-[42px] text-center">
          <span className="text-primary">/</span>Experience
        </h1>

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

        <div className="mt-14 lg:mt-20">
          <h2
            className="text-white text-[28px]"
          >
            <span className="text-primary font-bold">#</span>My Skillset
          </h2>

          <div className="mt-14 lg:mt-20  bg_blur_skills">
            <SwiperSkillset />
          </div>
        </div>
      </section>

      {/* Sección Projects */}
      <section className="px-5 mt-20 lg:mt-28" id="projects">
        <h1 className="text-white text-[36px] font-bold leading-[42px] text-center">
          <span className="text-primary">/</span>Projects
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
      </section>

      {/* Sección Contact */}
      <section  className="px-5 my-20" id="contact">
        {/* Div Let's work together */}
        <div
          className="border-b pb-2 w-fit flex items-end gap-4"
        >
          <h2
            className="text-white text-[28px] leading-[34px]"
          >
            <span className="text-primary font-bold">#</span>Let's work<br /> <span className="text-primary">together</span>
          </h2>

          <svg width="22" height="22" viewBox="0 0 14 14" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.65428 13.9146L0.946533 13.2068L12.2388 1.91455H4.94653V0.914551H13.9465V9.91455H12.9465V2.6223L1.65428 13.9146Z" fill="#FFF"/>
          </svg>

        </div>

        <div className="flex justify-between items-center">
          <p
            className="mt-6 font-bold text-[18px] uppercase text-white"
            >
            Contact<span className="ms-1">me</span>
          </p>

          <ul className="mt-5 flex items-center justify-center gap-2">
            {contactIcons.map((item, index) => (
              <li key={index}>
                <button
                  className="fill-[#535353] hover:fill-white transition-[fill]"
                  onClick={() => window.open(item.link)}
                >
                  {item.icon}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={"/images/contact-cards.webp"}
          alt="contact-cards"
          width={600}
          height={600}
          className="w-full h-auto mt-10"        
        />

        <div>
          <p className="text-[22px] mb-4 text-primary font-bold text-center"> 
            SCAN ME!
          </p>

          <Image
            src={"/images/qr-code.svg"}
            alt="qr code"
            width={600}
            height={600}
            className="w-full max-w-[200px] mx-auto h-auto"        
          />
        </div>


      </section>
    </main>
  );
}
