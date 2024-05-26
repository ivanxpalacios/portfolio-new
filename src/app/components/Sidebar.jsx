"use client";
import { useState } from "react";
import Image from "next/image"
import { Box, SwipeableDrawer } from "@mui/material";
import Link from "next/link";

export default function Sidebar() {
  const [state, setState] = useState(false);

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

  const arrayIcons =[
    {
      icon: <svg width="44" height="44" viewBox="0 0 36 36" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.4375 6.75C10.9111 6.75 5.625 11.9117 5.625 18.2846C5.625 23.3886 9.00633 27.6996 13.7018 29.228C14.2924 29.3289 14.5139 28.9829 14.5139 28.6801C14.5139 28.4061 14.4991 27.4978 14.4991 26.5318C11.5313 27.0652 10.7634 25.8253 10.5272 25.1765C10.3943 24.8448 9.81844 23.8211 9.31641 23.5472C8.90297 23.3309 8.31234 22.7975 9.30164 22.783C10.2319 22.7686 10.8963 23.6193 11.1178 23.9653C12.1809 25.7099 13.879 25.2197 14.5582 24.9169C14.6616 24.1672 14.9716 23.6625 15.3112 23.3742C12.683 23.0858 9.93656 22.091 9.93656 17.679C9.93656 16.4246 10.3943 15.3865 11.1473 14.5791C11.0292 14.2907 10.6158 13.1084 11.2655 11.5224C11.2655 11.5224 12.2548 11.2196 14.5139 12.7047C15.4589 12.4452 16.463 12.3154 17.467 12.3154C18.4711 12.3154 19.4752 12.4452 20.4202 12.7047C22.6793 11.2052 23.6686 11.5224 23.6686 11.5224C24.3183 13.1084 23.9048 14.2907 23.7867 14.5791C24.5398 15.3865 24.9975 16.4102 24.9975 17.679C24.9975 22.1054 22.2363 23.0858 19.608 23.3742C20.0363 23.7346 20.4054 24.4267 20.4054 25.5081C20.4054 27.0508 20.3906 28.2908 20.3906 28.6801C20.3906 28.9829 20.6121 29.3433 21.2027 29.228C23.5479 28.4551 25.5857 26.9835 27.0293 25.0204C28.4729 23.0572 29.2496 20.7014 29.25 18.2846C29.25 11.9117 23.9639 6.75 17.4375 6.75Z"
                fill="inherit"
              />
            </svg>,
      link: "https://github.com/IvanBLife"
    },
    {
      icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.73572 8.34994C6.73572 7.45865 7.47634 6.73633 8.39016 6.73633H27.6098C28.5237 6.73633 29.2643 7.45865 29.2643 8.34994V27.6513C29.2643 28.5426 28.5237 29.2649 27.6098 29.2649H8.39016C7.47634 29.2649 6.73572 28.5426 6.73572 27.6513V8.34994ZM13.6956 25.5956V15.4225H10.3149V25.5956H13.6956ZM12.006 14.0328C13.1845 14.0328 13.9181 13.2527 13.9181 12.2755C13.897 11.2772 13.1859 10.5183 12.0285 10.5183C10.8711 10.5183 10.115 11.2786 10.115 12.2755C10.115 13.2527 10.8486 14.0328 11.9835 14.0328H12.006ZM18.9166 25.5956V19.9141C18.9166 19.61 18.9392 19.3059 19.0293 19.089C19.2729 18.4822 19.829 17.8528 20.764 17.8528C21.9876 17.8528 22.4761 18.7849 22.4761 20.1535V25.5956H25.8568V19.7607C25.8568 16.6348 24.1897 15.1817 21.965 15.1817C20.1712 15.1817 19.3672 16.1673 18.9166 16.8615V16.8967H18.8941C18.9016 16.885 18.9091 16.8732 18.9166 16.8615V15.4225H15.5373C15.5796 16.3771 15.5373 25.5956 15.5373 25.5956H18.9166Z" fill="inherit"/>
            </svg>,
      link: "https://www.linkedin.com/in/ivanpalaciosdev/?locale=en_US"
    },
    {
      icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.832 8.16797H8.16829C6.81079 8.16797 5.71033 9.26844 5.71033 10.6259V25.3737C5.71033 26.7312 6.81079 27.8317 8.16829 27.8317H27.832C29.1895 27.8317 30.2899 26.7312 30.2899 25.3737V10.6259C30.2899 9.26844 29.1895 8.16797 27.832 8.16797Z" fill="inherit"/>
              <path d="M32.2913 12.6572L25.8818 15.2488L19.4722 17.8403C19.031 18.0162 18.5209 18.1095 18.0002 18.1095C17.4796 18.1095 16.9694 18.0162 16.5282 17.8403L3.70911 12.6572" stroke="#161513" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      link: "mailto:ipm_98_@hotmail.com"
    },
    {
      icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4376 7.62489C8.06855 9.89871 5.26556 17.1904 8.46201 23.1518C8.53165 23.2815 8.55308 23.4744 8.51617 23.6172C8.24355 24.6619 7.9495 25.7012 7.66438 26.7428C7.46141 27.4839 7.262 28.2262 7.05188 29C7.1745 28.9756 7.26021 28.9637 7.34355 28.9417C9.07808 28.4881 10.8108 28.0292 12.5483 27.5875C12.7102 27.5464 12.9245 27.5702 13.0745 27.6446C15.1525 28.6762 17.3388 29.0476 19.6329 28.7161C25.7002 27.8393 29.8306 22.1023 28.7865 16.0196C27.655 9.42728 20.7323 5.37725 14.4376 7.62489ZM19.0627 26.9274C17.0257 27.1601 15.1192 26.728 13.3591 25.6756C13.1739 25.5649 13.015 25.5357 12.8055 25.5934C11.784 25.8732 10.7584 26.1369 9.67035 26.4232C9.93582 25.4541 10.1668 24.5339 10.4459 23.6279C10.5644 23.2434 10.5114 22.9547 10.3037 22.6107C7.26914 17.591 9.69773 11.1005 15.2739 9.29156C20.7549 7.51358 26.5181 11.3029 27.0615 17.0416C27.5288 21.9773 23.9871 26.3649 19.0621 26.9274H19.0627Z" fill="inherit"/>
              <path d="M23.4664 20.7139C22.6837 20.2687 21.8801 19.8586 21.0771 19.4491C20.8634 19.3401 20.6843 19.4205 20.5325 19.6098C20.2974 19.9038 20.0486 20.1877 19.7956 20.4663C19.4265 20.8729 19.2789 20.8961 18.7902 20.652C17.3301 19.9223 16.1902 18.8538 15.3866 17.4294C15.1813 17.0651 15.186 16.9252 15.4521 16.5984C15.6521 16.3526 15.8967 16.1365 16.0587 15.8687C16.1581 15.7038 16.2164 15.4419 16.1598 15.2663C15.9295 14.5502 15.6622 13.8449 15.3765 13.149C15.3003 12.9627 15.1396 12.7746 14.967 12.671C14.5456 12.4181 13.8509 12.5062 13.4848 12.83C12.6301 13.5871 12.2545 14.5389 12.3807 15.6752C12.4914 16.6699 12.9836 17.5032 13.5021 18.3336C14.9795 20.6985 16.9604 22.4235 19.6557 23.2556C20.0688 23.383 20.4997 23.4544 20.8313 23.5306C21.1527 23.4872 21.3765 23.4866 21.5825 23.4247C23.0426 22.9872 23.5242 22.3628 23.6295 21.2026C23.6444 21.0407 23.5801 20.7782 23.4664 20.7139Z" fill="inherit"/>
            </svg>,
      link: "https://api.whatsapp.com/send?phone=+522293628952&text=Hi!%20I'm%20interested%20in%20working%20with%20you!"
    },

  ]

  const List = () => (
    <Box
      sx={{ width: 300, height: "100%", backgroundColor: "#161513", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}
      onKeyDown={toggleDrawer(false)}
    >
      <div>
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo-vertical-verde.svg"
            alt="logo"
            width={80}
            height={200}
            priority
            className="w-[80px] h-auto"
          />

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
            <Link
              href="/"
              className="text-[#ABB2BF] hover:text-white transition-colors font-[500] text-[32px]"
            >
              <span className="text-primary">#</span>home
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="text-[#ABB2BF] hover:text-white transition-colors font-[500] text-[32px]"
            >
              <span className="text-primary">#</span>about-me
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="text-[#ABB2BF] hover:text-white transition-colors font-[500] text-[32px]"
            >
              <span className="text-primary">#</span>work
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="text-[#ABB2BF] hover:text-white transition-colors font-[500] text-[32px]"
            >
              <span className="text-primary">#</span>contact
            </Link>
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
          {arrayIcons.map((item, index) => (
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
