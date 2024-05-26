import Image from "next/image";

export default function CardsWhatIDo() {

  const cards = [
    {
      icon: <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5925 14.8517C10.2503 14.6187 9.90728 14.5022 9.56514 14.5022H8.02724V22.8971H9.56602C9.90817 22.8971 10.2512 22.7805 10.5933 22.5475C10.9355 22.3145 11.1066 21.9649 11.1066 21.498V15.9012C11.1057 15.4351 10.9337 15.0847 10.5925 14.8517ZM35.6345 0.685547H3.8712C1.73719 0.685547 0.00529094 2.25974 0 4.20519V33.1659C0.00529094 35.1114 1.73719 36.6855 3.8712 36.6855H35.6345C37.7694 36.6855 39.5004 35.1114 39.5057 33.1659V4.20519C39.5004 2.25974 37.7685 0.685547 35.6345 0.685547ZM13.5977 21.5133C13.5977 23.0248 12.5739 25.315 9.33322 25.3102H5.24156V12.0143H9.41964C12.5448 12.0143 13.596 14.3013 13.5968 15.8136L13.5977 21.5133ZM22.4759 14.3889H17.7776V17.4762H20.6497V19.8523H17.7776V22.9389H22.4768V25.315H16.9936C16.0095 25.3383 15.1912 24.6296 15.1665 23.7328V13.6793C15.1427 12.7833 15.9213 12.0392 16.9046 12.0167H22.4768L22.4759 14.3889ZM31.6151 23.6532C30.4511 26.1242 28.3656 25.6324 27.4318 23.6532L24.0341 12.0175H26.9062L29.5261 21.1557L32.1336 12.0175H35.0066L31.6151 23.6532Z" fill="#27AE60"/>
            </svg>,
      title: "Web Developer",
      description: "I conduct web testing to ensure optimal functionality, performance, and user experience.",
      img: "/images/mayoreo-desktop-laptop.png"
    },
    {
      icon: <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1.68555" width="14.2857" height="23.7143" rx="3" stroke="#27AE60" strokeWidth="2"/>
              <rect y="29.8281" width="16.2857" height="6.85714" rx="3.42857" fill="#27AE60"/>
              <rect x="36" y="36.6855" width="16.2857" height="25.7143" rx="4" transform="rotate(-180 36 36.6855)" fill="#27AE60"/>
              <rect x="36" y="7.54297" width="16.2857" height="6.85714" rx="3.42857" transform="rotate(-180 36 7.54297)" fill="#27AE60"/>
            </svg>,
      title: "Testing",
      description: "I conduct web testing to ensure optimal functionality, performance, and user experience.",
      img: "/images/vanyplas-slides-laptop.jpg"
    },
    {
      icon: <Image src="/images/ux-ui-svg.svg" width={40} height={40} className="object-cover" alt="ux-ui icon" />,
      title: "UX | UI",
      description: "I conduct web testing to ensure optimal functionality, performance, and user experience.",
      img: "/images/mayoreo-mobile.jpg"
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
      {cards.map(({icon, title, description, img}, index) => (
        <div
          style={{
            background: "linear-gradient(231.89deg, #333333 -12.98%, #161513 29.62%, #161513 65.03%, #333333 97.36%"
          }}
          className="border border-primary rounded-[20px] overflow-hidden"
        >

          <div className="p-5">
            {icon}  
            <h3
              className="text-white text-[24px] mt-5"
            >
              {title}
            </h3>

            <p className="text-white leading-[22px] mt-5 font-[300]">
              {description}
            </p>
          </div>

          <div
            className="bg-[#1C1C22]"
          >
            <Image
              src={img}
              alt="img"
              className="w-full h-auto object-cover mt-5 rounded-[15px]"
              width={300}
              height={300}
            />
          </div>

        </div>
      ))}
    </div>
  )
}
