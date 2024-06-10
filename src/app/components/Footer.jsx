"use client";
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation";
import useClickLogo from "../utils/useClickLogo";

export default function Footer() {

  const router = useRouter();
  const pathname = usePathname();

  return (
    <footer
      className='border-t border-white py-10'
    >
      <button
        onClick={() => useClickLogo(pathname, router)}
        className="flex justify-center mx-auto"
      >
        <Image
          src="/images/logo-horizontal.svg"
          alt="logo"
          width={200}
          height={2000}
          priority
          className="w-[250px] h-auto mx-auto"
        />
      </button>

      <h2
        className="mt-4 text-[#828282] font-[600] text-[20px] text-center"
      >
        Frontend Engineer
      </h2>

      <a
        href="mailto:ivanpalaciosdev@gmail.com"
        className="text-[#ABB2BF] flex justify-center mt-2 text-[18px]"
      >
        ivanpalaciosdev@gmail.com
      </a>

    </footer>
  )
}
