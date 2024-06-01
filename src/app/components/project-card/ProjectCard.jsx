import Image from "next/image";
import styles from "./project-card.module.css";

export default function ProjectCard({
  project
}) {

  const { name, briefDescription, longDescription, technologies, image, gallery, slug } = project;

  return (
    <div 
      className={`${styles.card_div} cursor-pointer`}
    >
      <div
        className="relative"
      >
        <Image
          src={image}
          alt={name}
          width={1000}
          height={1000}
          priority
          className="w-full h-auto object-cover aspect-square rounded-[20px]"
        />

        <div
          className={`${styles.info_div} absolute top-0 left-0 bottom-0 right-0 bg-[#000000] bg-opacity-50 flex flex-col justify-end items-center text-white font-[300] p-4 rounded-[20px]`}
        >
          <p>
            {briefDescription}
          </p>
          
          <div className="w-full flex justify-center gap-2 mt-4">
            {technologies.map((technology, index) => (
              <Image
                key={index}
                src={`/images/tech-tags/${technology}-tag.png`}
                alt={name}
                width={300}
                height={300}
                className="w-auto min-h-[34px]"
              />
            ))}
          </div>

        </div>
      </div>

      <div
        className="text-white text-[18px] font-[300] mt-6 flex items-center justify-between border-b border-white pb-2"
      >
        <p>
          {name}
        </p>

        <button
          className={`${styles.view_project_button} font-[600] fill-white flex items-center gap-4 mr-4`}
        >
          View project

          <svg width="14" height="14" viewBox="0 0 14 14" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.65428 13.9146L0.946533 13.2068L12.2388 1.91455H4.94653V0.914551H13.9465V9.91455H12.9465V2.6223L1.65428 13.9146Z" fill="inherit"/>
          </svg>

        </button>

      </div>
    </div>
  )
}
