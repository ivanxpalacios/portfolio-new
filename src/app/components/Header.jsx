"use client";
import Image from "next/image"
import Sidebar from "./Sidebar"

export default function Header() {
  return (
    <header className="p-5 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between">
        <button>
          <Image
            src="/images/logo-horizontal.svg"
            alt="logo"
            width={200}
            height={2000}
            priority
            className="w-[200] h-auto"
          />
        </button>

        <Sidebar />
      </div>

    </header>
  )
}
