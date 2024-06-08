"use client";
import { useState } from "react";
import Image from "next/image"
import { Box, SwipeableDrawer } from "@mui/material";
import Link from "next/link";
import { contactIcons } from "../data/contactIcons";
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const [state, setState] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const handleClickLink = (name) => {
    if (pathname === "/") {
      const element = document.getElementById(name);
      
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });

    } else {
      router.push(`/#${name}`);
    }
    setState(false);
  }

  const List = () => (
    <Box
      sx={{ width: 300, height: "100%", backgroundColor: "#161513", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}
      onKeyDown={toggleDrawer(false)}
    >
      <div>
        <div className="flex items-center justify-between">
          <button
            name="home"
            onClick={(e) => handleClickLink(e.target.name)}
          >
            <Image
              name="home"
              src="/images/logo-vertical-verde.svg"
              alt="logo"
              width={80}
              height={200}
              priority
              className="w-[80px] h-auto"
            />
          </button>

          {/* Botón X de cerrar */}
          <button
            onClick={toggleDrawer(false)}
            className="fill-[#D9D9D9] hover:fill-white transition-[fill]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" fill="inherit"/>
              <rect x="3" y="19.9707" width="24" height="2" transform="rotate(-45 3 19.9707)" fill="inherit"/>
              <rect x="4" y="3" width="24" height="2" transform="rotate(45 4 3)" fill="inherit"/>
            </svg>
          </button>
        </div>

        {/* Lista de Links */}
        <ul className="mt-20 flex flex-col gap-8">
          <li>
            <button
              onClick={(e) => handleClickLink(e.target.name)}
              name="about-me"
              className="text-[#ABB2BF] hover:text-white transition-colors font-[500] text-[32px]"
            >
              <span className="text-primary">#</span>about-me
            </button>
          </li>

          <li>
            <button
              className="text-[#ABB2BF] hover:text-white transition-colors font-[500] text-[32px]"
              name="experience"
              onClick={(e) => handleClickLink(e.target.name)}
            >
              <span className="text-primary">#</span>experience
            </button>
          </li>

          <li>
            <button
              className="text-[#ABB2BF] hover:text-white transition-colors font-[500] text-[32px]"
              name="projects"
              onClick={(e) => handleClickLink(e.target.name)}
            >
              <span className="text-primary">#</span>projects
            </button>
          </li>

          <li>
            <button
              name="contact"
              onClick={(e) => handleClickLink(e.target.name)}
              className="text-[#ABB2BF] hover:text-white transition-colors font-[500] text-[32px]"
            >
              <span className="text-primary">#</span>contact
            </button>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <div className="text-[24px] text-white font-[500] text-center leading-[24px]">
          <p>
            <span className="text-primary">#</span>Let's
          </p>

          <p className="text-primary">Connect.</p>
        </div>

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
    </Box>
  );

  return (
    <>
      <div className="flex">
        <button
          onClick={toggleDrawer(true)}
        >
          <Image
            src="/images/menu-icon.svg"
            alt="menu"
            width={30}
            height={30}
            className="w-[30px] h-auto"
          />
        </button>

        <SwipeableDrawer
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          transitionDuration={350}
          anchor="right"
          sx={{
            "& .MuiBackdrop-root": {
              background: "rgba(0, 0, 0, 0.2)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <List />
        </SwipeableDrawer>
      </div>

      <div className="hidden lgs:block lgs:h-full">
        <List />
      </div>
    </>

  );
}
