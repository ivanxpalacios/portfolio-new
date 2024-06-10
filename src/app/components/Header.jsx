"use client";
import Image from "next/image"
import Sidebar from "./Sidebar"
import { useRouter, usePathname } from "next/navigation";
import useClickLogo from "../utils/useClickLogo";

export default function Header() {

  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="p-5 max-w-[1300px] mx-auto sticky top-0 bg-blackprimary z-[10]">
      <div className="flex items-center justify-between">
        <button
          onClick={() => useClickLogo(pathname, router)}
        >
          <Image
            src="/images/logo-horizontal.svg"
            alt="logo"
            width={200}
            height={2000}
            priority
            className="w-[200px] h-auto"
          />
        </button>

        <Sidebar />
      </div>

    </header>
  )
}
