"use client";
import Image from "next/image"
import Sidebar from "./Sidebar"
import { useRouter, usePathname } from "next/navigation";

export default function Header() {

  const router = useRouter();

  const path = usePathname();

  const handleClickLogo = () => {
    if (path === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push("/");
    }
  }

  return (
    <header className="p-5 max-w-[1300px] mx-auto sticky top-0 bg-blackprimary z-[10]">
      <div className="flex items-center justify-between">
        <button
          onClick={handleClickLogo}
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
